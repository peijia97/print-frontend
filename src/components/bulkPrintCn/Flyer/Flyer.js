import React from "react";
import Typography from "@material-ui/core/Typography";
import QRCode from "react-qr-code";
import Barcode from "react-barcode";

import "./Flyer.scss";

const Flyer = props => {
  const { item, ...rest } = props;

  return (
    <div className="Flyer" {...rest}>
      <div className="barcode-section">
        <Typography variant="h3">{item.invoiceNo}</Typography>
        <Typography variant="h3">{item.description}</Typography>
        <div className="barcode-container">
          <Barcode
            className="barcode"
            width={2}
            height={60}
            value={item.barcode}
          />
        </div>
      </div>
      <div className="qr-section">
        <QRCode value="hey" size={180} />
      </div>
      <div className="description-section">
        <Typography variant="h5">{item.description}</Typography>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h5">{item.phoneNumber}</Typography>
        <div className="inline-text-group">
          <Typography variant="body1">{item.type}</Typography>
          <Typography variant="body1">{item.size}</Typography>
          <Typography variant="body1">{item.status}</Typography>
        </div>
        <Typography variant="body1">{item.address}</Typography>
      </div>
      <Typography className="postcode-section" variant="h3">
        {item.postcode}
      </Typography>
    </div>
  );
};

export { Flyer };
