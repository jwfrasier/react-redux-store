import React from "react";
import { useSelector } from "react-redux";

export default function FeaturePicture() {
  const featuredPicture = useSelector((state) => state.picture);
  return (
    <div>
      <img src={featuredPicture.image} alt="" />
      <h1>Feature</h1>
    </div>
  );
}
