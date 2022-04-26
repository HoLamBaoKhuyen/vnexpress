import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { StyledIconButton } from "../StyledIconButton";
import useStyles from "./style";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import BodyCategoryItem from "../BodyCategoryItem";

const Company = (props) => {
  const styles = useStyles();

  return (
    <Grid container spacing={2} className={styles.root}>
      <Grid item xs={12}>
        <Typography component="span" variant="subtitle2">
          Thông tin doanh nghiệp
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Link href="#">
              <img
                src="./images/picture.jpg"
                className={styles.thumbnail}
                alt=""
              />
              <Typography component="span" variant="subtitle2">
                Chestertons gia nhập thị trường bất động sản Việt Nam
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3}>
            <Link href="#">
              <img
                src="./images/picture.jpg"
                className={styles.thumbnail}
                alt=""
              />
              <Typography component="span" variant="subtitle2">
                Chestertons gia nhập thị trường bất động sản Việt Nam
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3}>
            <Link href="#">
              <img
                src="./images/picture.jpg"
                className={styles.thumbnail}
                alt=""
              />
              <Typography component="span" variant="subtitle2">
                Chestertons gia nhập thị trường bất động sản Việt Nam
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3}>
            <Link href="#">
              <img
                src="./images/picture.jpg"
                className={styles.thumbnail}
                alt=""
              />
              <Typography component="span" variant="subtitle2">
                Chestertons gia nhập thị trường bất động sản Việt Nam
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Company;
