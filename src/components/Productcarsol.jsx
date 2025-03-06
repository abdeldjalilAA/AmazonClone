import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
const Productcarsol = () => {
  return (
    <div className=" m-3 bg-white">
      <div className="font-bold text-2xl m-2 p-2">best seller </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        modules={[Navigation]}
        navigation={true}
        loop={true}
        className=""
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <Link to={`/product/${i}`}>
              <img src={`./../images/product_${i}_small.jpg`} alt="" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Productcarsol;
