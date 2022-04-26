import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.grey.dark,
    marginTop: theme.spacing(1),
    border: `1px solid ${theme.palette.grey.light}`,
    padding: theme.spacing(0.5, 0),
    textDecoration: "underline",
    textDecorationColor: theme.palette.secondary.main,
  },
  logo: {
    border: "none",
    "& img": { height: 20 },
  },
  social: {
    "&.MuiIconButton-root": {
      border: `1px solid ${theme.palette.grey.light}`,
      margin: theme.spacing(0, 0.5),
      "&:hover": {
        background: theme.palette.primary.main,
        color: theme.palette.white.main,
      },
    },
  },
  thumbnail: {
    width: "100%",
  },
  text: {
    color: theme.palette.grey.main,
  },
  title1: {
    color: theme.palette.grey.dark,
    margin: theme.spacing(0, 0.5),
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
  },
  catName: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "inline-block",
    },
  },
  moreVideo: {
    height: 300,
    overflowY: "scroll",
  },
}));

export default useStyles;
