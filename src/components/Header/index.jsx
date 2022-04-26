import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Box, Grid, Container, Typography } from "@material-ui/core";
import useStyles, { CssNewestButton, InternationalButton } from "./style";
import { NavLink } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PublicIcon from "@mui/icons-material/Public";
import PersonIcon from "@mui/icons-material/Person";
import Search from "../Search";
import { LoginButton } from "../LoginButton";

const Header = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box className={styles.root}>
      <Container maxWidth="xl" className={styles.menu}>
        <Box className={styles.leftMenu}>
          <NavLink to="/">
            <div className={styles.logo}>
              <img src="./images/logo.png" alt="logo" />
            </div>
          </NavLink>

          <Typography className={styles.time} component="p">
            Thứ tư, 27/4/2022
          </Typography>
        </Box>
        <Box className={styles.rightMenu}>
          <div className={styles.button}>
            <NavLink to="/">
              <CssNewestButton
                variant="outlined"
                startIcon={<AccessTimeIcon />}
              >
                Mới nhất
              </CssNewestButton>
            </NavLink>
          </div>
          <div className={styles.button}>
            <NavLink to="/">
              <InternationalButton
                variant="outlined"
                startIcon={<PublicIcon />}
              >
                International
              </InternationalButton>
            </NavLink>
          </div>
          <div className={styles.button}>
            <Search />
          </div>
          <div className={styles.button}>
            <NavLink to="/login">
              <LoginButton variant="outlined" startIcon={<PersonIcon />}>
                Đăng nhập
              </LoginButton>
            </NavLink>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
