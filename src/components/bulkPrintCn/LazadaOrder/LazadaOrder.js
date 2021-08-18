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
        <Grid container>
          <Grid item xs={4}>
            <Typography variant="h6">Drop-off</Typography>
            <img
              src={`${process.env.PUBLIC_URL}/images/lel.png`}
              alt="lel-logo"
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">Delivery</Typography>
            <img
              src={`${process.env.PUBLIC_URL}/images/lel.png`}
              alt="lel-logo"
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">{item.portCode}</Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Barcode
              className="barcode"
              width={2}
              height={60}
              value={item.trackingNumber}
            />
            <Typography variant="h6">{item.trackingNumber}</Typography>
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

        <Grid container>
          <Grid item xs={12}>
            <Barcode
              className="barcode"
              width={2}
              height={60}
              value={item.portCode}
            />
            <Typography variant="h6">{item.portCode}</Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={10}>
                <Typography variant="h6">
                  Customer: {item.recipientInfo.name}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">{item.deliverAddressType}</Typography>
              </Grid>
            </Grid>
            <Typography variant="h6">
              Customer: {item.recipientInfo.name}
            </Typography>
            <Typography variant="h6">{item.recipientInfo.adderss}</Typography>
            <Typography variant="h6">{item.recipientInfo.phone}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">{item.deliveryType}</Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">RECEIVER COPY</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export { LazadaOrder };
