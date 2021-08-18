import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useLocation } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Background } from "components/common/Background/Background";
import { PrintNavBar } from "components/bulkPrint/PrintNavBar/PrintNavBar";
import { Invoice } from "components/common/Invoice/Invoice";
import { Flyer } from "components/bulkPrintCn/Flyer/Flyer";
import { ShopeeOrder } from "components/bulkPrintCn/ShopeeOrder/ShopeeOrder";
import { LazadaOrder } from "components/bulkPrintCn/LazadaOrder/LazadaOrder";
import {
  BULK_INVOICE_LIST,
  BULK_INVOICE_CN_LIST,
  BULK_LAZADA_ORDER_LIST,
  BULK_SHOPEE_ORDER_LIST
} from "constants/constants";

import "./BulkPrintPage.scss";

function BulkPrintPage() {
  const componentRef = useRef();
  const location = useLocation();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });
  const [printList] = useState(
    location.state.type === "invoice"
      ? BULK_INVOICE_LIST
      : location.state.type === "flyer"
      ? BULK_INVOICE_CN_LIST
      : location.state.type === "shopee"
      ? BULK_SHOPEE_ORDER_LIST
      : BULK_LAZADA_ORDER_LIST
  );
  const [checked, setChecked] = useState(
    location.state.type === "invoice"
      ? ["#111", "#222", "#333"]
      : location.state.type === "flyer"
      ? ["F0001", "F0002", "F0003", "F0004"]
      : location.state.type === "shopee"
      ? ["210815MBBRWKE6"]
      : ["295699099279202"]
  );

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
      <PrintNavBar handlePrint={handlePrint} type={location.state.type} />
      <Background fullHeight color="BulkPrintPage grey100">
        <div className="left-container">
          <Card variant="outlined" className="BulkImportCard">
            <CardContent>
              {printList.map(item => (
                <FormGroup key={item.invoiceNo}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={!!checked.find(c => c === item.invoiceNo)}
                        onChange={e => handleCheck(e, item.invoiceNo)}
                      />
                    }
                    label={`${location.state.type} ${item.invoiceNo}`}
                  />
                </FormGroup>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="right-container" ref={componentRef}>
          {printList.filter(b => checked.includes(b.invoiceNo)).length ? (
            printList
              .filter(b => checked.includes(b.invoiceNo))
              .map(item => (
                <React.Fragment key={item.invoiceNo}>
                  {location.state.type === "invoice" ? (
                    <>
                      <div style={{ pageBreakBefore: "always" }} />
                      <div className="mb-1">
                        <Invoice item={item} />
                      </div>
                    </>
                  ) : location.state.type === "flyer" ? (
                    <Flyer item={item} />
                  ) : location.state.type === "shopee" ? (
                    <>
                      <div style={{ pageBreakBefore: "always" }} />
                      <div className="mb-1">
                        <ShopeeOrder item={item} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ pageBreakBefore: "always" }} />
                      <div className="mb-1">
                        <LazadaOrder item={item} />
                      </div>
                    </>
                  )}
                </React.Fragment>
              ))
          ) : (
            <div className="no-content-container box-shadow-1">
              <Typography variant="body1" className="label-no-more">
                Please select one or more {location.state.type} to print
              </Typography>
            </div>
          )}
        </div>
      </Background>
    </>
  );
}

export default BulkPrintPage;
