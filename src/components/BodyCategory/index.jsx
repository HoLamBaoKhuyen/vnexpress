import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { StyledIconButton } from "../StyledIconButton";
import useStyles from "./style";
import BodyCategoryItem from "../BodyCategoryItem";
import BodyDetailItem from "../BodyDetailItem";

const BodyCategory = (props) => {
  const styles = useStyles();

  return (
    <Grid container spacing={1} className={styles.root}>
      <Grid item xs={6} md={5}>
        <BodyCategoryItem />
        <BodyCategoryItem />
        <BodyCategoryItem />
      </Grid>
      <Grid item xs={12} md={7}>
        <BodyDetailItem />
        <BodyDetailItem />
      </Grid>
    </Grid>
  );
};

export default BodyCategory;
