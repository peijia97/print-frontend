import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import QRCode from "react-qr-code";
import Barcode from "react-barcode";

import "./ShopeeOrder.scss";

const ShopeeOrder = props => {
  const { item, ...rest } = props;

  return (
    <div className="ShopeeOrder" {...rest}>
      <div className="order-container">
        <Grid container>
          <Grid item xs={3}>
            <img
              src={`${process.env.PUBLIC_URL}/images/jnt.png`}
              alt="jnt-logo"
            />
          </Grid>
          <Grid item xs={3}>
            <img
              src={`${process.env.PUBLIC_URL}/images/shopee.png`}
              alt="shopee-logo"
            />
          </Grid>
          <Grid item xs={6}>
            <Barcode
              className="barcode"
              width={2}
              height={60}
              value={item.Barcode}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h6">Seller: {item.senderInfo.name}</Typography>
            <Typography variant="h6">{item.senderInfo.adderss}</Typography>
            <Typography variant="h6">{item.senderInfo.phone}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">{item.invoiceNo}</Typography>
            <Typography variant="h6">{item.paymentType}</Typography>
            <Typography variant="h6">{item.paymentAmount}</Typography>
            <Typography variant="h6">{item.weight}</Typography>
            <Typography variant="h6">{item.shipByDate}</Typography>
          </Grid>
        </Grid>

        <QRCode value={item.barcode} size={180} />
      </div>
    </div>
  );
};

export { ShopeeOrder };
