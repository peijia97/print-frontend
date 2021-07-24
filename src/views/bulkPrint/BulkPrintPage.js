import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Background } from "components/common/Background/Background";

import "./BulkPrintPage.scss";

function BulkPrintPage() {
  const theme = useTheme();
  const isLgAndUp = useMediaQuery(theme.breakpoints.up("md"));

  const handlePrint = () => {};

  return (
    <Background fullHeight color="BulkPrintPage grey100">
      <Button variant="text" disableRipple className="btn-back">
        Import Order
      </Button>

      <div className="summary-section">
        <Typography variant="h6">Total: RM10.00</Typography>
        <Typography variant="body1">Total 5 parcel(s)</Typography>
        <Typography variant="body1">
          0 error, 5 successful orders imported
        </Typography>

        <Button
          onClick={handlePrint}
          variant="contained"
          className={`btn-confirm ${isLgAndUp ? "lg-btn" : ""}`}
        >
          Confirm Booking
        </Button>
      </div>
    </Background>
  );
}

export default BulkPrintPage;
