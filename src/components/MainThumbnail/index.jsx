import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { StyledIconButton } from "../StyledIconButton";
import useStyles from "./style";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";

const MainThumbnail = (props) => {
  const styles = useStyles();

  return (
    <Grid container spacing={2} className={styles.root}>
      <Grid item xs={12} sm={7} md={6} className={styles.left}>
        <Grid container>
          <Grid item xs={12}>
            <img
              src="./images/thumbnail.jpg"
              alt="thumbnail"
              className={styles.thumbnail}
            />
          </Grid>
          <Grid item xs={6}>
            <Link href="#">
              <Typography
                component="a"
                variant="subtitle1"
                className={styles.title1}
              >
                Đình công tự phát tăng gần 1,5 lần
              </Typography>
            </Link>{" "}
            <Typography component="p" variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              soluta, delectus fugiat, reprehenderit dolorem pariatur,
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Link href="#">
              <Typography
                component="a"
                variant="subtitle1"
                className={styles.title1}
              >
                Đình công tự phát tăng gần 1,5 lần
              </Typography>
            </Link>{" "}
            <Typography component="p" variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              soluta, delectus fugiat, reprehenderit dolorem pariatur,
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={5} md={4}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Link href="#">
              <Typography component="a" variant="h5" className={styles.title1}>
                Đình công tự phát tăng gần 1,5 lần
              </Typography>
            </Link>{" "}
            <Typography component="p" variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              soluta, delectus fugiat, reprehenderit dolorem pariatur,
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link href="#">
              <Typography
                component="a"
                variant="subtitle1"
                className={styles.title1}
              >
                Đình công tự phát tăng gần 1,5 lần
              </Typography>
            </Link>{" "}
            <Typography component="p" variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              soluta, delectus fugiat, reprehenderit dolorem pariatur,
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainThumbnail;
