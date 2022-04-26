import { Typography } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { StyledIconButton } from "../StyledIconButton";
import useStyles from "./style";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";

const FooterMiddle = (props) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div>
        <StyledIconButton
          variant="outlined"
          className={styles.logo}
          startIcon={<img src="./images/logo.png" />}
        >
          Báo điện tử{" "}
        </StyledIconButton>
      </div>
      <div>
        <Typography component="span" variant="body2" className={styles.text}>
          Theo dõi VnExpress trên
        </Typography>
        <IconButton className={styles.social}>
          <AddAPhotoIcon />
        </IconButton>
        <IconButton className={styles.social}>
          <AccountBoxIcon />
        </IconButton>
        <IconButton className={styles.social}>
          <FlutterDashIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default FooterMiddle;
