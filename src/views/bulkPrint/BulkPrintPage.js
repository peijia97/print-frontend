import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Background } from "components/common/Background/Background";
import { PrintNavBar } from "components/bulkPrint/PrintNavBar/PrintNavBar";
import { Invoice } from "components/common/Invoice/Invoice";
import { BULK_INVOICE_LIST } from "constants/constants";

import "./BulkPrintPage.scss";

function BulkPrintPage() {
  const theme = useTheme();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });
  const [checked, setChecked] = useState(["#111", "#222", "#333"]);
  const isLgAndUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleCheck = (event, invoiceNo) => {
    if (event.target.checked) {
      // push
      setChecked([...checked, invoiceNo]);
    } else {
      // pop
      setChecked(checked.filter(x => x !== invoiceNo));
    }
  };

  return (
    <>
      <PrintNavBar handlePrint={handlePrint} />
      <Background fullHeight color="BulkPrintPage grey100">
        <div className="left-container">
          <Card variant="outlined" className="BulkImportCard">
            <CardContent>
              {BULK_INVOICE_LIST.map(item => (
                <FormGroup key={item.invoiceNo}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={!!checked.find(c => c === item.invoiceNo)}
                        onChange={e => handleCheck(e, item.invoiceNo)}
                      />
                    }
                    label={`Invoice ${item.invoiceNo}`}
                  />
                </FormGroup>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="right-container" ref={componentRef}>
          {BULK_INVOICE_LIST.filter(b => checked.includes(b.invoiceNo))
            .length ? (
            BULK_INVOICE_LIST.filter(b => checked.includes(b.invoiceNo)).map(
              item => (
                <React.Fragment key={item.invoiceNo}>
                  <div style={{ pageBreakBefore: "always" }} />
                  <div className="box-shadow-1">
                    <Invoice item={item} />
                  </div>
                </React.Fragment>
              )
            )
          ) : (
            <div className="no-content-container box-shadow-1">
              <Typography variant="body1" className="label-no-more">
                Please select one or more invoice to print
              </Typography>
            </div>
          )}
        </div>
      </Background>
    </>
  );
}

export default BulkPrintPage;
