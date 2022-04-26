import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { StyledIconButton } from "../StyledIconButton";
import useStyles from "./style";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";

const FooterBottom = (props) => {
  const styles = useStyles();

  return (
    <Grid container spacing={2} className={styles.root}>
      <Grid item xs={12} md={4}>
        <Typography component="p" variant="subtitle1">
          Báo tiếng Việt nhiều người xem nhất
        </Typography>
        <Typography component="p">Thuộc Bộ Khoa học Công nghệ</Typography>
        <Typography component="p">
          Số giấy phép: 548/GP-BTTTT ngày 24/08/2021
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography component="p" variant="subtitle1">
          Tổng biên tập: Phạm Hiếu
        </Typography>
        <Typography component="p">
          Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội
        </Typography>
        <Typography component="p">
          Điện thoại: 024 7300 8899 - máy lẻ 4500
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography component="p">
          © 1997-2022. Toàn bộ bản quyền thuộc VnExpress
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FooterBottom;
