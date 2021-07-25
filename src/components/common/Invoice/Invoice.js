import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import "./Invoice.scss";

const Invoice = props => {
  const { item, ...rest } = props;
  return (
    <div className="Invoice" {...rest}>
      <Typography variant="h3" className="merchant-title">
        {item.merchantName}
      </Typography>
      <Typography variant="h5">
        Your order {item.invoiceNo} has been processed.
      </Typography>

      <div className="invoice-container">
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h6">{item.merchantName}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6">INVOICE NO:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{item.invoiceNo}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">ST NO:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{item.stNo}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Issue Date:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{item.issueDateTime}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Order Date:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{item.orderDateTime}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant="h4" className="invoice-title">
          INVOICE
        </Typography>

        {/* ADDRESS */}
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h5">Billing Address</Typography>
            <Typography variant="h6" className="address">
              {item.billingAddress}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">Shipping Address</Typography>
            <Typography variant="h6" className="address">
              {item.shippingAddress}
            </Typography>
          </Grid>
        </Grid>

        {/* INVOICE HEADER */}
        <Grid container spacing={2} alignItems="center" className="item-header">
          <Grid item xs={1}>
            <Typography variant="h6">Item</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">Price</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h6">Quantity</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">Sub total</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h6">Discount</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">Total excl. tax</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h6">Tax ({item.taxPercentage}%)</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">Total incl. tax</Typography>
          </Grid>
        </Grid>

        {/* INVOICE BODY */}
        {item.orderItems.map((o, i) => (
          <Grid container spacing={2} key={i} className="item-body">
            <Grid item xs={1}>
              <Typography variant="h6">{o.name}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6">
                {item.currency} {Number(o.price).toFixed(2)}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6">{o.quantity}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6">
                {item.currency} {Number(o.price * o.quantity).toFixed(2)}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6">
                {item.currency} {Number(o.discount).toFixed(2)}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6">
                {item.currency} {Number(o.totalExcludeTax).toFixed(2)}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6">
                {item.currency}{" "}
                {Number((item.taxPercentage / 100) * o.totalExcludeTax).toFixed(
                  2
                )}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6">
                {item.currency} {Number(o.totalIncludeTax).toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        ))}

        {/* TOTAL AMOUNT */}
        <Grid container spacing={2} className="item-body item-total">
          <Grid item xs={4}>
            <Typography variant="h6" className="text-right bold">
              Total Amount
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">
              {item.currency}{" "}
              {Number(
                item.orderItems
                  .map(o => o.price * o.quantity)
                  .reduce((a, b) => a + b, 0)
              ).toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h6">
              {item.currency}{" "}
              {Number(
                item.orderItems.map(o => o.discount).reduce((a, b) => a + b, 0)
              ).toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">
              {item.currency}{" "}
              {Number(
                item.orderItems
                  .map(o => o.totalExcludeTax)
                  .reduce((a, b) => a + b, 0)
              ).toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h6">
              {item.currency}{" "}
              {Number(
                item.orderItems
                  .map(o => (item.taxPercentage / 100) * o.totalExcludeTax)
                  .reduce((a, b) => a + b, 0)
              ).toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">
              {item.currency}{" "}
              {Number(
                item.orderItems
                  .map(o => o.totalIncludeTax)
                  .reduce((a, b) => a + b, 0)
              ).toFixed(2)}
            </Typography>
          </Grid>
        </Grid>

        {/* INVOICE TOTAL  */}
        <Grid container spacing={2} className="item-body item-grand-total">
          <Grid item xs={10}>
            <Typography variant="h6" className="text-right bold">
              Total
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">
              {item.currency}{" "}
              {Number(
                item.orderItems
                  .map(o => o.totalIncludeTax)
                  .reduce((a, b) => a + b, 0)
              ).toFixed(2)}
            </Typography>
          </Grid>
        </Grid>

        {/* TAX SUMMARY */}
        <Typography variant="h6">Tax Summary</Typography>
        <div className="tax-summary-container">
          <Grid container spacing={2} className="item-body">
            <Grid item xs={6}>
              <Typography variant="h6" className="text-left bold">
                Code
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" className="text-right bold">
                Amount
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" className="text-right bold">
                Tax
              </Typography>
            </Grid>
          </Grid>
          {item.taxSummary.map((t, i) => (
            <Grid container spacing={2} key={i} className="item-body">
              <Grid item xs={6}>
                <Typography variant="h6" className="text-left">
                  {t.code} ({t.percentage}%)
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" className="text-right">
                  {item.currency} {Number(t.amount).toFixed(2)}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" className="text-right">
                  {item.currency} {Number(t.tax).toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </div>
        <Grid container spacing={2} className="item-body shipping-tax">
          <Grid item xs={9} className="text-right bold">
            <Typography variant="h6" className="text-right bold">
              Shipping Tax
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" className="text-right">
              {item.currency}{" "}
              {Number(
                item.taxSummary.map(t => t.tax).reduce((a, b) => a + b, 0)
              ).toFixed(2)}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h6">Remark</Typography>
        <Typography variant="body1">{item.remarks}</Typography>
      </div>

      {/* INVOICE FOOTER */}
      <Typography variant="body1" className="gratitude-title">
        Thank you!
      </Typography>
      <Typography variant="body1" className="gratitude-subtitle">
        <b>Hello Merchant</b>
      </Typography>

      <Typography variant="body2" className="contact-info">
        If you have any questions, feel free to send us an email or contact us
        at <a href="mailto:chan@gmail.com">chan@gmail.com</a>
      </Typography>

      <Typography variant="body2" className="powered-by">
        Powered By <span>Best Seller</span>
      </Typography>
    </div>
  );
};

export { Invoice };
