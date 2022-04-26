import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import FooterCategory from "../FooterCategory";
import useStyles from "./style";

const categories1 = ["Trang chủ", "Video", "Podcasts", "Ảnh", "Infographics"];
const categories2 = [
  "Thời sự",
  "Góc nhìn",
  "Thế giới",
  "Kinh doanh",
  "Giải trí",
];
const categories3 = [
  "Thể thao",
  "Pháp luật",
  "Giáo dục",
  "Sức khỏe",
  "Đời sống",
  "Du lịch",
];
const categories4 = ["Khoa học", "Số hóa", "Xe", "Ý kiến", "Tâm sự", "Hài"];
const categories5 = [
  "Rao vặt",
  "Startup",
  "Mua ảnh VnExpress",
  "Vhome",
  "eBox",
];
const Footer = (props) => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Container maxWidth="xl">
        <Grid container>
          <FooterCategory />
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
