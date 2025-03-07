const ProductBadge = ({ badge }) => {
  if (badge === "seller") {
    return (
      <span className="text-xs xl:text-sm bg-orange-500 text-white p-1">
        #1 Best Seller
      </span>
    );
  } else if (badge === "choice") {
    return (
      <span className="text-xs xl:text-sm bg-slate-800 text-white p-1">
        Amazone's <span className="bg-orange-500">Choice</span>
      </span>
    );
  } else if (badge === "limited") {
    <span className="text-xs xl:text-sm bg-orange-500 text-white p-1">
      Limited Time Deal
    </span>;
  }

  return <div></div>;
};

export default ProductBadge;
