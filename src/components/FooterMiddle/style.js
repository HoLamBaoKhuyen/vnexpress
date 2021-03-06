import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    display: "flex",
    justifyContent: "space-between",
    borderTop: `2px solid ${theme.palette.grey.light}`,
    borderBottom: `1px solid ${theme.palette.grey.light}`,
    padding: theme.spacing(1, 0),
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
  text: {
    color: theme.palette.grey.main,
  },
}));

export default useStyles;
