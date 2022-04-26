import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@material-ui/core/styles";

const Search = styled("div")(() => {
  const theme = useTheme();
  return {
    position: "relative",
    borderRadius: 50,
    border: `1px solid ${theme.palette.grey.light}`,
    "&:hover": {
      // backgroundColor: theme.palette.grey.main,
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  };
});

const SearchIconWrapper = styled("div")(() => {
  const theme = useTheme();
  return {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

const StyledInputBase = styled(InputBase)(({ theme }) => {
  // const theme = useTheme();
  return {
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  };
});

export default function SearchAppBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Tìm kiếm"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}
