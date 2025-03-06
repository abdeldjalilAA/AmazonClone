import ProductBadge from "./ProductBadge";
import ProductRating from "./ProductRating";
const ProductDetails = ({ product, rating }) => {
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
  return (
    <div className="mb-1">
      <div className="text-xl xl:text-2xl font-medium mb-1">{title}</div>
      <div className="text-sm xl:text-base  mb-1">
        By <span className="text-blue-500">{brand} </span>
      </div>
      {rating && (
        <div className="text-sm xl:text-base  mb-1">
          <ProductRating avgRating={avgRating} ratings={ratings} />
        </div>
      )}

      <div className="text-xs xl:text-sm font-bold mb-1">{attribute}</div>
      <div className="">
        <ProductBadge badge={badge} />
      </div>
    </div>
  );
};

export default ProductDetails;
