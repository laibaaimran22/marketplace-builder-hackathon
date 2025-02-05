import React from "react";
import CategoriesSection from "@/components/shop-page/filters/categoriessection";
import ColorsSection from "@/components/shop-page/filters/colorssec";
import DressStyleSection from "@/components/shop-page/filters/dressstylesec";
import PriceSection from "@/components/shop-page/filters/pricesec";
import SizeSection from "@/components/shop-page/filters/sizesec";
import { Button } from "@/components/ui/button";

const Filters = () => {
  return (
    <>
      <hr className="border-t-black/10" />
      <CategoriesSection />
      <hr className="border-t-black/10" />
      <PriceSection />
      <hr className="border-t-black/10" />
      <ColorsSection />
      <hr className="border-t-black/10" />
      <SizeSection />
      <hr className="border-t-black/10" />
      <DressStyleSection />
      <Button
        type="button"
        className="bg-black w-full rounded-full text-sm font-medium py-4 h-12"
      >
        Apply Filter
      </Button>
    </>
  );
};

export default Filters;