import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="h-[600px] bg-black ">
      <Swiper
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 4500 }}
        navigation={true}
        spaceBetween={0}
        className=""
      >
        <SwiperSlide>
          <img className="" src={"./../images/carousel_1.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={"./../images/carousel_2.jpg"} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide className="bg-black object-cover h-[100%]">
          <video className="flex-auto justify-center" controls muted="muted">
            <source src={"./../images/carousel_vid.mp4"} type="video/mp4" />
          </video>
        </SwiperSlide> */}
        <SwiperSlide>
          <img className="" src={"./../images/carousel_3.jpg"} alt="" />
          <div className="badge">{}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={"./../images/carousel_4.jpg"} alt="" />
          <div className="badge">{"500 KVA"}</div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={"./../images/carousel_5.jpg"} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[100%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Slider;
