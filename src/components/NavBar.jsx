import { Link } from "react-router-dom";
import { Search } from "./";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNb);
  return (
    <header className="min-w-[1000px] ">
      <div className="flex bg-amazoneclone text-white h-[60px]">
        {/* left  */}
        <div className="flex items-center m-4">
          <Link to={"./"}>
            <img
              className="h-[35px] w-[100px] m-2"
              src="./../images/amazon.png"
              alt=""
            />
          </Link>

          <div className="pl-4 pr-4">
            <div className="text-xs xl:text-sm">Delivered to</div>
            <div className="text-xs xl:text-base font-bold">United kingdom</div>
          </div>
        </div>
        {/* middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* right  */}
        <div className="flex items-center m-4">
          <div className="pl-4 pr-4">
            <div className="text-xs xl:text-sm">Hello ,Sign-in </div>
            <div className="text-xs xl:text-base font-bold">
              Accounts & lists
            </div>
          </div>
          <div className="pl-4 pr-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-xs xl:text-base font-bold">& Orders</div>
          </div>
          <Link to={"./Checkout.jsx"}>
            <div className="flex pl-3 pr-3">
              <ShoppingCartIcon className="h-[40px]" />
              <div className="relative">
                <div className="absolute right-[5px] top-[-3px] font-semibold m-2 text-orange-400">
                  {cart}
                </div>
              </div>
              <div className="mt-7  text-xs xl:text-sm font-semibold">Cart</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex text-xs xl:text-sm bg-amazoneclone-light_blue text-white pl-7 space-x-3 p-2">
        <div>Today's deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gifts Card</div>
        <div>Sell</div>
      </div>
    </header>
  );
};

export default NavBar;
