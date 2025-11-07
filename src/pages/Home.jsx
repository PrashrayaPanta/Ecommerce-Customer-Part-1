import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Import the Swiper component
// import SwiperComponentForLatestProducts from "../components/ui/swiper1";

import SwiperComponent from "../components/ui/swiper";
import ProductCard from "../components/ui/ProductCard";
import http from "../http";
import LoadingComponent from "../components/ui/LoadingComponent";
import ProductSection from "../components/ui/ProductSection";

const Home = () => {
  const location = useLocation();

  console.log(location);

  const [Latestproducts, setLatestProducts] = useState([]);

  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const getLatestProducts = async () => {
      try {
        setLoading(true);
        const { data } = await http.get("/api/products/latestproducts");
        setLatestProducts(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
      // setLoading(true);
    };

    getLatestProducts();
  }, []);

  // console.log(products);

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
          title="Latest Products"
        />
      </div>
    </>
  );
};

export default Home;
