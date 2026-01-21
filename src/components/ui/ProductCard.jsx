import { Link } from "react-router-dom";
import { imgURLForProduct } from "../../library";
import CartBtn from "./CartBtn";

const ProductCard = ({ product }) => {
  const hasDiscount = product.originalPrice > product.price;

  console.log(product);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-center relative group hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${product.slug}`}>
        <img
          src={imgURLForProduct(product?.images?.[0]?.public_id)}
          alt={product.name}
          className="w-full h-100 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <Link
        to={`/product/${product.slug}`}
        className="block text-lg font-semibold text-gray-800 hover:text-blue-600 mb-2"
      >
        {product.name}
      </Link>

      {/* Price Section */}
      {hasDiscount ? (
        <div className="flex flex-col items-center justify-center mb-3 h-12">
          <span className="text-gray-400 line-through text-sm">
            Rs {product.originalPrice}
          </span>
          <span className="text-xl font-bold text-green-600 leading-tight">
            Rs {product.price}
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-center mb-3 h-12">
          <span className="text-xl font-bold text-green-600">
            Rs {product.price}
          </span>
        </div>
      )}

      <CartBtn product={product} />
    </div>
  );
};

export default ProductCard;
