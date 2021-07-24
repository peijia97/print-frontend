import React from "react";
import "./CustomIcon.scss";

const CustomIcon = props => {
  const { iconName, size, className, ...rest } = props;
  return (
    <div className={`CustomIcon ${className}`} {...rest}>
      <img
        src={`${process.env.PUBLIC_URL}/images/${iconName}.png`}
        className={size || "md"}
        alt={iconName}
      />
    </div>
  );
};

export { CustomIcon };
