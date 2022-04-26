import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";
import useStyles from "./style";
import { NavLink } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PublicIcon from "@mui/icons-material/Public";
import PersonIcon from "@mui/icons-material/Person";
import Search from "../Search";
import { LoginButton } from "../LoginButton";
import { StyledIconButton } from "../StyledIconButton";
// import { InternationalButton } from "../InternationalButton";

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
          <div className={[styles.button, styles.btn].join(" ")}>
            <NavLink to="/">
              <StyledIconButton
                variant="outlined"
                startIcon={<AccessTimeIcon />}
              >
                Mới nhất
              </StyledIconButton>
            </NavLink>
          </div>
          <div className={[styles.button, styles.btn].join(" ")}>
            <NavLink to="/">
              <StyledIconButton variant="outlined" startIcon={<PublicIcon />}>
                International
              </StyledIconButton>
            </NavLink>
          </div>
          <div className={[styles.button, styles.search].join(" ")}>
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
