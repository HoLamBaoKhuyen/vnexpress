import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { StyledIconButton } from "../StyledIconButton";
import useStyles from "./style";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";

const BodyCategoryItem = (props) => {
  const styles = useStyles();

  return (
    <Grid container className={styles.root}>
      <Link href="#">
        <Typography component="a" variant="subtitle1" className={styles.title1}>
          Mỹ lùng sục đạn dược cho Ukraine
        </Typography>
      </Link>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <img
            src="./images/thumbnail.jpg"
            alt=""
            className={styles.thumbnail}
          />
        </Grid>
        <Grid item xs={7}>
          <Typography component="p" variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            soluta, delectus fugiat, reprehenderit dolorem pariatur,
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BodyCategoryItem;
