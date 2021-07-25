import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { usePrintModalStore } from "states/printModalState";
import { BULK_INVOICE_CN_LIST, INVOICE } from "constants/constants";
import { Invoice } from "components/common/Invoice/Invoice";
import { Flyer } from "components/bulkPrintCn/Flyer/Flyer";
import "./PrintModal.scss";

const PrintModal = () => {
  const [modalStore] = usePrintModalStore();
  const [showPrintModal, setShowPrintModal] = useState(false);

  useEffect(() => {
    if (modalStore.show) {
      setShowPrintModal(true);
    }
  }, [modalStore]);

  const handleClose = () => {
    setShowPrintModal(false);
  };

  const handleDoAction = () => {
    if (modalStore.action) {
      modalStore.action();
    }
    handleClose();
  };

  return (
    <Dialog className="PrintModal" onClose={handleClose} open={showPrintModal}>
      <Typography variant="h5" className="title">
        {modalStore.title}
        <IconButton
          aria-label="close"
          className="btn-close"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </Typography>

      <div className="print-content">
        {modalStore.type === "invoice" ? (
          <Invoice item={INVOICE} />
        ) : (
          BULK_INVOICE_CN_LIST.map(item => <Flyer key={item.id} item={item} />)
        )}
      </div>

      <div className="btn-group">
        <Button
          variant="contained"
          className="btn-cancel"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button variant="contained" onClick={handleDoAction}>
          Print
        </Button>
      </div>
    </Dialog>
  );
};

export { PrintModal };
