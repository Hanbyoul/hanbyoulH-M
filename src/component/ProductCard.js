import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goToProductDetail = () => {
    console.log("click!");
    navigate(`/product/${item.id}`);
  };

  return (
    <div onClick={goToProductDetail} className="card">
      <img className="card-img" src={item?.img} />
      <div className="conscious">
        {item?.choice == true ? "Conscious choice" : ""}
      </div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div className="new">{item?.new == true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
