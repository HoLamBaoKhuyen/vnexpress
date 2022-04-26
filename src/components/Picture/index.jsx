import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { StyledIconButton } from "../StyledIconButton";
import useStyles from "./style";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import BodyCategoryItem from "../BodyCategoryItem";

const Picture = (props) => {
  const styles = useStyles();

  return (
    <Grid container spacing={2} className={styles.root}>
      <Grid item xs={12}>
        <Link href="#" className={styles.title1}>
          <Typography component="span" variant="h5">
            Ảnh
          </Typography>
        </Link>
      </Grid>

      <Grid item xs={12}>
        <img src="./images/picture.jpg" width="100%" alt="" />
      </Grid>
    </Grid>
  );
};

export default Picture;
