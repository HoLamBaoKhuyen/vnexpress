import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { StyledIconButton } from "../StyledIconButton";
import useStyles from "./style";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import BodyCategoryItem from "../BodyCategoryItem";

const BodyVideo = (props) => {
  const styles = useStyles();

  return (
    <Grid container spacing={2} className={styles.root}>
      <Grid item xs={12}>
        <Link href="#" className={styles.title1}>
          <Typography component="span" variant="h5">
            Video
          </Typography>
        </Link>

        <Link href="#" className={[styles.title1, styles.catName].join(" ")}>
          <Typography component="span" variant="body2">
            Quốc tế
          </Typography>
        </Link>
        <Link href="#" className={[styles.title1, styles.catName].join(" ")}>
          <Typography component="span" variant="body2">
            Doanh nghiệp
          </Typography>{" "}
        </Link>
        <Link href="#" className={[styles.title1, styles.catName].join(" ")}>
          <Typography component="span" variant="body2">
            Chứng khoán
          </Typography>{" "}
        </Link>
        <Link href="#" className={[styles.title1, styles.catName].join(" ")}>
          <Typography component="span" variant="body2">
            Bất động sản
          </Typography>{" "}
        </Link>
      </Grid>
      <Grid item xs={12} sm={8}>
        <video width="auto" height="300" controls>
          <source src="https://www.youtube.com/watch?v=YAYNwMUcEO0" />
        </video>
      </Grid>
      <Grid item xs={12} sm={4} className={styles.moreVideo}>
        <BodyCategoryItem />
        <BodyCategoryItem />
        <BodyCategoryItem />
      </Grid>
    </Grid>
  );
};

export default BodyVideo;
