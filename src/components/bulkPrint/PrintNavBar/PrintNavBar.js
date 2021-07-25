import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { CustomIcon } from "components/common/CustomIcon/CustomIcon";
import { useHistory } from "react-router-dom";
import "./PrintNavBar.scss";

const PrintNavBar = props => {
  const history = useHistory();
  const { handlePrint, type } = props;

  const handleNavTo = route => {
    history.push({ pathname: route });
  };

  return (
    <AppBar
      elevation={0}
      position="fixed"
      color="transparent"
      className="PrintNavBar box-shadow-1"
    >
      <Toolbar className="toolbar">
        <div className="btn-container">
          <IconButton
            disableRipple
            aria-label="close"
            className="btn-close"
            style={{ backgroundColor: "transparent" }}
            onClick={() => handleNavTo("/print-frontend")}
          >
            <CustomIcon iconName="arrow-left-black" size="sm" />
          </IconButton>
        </div>
        <div className="title-container">
          <Typography variant="h5">{type}</Typography>
          <Button variant="contained" onClick={handlePrint}>
            Print
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export { PrintNavBar };
