import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { Product } from "./pages/Product";

import { Dashboard } from "./pages/Dashboard";
import Layout from "./components/ui/Layout";
import Category from "./pages/Category";
import Brand from "./pages/Brand";
import Home from "./pages/Home";
import { PrivateRoute } from "./Routes/PrivateRoute";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="login" element={<Login />} />

            <Route path="register" element={<Register />} />

            <Route path="cart" element={<PrivateRoute element={<Cart />} />} />

            {/* <Route path="product" element={<Product />} /> */}

            <Route path="dashboard" element={<Dashboard />} />

            <Route path="product/:slug" element={<Product />} />

            <Route path="search" element={<Search />} />

            <Route path="categories/:slug" element={<Category />} />

            <Route path="brands/:slug" element={<Brand />} />

            {/* <Route path="" /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
