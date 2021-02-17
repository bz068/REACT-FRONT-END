import React from "react";

export default function MessageBox(props) {
  const { variant } = props;
  console.log(variant);
  return (
    <div
      className={variant ? `alert alert-${variant}` : "alert alert-warning"}
      role="alert"
    >
      {props.children}
    </div>
  );
}
