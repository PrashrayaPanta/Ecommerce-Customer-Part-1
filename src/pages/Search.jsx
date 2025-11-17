import { useState, useEffect } from "react";
import LoadingComponent from "../components/ui/LoadingComponent";
import ProductSection from "../components/ui/ProductSection";
import { useSearchParams } from "react-router-dom";
import http from "../http";

const Search = () => {
  const [query] = useSearchParams();

  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);

  const getSearchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await http.get(
        `/api/products/search?name=${query.get("name")}`
      );

      setProducts(data.products);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSearchProducts();
  }, [query.get("term")]);
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          {products.length > 0 ? (
            <ProductSection
              title={`${query.get("name")}`}
              products={products}
            />
          ) : (
            <h1 className="text-center">Data Not avyavbaile</h1>
          )}
        </>
      )}
    </>
  );
};

export default Search;
