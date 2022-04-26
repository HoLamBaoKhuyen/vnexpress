import React from "react";
import { Box, Container } from "@material-ui/core";
import BackToTop from "../../components/BackToTop";
import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
import MainThumbnail from "../../components/MainThumbnail";
import BodyCategory from "../../components/BodyCategory";
import NavbarBody from "../../components/NavbarBody";
import BodyVideo from "../../components/BodyVideo";
import Podcast from "../../components/Podcast";
import Picture from "../../components/Picture";
import Company from "../../components/Company";

const Home = (props) => {
  const styles = useStyles();

  return (
    <>
      <Container className={styles.root}>
        <MainThumbnail />
        <BodyCategory />
        <NavbarBody />
        <BodyVideo />
        <Podcast />
        <Picture />
        <Company />
        <BackToTop showBelow={300} />
      </Container>
    </>
  );
};

export default wrapper(Home);
