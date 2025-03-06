import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate, createSearchParams } from "react-router-dom";
const CategoryT = () => {
  const navigate = useNavigate();
  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  };
  return (
    <div className=" m-3 bg-white">
      <div className="font-bold text-2xl m-2 p-2">shop by Category </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        modules={[Navigation]}
        navigation={true}
        className=""
      >
        <SwiperSlide>
          <img
            onClick={() => searchCategory("Deals")}
            className="cursor-pointer"
            src={"./../images/category_0.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() => searchCategory("Amazon")}
            className="cursor-pointer"
            src={"./../images/category_1.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() => searchCategory("Fashion")}
            className="cursor-pointer"
            src={"./../images/category_2.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() => searchCategory("Computers")}
            className="cursor-pointer"
            src={"./../images/category_3.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() => searchCategory("Home")}
            className="cursor-pointer"
            src={"./../images/category_4.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() => searchCategory("Mobiles")}
            className="cursor-pointer"
            src={"./../images/category_5.jpg"}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategoryT;
