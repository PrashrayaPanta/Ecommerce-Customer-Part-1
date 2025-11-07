import React from "react";
import ProductCard from "./ProductCard";
import LoadingComponent from "./LoadingComponent";

const ProductSection = ({ products = [], Loading, title }) => {
  return (
    <>
      {Loading ? (
        <LoadingComponent />
      ) : products.length > 0 ? (
        <>
          <h1 className="font-bold text-xl">{title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </>
      ) : (
        <p>No Recent Products Found</p>
      )}
    </>
  );
};

export default ProductSection;
