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

  const categories = [
    "Thời sự",
    "Góc nhìn",
    "Thế giới",
    "Video",
    "Kinh doanh",
    "Thời sự",
    "Góc nhìn",
    "Thế giới",
    "Video",
    "Kinh doanh",
    "Thời sự",
    "Góc nhìn",
    "Thế giới",
    "Video",
    "Kinh doanh",
  ];

  return (
    <Box className={styles.root}>
      <NavLink to="/">
        <IconButton aria-label="home">
          <HomeIcon />
        </IconButton>
      </NavLink>
      <>
        {categories.map((category) => (
          <Menu label={category} />
        ))}
      </>
    </Box>
  );
};

export default NavbarCategory;
