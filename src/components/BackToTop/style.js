import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toTop: {
    position: "fixed",
    bottom: "8vh",
    right: "3%",
    padding: theme.spacing(0.5),
    color: theme.palette.grey.main,
    border: `1px solid ${theme.palette.grey.main}`,
    // background: theme.palette.primary.main,
    outlineStyle: "none!important",
    zIndex: 5,

    "&:hover, &:focus": {
      background: theme.palette.grey.light,
      transition: "0.3s",
    },
  },
}));

export default useStyles;
