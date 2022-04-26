import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import { IconButton } from "../IconButton";
import useStyles from "./style";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PublicIcon from "@mui/icons-material/Public";
import EmailIcon from "@mui/icons-material/Email";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import AdUnitsIcon from "@mui/icons-material/AdUnits";

const FooterMiddle = (props) => {
  const styles = useStyles();

  return (
    <>
      <Grid container className={styles.root}>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={3}>
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
            <Grid item xs={2}>
              {categories3.map((cat) => (
                <div>
                  <Link href="#" className={styles.link} variant="body2">
                    {cat}
                  </Link>
                </div>
              ))}
            </Grid>
            <Grid item xs={2}>
              {categories4.map((cat) => (
                <div>
                  <Link href="#" className={styles.link} variant="body2">
                    {cat}
                  </Link>
                </div>
              ))}
            </Grid>
            <Grid item xs={2}>
              {categories5.map((cat) => (
                <div>
                  <Link href="#" className={styles.link} variant="body2">
                    {cat}
                  </Link>
                </div>
              ))}
            </Grid>
            <Grid item xs={2}>
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

        <Grid item xs={4}>
          <Grid container className={styles.contact1}>
            <Grid item xs={6}>
              <Typography component="p" variant="body2" className={styles.text}>
                Tải ứng dụng
              </Typography>
              <div>
                <IconButton
                  variant="outlined"
                  className={styles.button1}
                  startIcon={<PublicIcon />}
                >
                  VnExpress
                </IconButton>
              </div>
              <div>
                <IconButton
                  variant="outlined"
                  className={styles.button2}
                  startIcon={<PublicIcon />}
                >
                  International
                </IconButton>
              </div>
            </Grid>
            <Grid item xs={6}>
              <Typography component="p" variant="body2" className={styles.text}>
                Liên hệ
              </Typography>
              <div>
                <IconButton
                  variant="outlined"
                  className={styles.toaSoan}
                  startIcon={<EmailIcon />}
                >
                  Tòa soạn
                </IconButton>
              </div>
              <div>
                <IconButton
                  variant="outlined"
                  className={styles.toaSoan}
                  startIcon={<AdUnitsIcon />}
                >
                  Quảng cáo
                </IconButton>
              </div>
              <div>
                <IconButton
                  variant="outlined"
                  className={styles.toaSoan}
                  startIcon={<FontDownloadIcon />}
                >
                  Hợp tác bản quyền
                </IconButton>
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

export default FooterMiddle;
