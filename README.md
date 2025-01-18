# marketplace-builder-hackathon
# Marketplace Technical Foundation - E-commerce Clothes Website

This repository contains the technical foundation for an e-commerce platform specializing in clothing. It includes documents for both Day 1 and Day 2 of the hackathon, detailing the business goals, system architecture, workflows, and technical implementation for the platform.

## Folder Structure

- **Documentation/**: Contains key documents outlining the marketplace's business goals, technical foundation, and validation process.
  - **Day 1**: Business goals, market research, and initial schema.
  - **Day 2**: Technical specifications, system architecture, API requirements, and sanity schema.

- **Diagrams/**: Includes visual diagrams for the system architecture, helping to demonstrate how the different components interact within the marketplace.

- **README.md**: This file, explaining the structure of the repository and providing an overview of the project.

## Day 1: Business Goals and Market Research

### Objectives
Day 1 of the project focused on defining the business goals and understanding the marketplace’s position in the market. Key deliverables included:

- **Business Goals**: Defining the purpose of the marketplace, how it solves a specific problem for the target audience, and what will set it apart from competitors.
  - **Problem**: The marketplace aims to make it easier for customers to find and buy clothing for different occasions (casual, formal, party, gym).
  - **Unique Value Proposition**: Personalization features that recommend clothes based on preferences, fast delivery, and quality over quantity.
  - **Target Audience**: People aged 18-40 who prefer easy and convenient shopping for clothes.

- **Market Research**: Insights into competitors and customer needs, such as clothing availability by category and how the marketplace can offer superior service (e.g., better delivery times).

- **Data Schema Draft**: Early drafts of the data schema for products, orders, and customers.
  - Product fields: name, price, image, stock, size, category.
  - Order fields: order ID, customer ID, product details, order status.
  - Customer fields: customer ID, name, email, delivery address.

- **Submission**: A detailed document titled **"Marketplace Business Goals - E-commerce Clothes Website.pdf**" was created, outlining the above topics.

### Deliverables
- **Document**: Marketplace Business Goals (includes problem statement, target audience, market research, and product/service descriptions).
- **Sketches**: Paper sketches identifying key entities (products, customers, orders) and their relationships.

## Day 2: Technical Foundation

### Objectives
Day 2 focused on setting up the technical infrastructure for the marketplace. Key activities included:

- **System Architecture**: A high-level diagram showing interactions between the frontend (built with Next.js), the backend (Sanity CMS), and third-party APIs.
  - **Frontend (Next.js)** handles the website's user interface, including product pages and order forms.
  - **Sanity CMS** stores product and customer data, providing APIs for retrieving and updating content.
  - **Third-Party APIs**: Integration of APIs for payment gateways, shipment tracking, and cart management.

- **Key Workflows**: Defined processes for how users will interact with the platform, such as:
  - Browsing products: Users browse available items fetched from the CMS.
  - Placing an order: Users place an order which is stored in the CMS, and payment is processed through a payment gateway.
  - Shipment tracking: Once an order is placed, the system communicates with a shipment API to update the order’s delivery status.

- **API Requirements**: Detailed specifications for APIs used in the marketplace.
  - Endpoints for adding items to the cart, placing orders, processing payments, and updating shipment status.
  - Methods: GET, POST, PUT, DELETE, and their respective payloads and responses.
  - Example responses for each API endpoint.

- **Sanity Schema Design**: Drafted schemas for products and orders, detailing the necessary fields and relationships between entities.
  - **Product Schema**: Includes fields like name, price, stock, image.
  - **Order Schema**: Includes order ID, customer ID, cart items, and order status.

- **Submission**: A document titled **"Marketplace Technical Foundation - E-commerce Clothes Website.pdf"** was created, containing the system architecture, API requirements, and schema designs.

### Deliverables
- **Document**: Marketplace Technical Foundation (includes system architecture, key workflows, API requirements, and schema designs).
- **System Architecture Diagram**: A visual representation of how different components of the platform interact.
- **Sanity Schema Draft**: Sample code for schemas used in Sanity CMS to manage products and orders.

## Collaboration

Throughout the process, I collaborated with peers to review the system architecture, API requirements, and schema designs. There were some challenges in understanding the level of detail required for each section, especially in terms of API specifications and workflows. After reviewing examples from peers and discussing with mentors, I refined the technical plan and ensured it met the project requirements.

Day 3: API Integration and Data Migration
Objectives
The main focus of Day 3 was on integrating provided APIs and migrating data into the Sanity CMS.
---

This README serves as an overview of the project’s progress, summarizing the work completed on both Day 1 and Day 2. All documents and files associated with the project are organized in their respective folders for easy access and review.

