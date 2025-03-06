import { useParams, Link } from "react-router-dom";
import { EUR_CURRENCY } from "./../Utils/constants";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { callApi } from "../Utils/CallApi";
import ProductDetails from "./ProductDetails";
import { addToCart, removeFromCart } from "../redux/carteSlice";
const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("1");

  const dispatch = useDispatch();
  const getProduct = () => {
    callApi("data/products.json").then((products) => {
      setProduct(products[id]);
    });
  };
  useEffect(() => {
    getProduct();
    return () => {};
  }, []);
  if (!product) return <h1>loading product ....</h1>;
  const {
    title,
    image,
    image_small,
    attribute,
    description,
    brand,
    avgRating,
    ratings,
    price,
    oldPrice,
    badge,
  } = product;
  console.log(typeof quantity);
  const AddQteToPrdct = () => {
    setProduct((product.quantity = quantity));
    console.log(product);
    console.log(product.quantity);
    return product;
  };
  return (
    product && (
      <div className="h-screen bg-amazoneclone-background">
        <div className="min-w-[1000px] max-w-[1500px] p-4 m-auto">
          <div className="grid grid-cols-10 gap-2">
            {/* left  */}
            <div className="col-span-3 bg-white p-8 rounded m-auto ">
              <img src={image} alt="" />
            </div>
            {/* midd  */}
            <div className="col-span-5 rounded p-4 divide-y divide-gray-500 bg-white">
              <div className="mb-3">
                <ProductDetails product={product} rating={true} />
              </div>
              <div className="text-base xl:text-xl p-3">{description}</div>
            </div>
            {/* right  */}
            <div className="col-span-2 bg-white p-4 rounded ">
              <div className="text-xl xl:text-2xl font-semibold text-red-700 text-right">
                {EUR_CURRENCY.format(price)}
              </div>
              <div className="text-base xl:text-xl font-semibold text-right text-gray-500">
                RPB:
                <span className="line-through">
                  {EUR_CURRENCY.format(oldPrice)}
                </span>
              </div>
              <div className="text-sm xl:text-base font-semibold mt-3 text-blue-500">
                FREE return
              </div>
              <div className="text-sm xl:text-base font-semibold mt-1 text-blue-500">
                FREE delivery
              </div>
              <div className="text-base xl:text-lg font-semibold mt-1 text-green-700">
                In Stock
              </div>
              <div className="text-base xl:text-lg mt-1 p-1 ">
                <span className="p-1">Quantity</span>
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  className="p-2 bg-white rounded-md focus:border-indigo-600"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <Link to={"/checkout"}>
                <button
                  onClick={() => dispatch(addToCart(AddQteToPrdct()))}
                  className="bg-yellow-400 w-full p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 mt-3"
                >
                  Add To My Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
