import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { Background } from "components/common/Background/Background";
import { setPrintModalState } from "states/printModalState";

import "./HomePage.scss";

function HomePage() {
  const history = useHistory();

  const handlePrintInvoice = type => {
    setPrintModalState({
      type,
      show: true,
      title: "Print Invoice",
      action: () => {
        console.log("print");
      }
    });
  };

  const handleNavTo = route => {
    history.push({ pathname: route });
  };

  return (
    <Background fullHeight color="HomePage grey100">
      <div className="home-section">
        <Typography variant="h3">Print Functions</Typography>
        <Button
          onClick={() => handlePrintInvoice("invoice")}
          variant="contained"
          className={`btn-confirm`}
        >
          Print Invoice
        </Button>
        <Button
          onClick={() => handleNavTo("/bulkPrint")}
          variant="contained"
          className={`btn-confirm`}
        >
          Bulk Print
        </Button>
        <Button
          onClick={() => handlePrintInvoice("flyer")}
          variant="contained"
          className={`btn-confirm`}
        >
          Bulk Print CN
        </Button>
      </div>
    </Background>
  );
}

export default HomePage;
