import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'uho0279s',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-13',
  token: 'skLZnYQJOycIjoDYJ4MrFc8VNxZH3mQNuVxoAejNkbxms1Wug0wNSQ9vMygLmSvd1dlzIO4y1QL7STu0kfpAXCfZKTkPApXME2Ue2V5cbahM1iJZJaGdo4lNAX5eSbjDvXyzRlq1UNxlDxKzkwieF3UN0enSVOW0bGJXUzFZMcm6ZlqqPGCJ',
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      // Provide a default value for description if not available
      const description = product.description || "No description available for this product.";

      const document = {
        _type: 'product', // Ensure that this matches the type in your Sanity schema
        title: product.name, // Match this with your Sanity schema
        description: description,
        price: product.price,
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        category: product.category,
        discountPercent: product.discountPercent,
        isNew: product.isNew,
        attributes: product.colors, // This assumes colors are stored as attributes
        gallery: product.gallery || [], // Assuming gallery is an array of image URLs, can be left empty
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.name} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template1-neon-nu.vercel.app/api/products');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    // Check if the products array is not empty
    if (products && products.length > 0) {
      for (const product of products) {
        await uploadProduct(product);
      }
    } else {
      console.log('No products to import.');
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();
