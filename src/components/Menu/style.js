import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  styledBtn: {
    "&.MuiButton-root": {
      // display: "none",
      color: theme.palette.grey.dark,
      height: "100%",
      textTransform: "none",
      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },
  },
}));

export default useStyles;
