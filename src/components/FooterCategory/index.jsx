import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import { StyledIconButton } from "../StyledIconButton";
import useStyles from "./style";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PublicIcon from "@mui/icons-material/Public";
import EmailIcon from "@mui/icons-material/Email";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import AdUnitsIcon from "@mui/icons-material/AdUnits";

const categories1 = ["Trang chủ", "Video", "Podcasts", "Ảnh", "Infographics"];
const categories2 = ["Mới nhất", "Xem nhiều", "Tin nóng"];
const categories3 = [
  "Thời sự",
  "Góc nhìn",
  "Thế giới",
  "Kinh doanh",
  "Giải trí",
];
const categories4 = [
  "Thể thao",
  "Pháp luật",
  "Giáo dục",
  "Sức khỏe",
  "Đời sống",
  "Du lịch",
];
const categories5 = ["Khoa học", "Số hóa", "Xe", "Ý kiến", "Tâm sự", "Hài"];
const categories6 = [
  "Rao vặt",
  "Startup",
  "Mua ảnh VnExpress",
  "Vhome",
  "eBox",
];
const FooterCategory = (props) => {
  const styles = useStyles();

  return (
    <>
      <Grid container className={styles.root}>
        <Grid item xs={12} md={8}>
          <Grid container>
            <Grid item xs={4} sm={3}>
              <div className={styles.menuTop}>
                {categories1.map((cat) => (
                  <div>
                    <Link href="#" className={styles.link} variant="subtitle2">
                      {cat}
                    </Link>
                  </div>
                ))}
              </div>
              {categories2.map((cat) => (
                <div>
                  <Link href="#" className={styles.link} variant="subtitle2">
                    {cat}
                  </Link>
                </div>
              ))}
            </Grid>
            <Grid item xs={4} sm={2}>
              {categories3.map((cat) => (
                <div>
                  <Link href="#" className={styles.link} variant="body2">
                    {cat}
                  </Link>
                </div>
              ))}
            </Grid>
            <Grid item xs={4} sm={2}>
              {categories4.map((cat) => (
                <div>
                  <Link href="#" className={styles.link} variant="body2">
                    {cat}
                  </Link>
                </div>
              ))}
            </Grid>
            <Grid item xs={4} sm={2}>
              {categories5.map((cat) => (
                <div>
                  <Link href="#" className={styles.link} variant="body2">
                    {cat}
                  </Link>
                </div>
              ))}
            </Grid>
            <Grid item xs={4} sm={2}>
              {categories6.map((cat) => (
                <div>
                  <Link href="#" className={styles.link} variant="body2">
                    {cat}
                  </Link>
                </div>
              ))}
            </Grid>{" "}
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Grid container className={styles.contact1}>
            <Grid item xs={6}>
              <Typography component="p" variant="body2" className={styles.text}>
                Tải ứng dụng
              </Typography>
              <div>
                <StyledIconButton
                  variant="outlined"
                  className={styles.button1}
                  startIcon={<PublicIcon />}
                >
                  VnExpress
                </StyledIconButton>
              </div>
              <div>
                <StyledIconButton
                  variant="outlined"
                  className={styles.button2}
                  startIcon={<PublicIcon />}
                >
                  International
                </StyledIconButton>
              </div>
            </Grid>
            <Grid item xs={6}>
              <Typography component="p" variant="body2" className={styles.text}>
                Liên hệ
              </Typography>
              <div>
                <StyledIconButton
                  variant="outlined"
                  className={styles.toaSoan}
                  startIcon={<EmailIcon />}
                >
                  Tòa soạn
                </StyledIconButton>
              </div>
              <div>
                <StyledIconButton
                  variant="outlined"
                  className={styles.toaSoan}
                  startIcon={<AdUnitsIcon />}
                >
                  Quảng cáo
                </StyledIconButton>
              </div>
              <div>
                <StyledIconButton
                  variant="outlined"
                  className={styles.toaSoan}
                  startIcon={<FontDownloadIcon />}
                >
                  Hợp tác bản quyền
                </StyledIconButton>
              </div>
            </Grid>
          </Grid>
          <div>
            <Typography component="p" variant="body2" className={styles.text}>
              Đường dây nóng
            </Typography>
            <div>
              <Typography
                component="p"
                variant="subtitle1"
                className={styles.text2}
              >
                083.888.0123
              </Typography>
              <Typography component="p" variant="body2" className={styles.text}>
                (Hà Nội)
              </Typography>
            </div>
            <div>
              <Typography
                component="p"
                variant="subtitle1"
                className={styles.text2}
              >
                082.233.3555
              </Typography>
              <Typography component="p" variant="body2" className={styles.text}>
                (TP. Hồ Chí Minh)
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default FooterCategory;
