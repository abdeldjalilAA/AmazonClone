import { StarIcon } from "@heroicons/react/24/outline";

const ProductRating = (props) => {
  const numberRating = props.avgRating;
  const ratingNumb = props.ratings;
  return (
    <div className="flex">
      {Array.from({ length: numberRating }, (_, i) => (
        <StarIcon
          key={i}
          className="stroke-[#f1681f] fill-[#f1681f] h-[20px]"
        />
      ))}
      {Array.from({ length: 5 - numberRating }, (_, i) => (
        <StarIcon key={i} className="stroke-[#f1681f] h-[20px]" />
      ))}
      <span className="ml-3 text-blue-500">{ratingNumb} Ratings</span>
    </div>
  );
};

export default ProductRating;
