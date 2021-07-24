import React from "react";
import Container from "@material-ui/core/Container";
import "./Background.scss";

const Background = props => {
  const { fullHeight, color, children, ...rest } = props;
  return (
    <div
      className={`Background ${color} ${!!fullHeight && "h-screen"}`}
      {...rest}
    >
      <Container>{children}</Container>
    </div>
  );
};

export { Background };
