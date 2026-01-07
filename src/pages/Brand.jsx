import React from "react";
import ProductCard from "../components/ui/ProductCard";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import ProductSection from "../components/ui/ProductSection";
import http from "../http";
import LoadingComponent from "../components/ui/LoadingComponent";

const Brand = () => {
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    const getCategoryProducts = async () => {
      try {
        setLoading(true);
        const { data } = await http.get(`/api/brands/${slug}/products`);
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setLoading(false);
      }
    };
    getCategoryProducts();
  }, [slug]);

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          {products.length > 0 ? (
            <ProductSection
              title={`Products of Brand Category`}
              products={products}
            />
          ) : (
            <h1 className="text-center">Data Not available</h1>
          )}
        </>
      )}
    </>
  );
};

export default Brand;
