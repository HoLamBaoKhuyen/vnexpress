import { Grid, Link, Typography } from "@material-ui/core";

import React from "react";

import useStyles from "./style";

const BodyDetailItem = (props) => {
  const styles = useStyles();

  return (
    <Grid container className={styles.root}>
      <Grid item xs={12}>
        <Link href="#" className={styles.title1}>
          <Typography component="span" variant="h5">
            Kinh doanh
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
      <Grid container spacing={1} className={styles.borderBot}>
        <Grid item xs={4}>
          <img
            src="./images/thumbnail.jpg"
            alt=""
            className={styles.thumbnail}
          />
        </Grid>
        <Grid item xs={4} className={styles.borderRight}>
          <Link href="#">
            <Typography
              component="a"
              variant="subtitle1"
              className={styles.title1}
            >
              Mỹ lùng sục đạn dược cho Ukraine
            </Typography>
          </Link>
          <Typography component="p" variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Link href="#">
            <Typography
              component="a"
              variant="subtitle1"
              className={styles.title1}
            >
              Mỹ lùng sục đạn dược cho Ukraine
            </Typography>
          </Link>
          <Typography component="p" variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Link href="#">
            <Typography
              component="a"
              variant="subtitle1"
              className={styles.title1}
            >
              Mỹ lùng sục đạn dược cho Ukraine
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link href="#">
            <Typography
              component="a"
              variant="subtitle1"
              className={styles.title1}
            >
              Mỹ lùng sục đạn dược cho Ukraine
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link href="#">
            <Typography
              component="a"
              variant="subtitle1"
              className={styles.title1}
            >
              Mỹ lùng sục đạn dược cho Ukraine
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BodyDetailItem;
