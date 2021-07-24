import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
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
  const [checked, setChecked] = useState([]);
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
      <PrintNavBar />
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
        <div className="right-container box-shadow-1">
          <Invoice />
        </div>
      </Background>
    </>
  );
}

export default BulkPrintPage;
