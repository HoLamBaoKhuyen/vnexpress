// import React from "react";
// import { Box } from "@material-ui/core";
// import Carousel from "../../components/Carousel";
// import SearchMovie from "../../components/SearchMovie";
// import MovieList from "../../components/MovieList";
// import ScheduleCinema from "../../components/ScheduleCinema";
// import BackToTop from "../../components/BackToTop";
// import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
// import { useEffect } from "react";
// import { getCurrentWebPage } from "../../redux/actions/pageAction";
// import { useDispatch } from "react-redux";

const Home = (props) => {
  // const styles = useStyles();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   dispatch(getCurrentWebPage(props.match.url));
  // }, [dispatch, props.match.url]);

  return <>{/* <img src="/images/logo.png" alt="" /> */}</>;
};

export default wrapper(Home);
