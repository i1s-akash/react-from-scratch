import React from "react";

const Resturant = ({
  resImage,
  resName,
  resLocation,
  resRating,
  resTime,
  resCusines,
}) => {
  return (
    <div className="resturant_body">
      <img
        src={resImage}
        alt="react-from-scratch"
        border="0"
        width="250px"
        height="100px"
      />
      <h3>{resName}</h3>
      <p>{resLocation}</p>
      <p>{resRating}</p>
      <p>{resTime}</p>
      <p>{resCusines.join()}</p>
    </div>
  );
};

export default Resturant;
