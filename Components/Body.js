import React from "react";
import Resturant from "./Resturant";
import { resList } from "../utility/constants";

const Body = () => {
  const divBorder = {
    border: "2px solid red",
  };

  return (
    <div className="body" style={divBorder}>
      <div className="search_area_body">
        <input
          className="search_body"
          type="text"
          placeholder="Type here something..."
        />
        <input className="search_btn_body" type="button" value="Search" />
      </div>
      <div className="resturant_area_body" style={divBorder}>
        {resList &&
          resList?.length > 0 &&
          resList?.map((list) => {
            return (
              <Resturant
                key={list?.data?.id}
                resImage={"https://i.ibb.co/m5wQLPJ/react-from-scratch.png"}
                resName={list?.data?.name}
                resLocation={list?.data?.locality}
                resRting={list?.data?.avgRating}
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
