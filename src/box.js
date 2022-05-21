import React from "react";

export const Box = (props) => {
  return (
    <div>
      I ordered<b>{props.name}</b>from<b>{props.place}</b>,which cost me{" "}
      <b>{props.price}</b>
    </div>
  );
};
