import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.grey.dark,
    marginTop: theme.spacing(1),
    // borderBottom: `1px solid ${theme.palette.grey.light}`,
    padding: theme.spacing(0.5, 0),
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
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
