import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import FooterBottom from "../FooterBottom";
import FooterCategory from "../FooterCategory";
import FooterMiddle from "../FooterMiddle";
import useStyles from "./style";

const Footer = (props) => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Container maxWidth="xl">
        <Grid container>
          <FooterCategory />
          <FooterMiddle />
          <FooterBottom />
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
