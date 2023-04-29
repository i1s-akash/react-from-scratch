import React, { useState } from "react";
import Resturant from "./Resturant";
import { resList, imgUrl } from "../utility/constants";

const Body = () => {
  const divBorder = {
    border: "2px solid red",
  };

  const arr = useState(resList);

  let [resturants, setResturants] = arr;

  return (
    <div className="body">
      <div className="search_area_body">
        <input
          className="search_body"
          type="text"
          placeholder="Type here something..."
          defaultValue="Get Average Rating > 4"
          disabled
        />
        <input
          className="search_btn_body"
          type="button"
          value="Search"
          onClick={() => {
            resturants = resturants.filter((list) => list?.data?.avgRating > 4);
            setResturants(resturants);
          }}
        />
      </div>
      <div className="resturant_area_body" style={divBorder}>
        {resturants &&
          resturants?.length > 0 &&
          resturants?.map((list) => {
            return (
              <Resturant
                key={list?.data?.id}
                resImage={imgUrl}
                resName={list?.data?.name}
                resLocation={list?.data?.locality}
                resRating={list?.data?.avgRating}
                resTime={list?.data?.minDeliveryTime}
                resCusines={list?.data?.cuisines}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Body;
