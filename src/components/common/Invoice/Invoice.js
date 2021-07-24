import React from "react";
import Typography from "@material-ui/core/Typography";

import "./Invoice.scss";

const Invoice = props => {
  const { item, ...rest } = props;
  return <div className="Invoice" {...rest}></div>;
};

export { Invoice };
