import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Barcode from "react-barcode";

import "./LazadaOrder.scss";

const LazadaOrder = props => {
  const { item, ...rest } = props;

  return (
    <div className="LazadaOrder" {...rest}>
      <div className="order-container">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="border-bottom"
        >
          <Grid item xs={4} className="border-right">
            <Typography variant="h6">Drop-off</Typography>
            <img
              src={`${process.env.PUBLIC_URL}/images/lel.png`}
              alt="lel-logo"
            />
          </Grid>
          <Grid item xs={4} className="border-right">
            <Typography variant="h6">Delivery</Typography>
            <img
              src={`${process.env.PUBLIC_URL}/images/lel.png`}
              alt="lel-logo"
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4" className="text-center">
              <b>{item.portCode}</b>
            </Typography>
          </Grid>
        </Grid>

        <Grid container className="border-bottom">
          <Grid item xs={12} className="text-center barcode">
            <Barcode
              width={4}
              height={220}
              value={item.trackingNumber}
              text={`Tracking Number: ${item.trackingNumber}`}
            />
          </Grid>
        </Grid>

        <Grid container className="border-bottom">
          <Grid item xs={8} className="border-right">
            <Typography variant="h6">Seller: {item.senderInfo.name}</Typography>
            <Typography variant="h6" className="mb-4">
              {item.senderInfo.address}
            </Typography>
            <Typography variant="h6">{item.senderInfo.phone}</Typography>
          </Grid>
          <Grid item xs={4} className="text-center">
            <Typography variant="h6" className="border-bottom">
              {item.invoiceNo}
            </Typography>
            <Typography variant="h6" className="border-bottom">
              {item.paymentType}
            </Typography>
            <Typography variant="h6" className="border-bottom">
              {item.paymentAmount}
            </Typography>
            <Typography variant="h6" className="border-bottom">
              {item.weight}
            </Typography>
            <Typography variant="h6">{item.shipByDate}</Typography>
          </Grid>
        </Grid>

        <Grid container className="border-bottom">
          <Grid item xs={12} className="text-center barcode">
            <Barcode
              width={4}
              height={200}
              text={`Port Code: ${item.portCode}`}
              value={item.portCode}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={8} className="border-right">
            <Grid container className="mb-4">
              <Grid item xs={10}>
                <Typography variant="h5">
                  Customer: {item.recipientInfo.name}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h5" className="text-center">
                  {item.deliveryAddressType}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="h6" className="mb-4">
              {item.recipientInfo.address}
            </Typography>
            <Typography variant="h6">{item.recipientInfo.phone}</Typography>
          </Grid>
          <Grid item xs={4} className="mt-4 text-center">
            <Typography variant="h6">{item.deliveryType}</Typography>
          </Grid>
        </Grid>

        <div className="divider" />
        <Typography variant="h5" className="pt-2 mb-2 text-center">
          <b>RECEIVER COPY</b>
        </Typography>
      </div>
    </div>
  );
};

export { LazadaOrder };
