import React from "react";
import { CategoryT, Productcarsol, HomePageCard, Slider } from "./";
const HomePage = () => {
  return (
    <div className="bg-amazoneclone-light_blue">
      <div className="min-w-[1000px] max-w-[1500px] m-auto  bg-white -mt80">
        <Slider />
        <div className="grid grid-cols-3 xl:grid-cols-4 ">
          <HomePageCard
            title={"we have a surprise for you"}
            image={"./../images/home_grid_1.jpg"}
            descrption={"see terms and conditions"}
          />
          <HomePageCard
            title={"watch th ring of power"}
            image={"./../images/home_grid_2.jpg"}
            descrption={"start streaming now"}
          />
          <HomePageCard
            title={"unlimited streaming"}
            image={"./../images/home_grid_3.jpg"}
            descrption={"find out more"}
          />
          <HomePageCard
            title={"more title to explore"}
            image={"./../images/home_grid_4.jpg"}
            descrption={"browse kindle unlimited"}
          />
          <HomePageCard
            title={"shop pet supplies"}
            image={"./../images/home_grid_5.jpg"}
            descrption={"see more"}
          />
          <HomePageCard
            title={"spring sale"}
            image={"./../images/home_grid_6.jpg"}
            descrption={"see the deals"}
          />

          <HomePageCard
            title={"echo buds"}
            image={"./../images/home_grid_7.jpg"}
            descrption={"see more"}
          />
          <HomePageCard
            title={"family plan : 3 months free"}
            image={"./../images/home_grid_8.jpg"}
            descrption={"learn more"}
          />
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src="./../images/banner_image_2.jpg"
              alt=""
            />
          </div>
        </div>
        <Productcarsol />
        <CategoryT />
        <div
          className="
        p-3 h-[200px]"
        >
          <img
            className="m-auto h-[100%]"
            src="./../images/banner_image.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
