import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.white,
    borderTop: "5px solid",
    borderColor: theme.palette.grey.light,
    color: theme.palette.white.main,
    overflow: "hidden",
    padding: theme.spacing(3, 0),
    "& a:hover": {
      textDecoration: "none",
    },
  },
  link: {
    display: "block",
    margin: theme.spacing(1, 0),
    color: theme.palette.grey.dark,
    // fontWeight: theme.
    "&:hover": {
      color: theme.palette.secondary.main,
      transition: "all 0.1s",
    },
  },
  menuTop: {
    borderBottom: `1px solid ${theme.palette.grey.light}`,
  },
  text: {
    color: theme.palette.grey.main,
  },
  text2: {
    color: theme.palette.grey.dark,
    marginTop: theme.spacing(1),
  },
  button1: {
    width: "90%",
    margin: theme.spacing(0.5, 0),
    "&.MuiButton-root": {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
    "&:hover": {
      background: theme.palette.grey.light,
    },
  },
  button2: {
    width: "90%",
    margin: theme.spacing(0.5, 0),
    "&:hover": {
      background: theme.palette.grey.light,
    },
  },
  toaSoan: {
    border: "none",
  },
  contact1: {
    borderBottom: `1px solid ${theme.palette.grey.light}`,
    paddingBottom: theme.spacing(1),
  },
}));

export default useStyles;
