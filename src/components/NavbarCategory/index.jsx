import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import useStyles from "./style";
import Menu from "../Menu";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";

const NavbarCategory = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box className={styles.root}>
      <NavLink to="/">
        <IconButton aria-label="home">
          <HomeIcon />
        </IconButton>
      </NavLink>
      <Menu label="Thời sự" />
      <Menu label="Góc nhìn" />
      <Menu label="Thế giới" />
      <Menu label="Video" />
      <Menu label="Podcards" />
      <Menu label="Kinh doanh" />
      <Menu label="Thời sự" />
      <Menu label="Góc nhìn" />
      <Menu label="Thế giới" />
      <Menu label="Video" />
      <Menu label="Podcards" />
      <Menu label="Kinh doanh" />
      <Menu label="Thời sự" />
      <Menu label="Góc nhìn" />
      <Menu label="Thế giới" />
      <Menu label="Video" />
      <Menu label="Podcards" />
      <Menu label="Kinh doanh" />
    </Box>
  );
};

export default NavbarCategory;
