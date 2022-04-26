import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { StyledIconButton } from "../StyledIconButton";
import useStyles from "./style";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";

const NavbarBody = (props) => {
  const styles = useStyles();

  return (
    <Grid container className={styles.root}>
      <Link href="#">
        <Typography component="a" variant="body2" className={styles.title1}>
          Chủ đề
        </Typography>
      </Link>
      <Link href="#">
        <Typography component="a" variant="body2" className={styles.title1}>
          Lương tối thiểu
        </Typography>
      </Link>
      <Link href="#">
        <Typography component="a" variant="body2" className={styles.title1}>
          Mở cửa du lịch
        </Typography>
      </Link>
      <Link href="#">
        <Typography component="a" variant="body2" className={styles.title1}>
          Nga mở chiến dịch quân sự ở Ukraine
        </Typography>
      </Link>
    </Grid>
  );
};

export default NavbarBody;
