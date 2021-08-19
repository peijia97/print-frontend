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
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
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
          <Grid item fl xs={6} className="text-center">
            <Barcode
              className="barcode"
              width={2}
              height={70}
              value={item.barcode}
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} className="mb-2">
          <Grid item xs={8}>
            <Typography variant="h5">Order Details</Typography>

            <Grid container className="info-container">
              <Grid item xs={4}>
                <Typography variant="h6">Ship by Date:</Typography>
                <Typography variant="h6">Weight (kg):</Typography>
                <Typography variant="h6">Order ID:</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{item.shipByDate}</Typography>
                <Typography variant="h6">{item.weight}</Typography>
                <Typography variant="h6">
                  <b>{item.invoiceNo}</b>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h5">Order Details (Courier)</Typography>
            <Grid container className="info-container">
              <Typography variant="h6">
                Parcel Info: {item.parcelInfo}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Typography variant="h5">Sender Details (Pengirim)</Typography>
            <Grid container className="info-container">
              <Grid container item xs={12} style={{ marginBottom: "3rem" }}>
                <Grid item xs={3}>
                  <Typography variant="h6">Name:</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6">{item.senderInfo.name}</Typography>
                </Grid>
              </Grid>

              <Grid container item xs={12} style={{ marginBottom: "4rem" }}>
                <Grid item xs={3}>
                  <Typography variant="h6">Phone:</Typography>
                  <Typography variant="h6">Address:</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6">{item.senderInfo.phone}</Typography>
                  <Typography variant="h6">
                    {item.senderInfo.address}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container item xs={12}>
                <Grid item xs={3}>
                  <Typography variant="h6">Postcode:</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6">
                    {item.senderInfo.postcode}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Typography variant="h5" style={{ borderTop: 0 }}>
              Recipient Details (Penerima)
            </Typography>
            <Grid container className="info-container">
              <Grid container item xs={12} style={{ marginBottom: "3rem" }}>
                <Grid item xs={3}>
                  <Typography variant="h6">Name:</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6">
                    {item.recipientInfo.name}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container item xs={12} style={{ marginBottom: "4rem" }}>
                <Grid item xs={3}>
                  <Typography variant="h6">Phone:</Typography>
                  <Typography variant="h6">Address:</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6">
                    {item.recipientInfo.phone}
                  </Typography>
                  <Typography variant="h6">
                    {item.recipientInfo.address}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container item xs={12}>
                <Grid item xs={3}>
                  <Typography variant="h6">Postcode:</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6">
                    {item.recipientInfo.postcode}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Typography variant="h5" style={{ borderTop: 0 }}>
              POD
            </Typography>
            <Grid container className="info-container">
              <Grid item xs={3}>
                <Typography variant="h6">Name:</Typography>
                <Typography variant="h6">I.C.:</Typography>
                <Typography variant="h6">Signature:</Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h6">{item.pod.name}</Typography>
                <Typography variant="h6">{item.pod.ic}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Grid container className="delivery-container">
              <Typography variant="h4" className="delivery-text-1">
                {item.deliveryCode}
              </Typography>
              <div className="divider" />
              <Typography variant="h4" className="delivery-text-2">
                {item.deliveryNumber}
              </Typography>
              <div className="divider" />
              <Typography variant="h4" className="delivery-text-3">
                <b>{item.recipientInfo.postcode}</b>
              </Typography>
              <Typography variant="h4" className="delivery-text-3">
                {item.deliveryAddressType}
              </Typography>
              <QRCode className="qrcode" value={item.barcode} size={110} />
              <div className="barcode">
                <Barcode width={2} height={100} value={item.barcode} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export { ShopeeOrder };
