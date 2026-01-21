import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import SwiperComponent from "../components/ui/swiper";
import http from "../http";
import ProductSection from "../components/ui/ProductSection";

const Home = () => {
  console.log("I am inside the Home Ciomppoennt");

  const location = useLocation();

  console.log("I am after the location");

  console.log(location);

  const [Latestproducts, setLatestProducts] = useState([]);

  const [Loading, setLoading] = useState(false);

  const [totalItems, setTotalItems] = useState("");

  const [totalPages, setTotalPages] = useState("");

  const getPageMuchProducts = async (page = 1, limit = 8) => {
    try {
      console.log("I am insdie useEffect ko callback");

      setLoading(true);

      const { data } = await http.get(
        `/api/products?page=${page}&limit=${limit}`
      );

      console.log("I am after the data");

      setTotalPages(data.result.totalPages);

      setTotalItems(data.result.totalItems);

      setLatestProducts(data.result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    // setLoading(true);
  };

  useEffect(() => {
    getPageMuchProducts();
  }, []);

  return (
    <>
      {/* Use the Swiper component */}
      <SwiperComponent />

      {/* <h1 className="font-bold text-lg">Latest Products</h1> */}

      {/* <SwiperComponentForLatestProducts/> */}

      <div class="">
        {/* Title of latest Products Section */}

        {/* <ProductSection title="Latest Products" /> */}
        <ProductSection
          products={Latestproducts}
          Loading={Loading}
          title="All Products"
          totalPages={totalPages}
          totalItems={totalItems}
          getPageMuchProducts={getPageMuchProducts}
        />
      </div>
    </>
  );
};

export default Home;
