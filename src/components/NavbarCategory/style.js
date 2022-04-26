import { Menu, Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    borderBottom: `1px solid ${theme.palette.grey.light}`,
    padding: theme.spacing(0, 7),
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    overflowX: "scroll",
  },
  menu: {},
  leftMenu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightMenu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 50,
    paddingRight: theme.spacing(3),
    borderRight: `1px solid ${theme.palette.grey.light}`,
    "& img": { height: "50%", paddingTop: theme.spacing(1) },
  },
  time: {
    paddingLeft: theme.spacing(3),
    color: theme.palette.grey.main,
  },
  button: {
    padding: theme.spacing(0, 0.5),
    "& a": {
      textDecoration: "none",
    },
  },
}));
export const CssNewestButton = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      outline: "none",
      padding: theme.spacing(0.3, 1),
      textDecoration: "none",
      color: theme.palette.grey.main,
      "&:hover": {
        color: theme.palette.grey.dark,
        transition: "all 0.3s",
      },
    },
    "& span": {
      textDecoration: "none",
    },
  },
}))(Button);

export const InternationalButton = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      outline: "none",
      padding: theme.spacing(0.3, 1),
      textDecoration: "none",
      color: theme.palette.grey.main,
      "&:hover": {
        color: theme.palette.grey.dark,
        transition: "all 0.3s",
      },
    },
    "& span": {
      textDecoration: "none",
    },
  },
}))(Button);

export const CssMenu = withStyles((theme) => ({
  list: {
    "& .MuiListItem-root": {
      color: "black",
    },
    "& a": {
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
}))(Menu);

export default useStyles;
