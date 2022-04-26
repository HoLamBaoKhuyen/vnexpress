import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const StyledIconButton = withStyles((theme) => ({
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
      textTransform: "none",
    },
  },
}))(Button);
