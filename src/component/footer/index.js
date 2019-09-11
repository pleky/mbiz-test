import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  List,
  ListItemText,
  Button
} from "@material-ui/core";

import { visiMisi } from "../../utils";
import { Colors } from "../../theme";


import Styles from "./styles";

const footerComponent = () => {
  const classes = Styles();
  return (
    <Box component="footer" className={classes.footer}>
      {/* visi misi */}
      <Container>
        <Grid container className={classes.visiMisi}>
          {visiMisi.map((item, index) => (
            <Grid key={index} item className={classes.gridVisiMisi}>
              <Box className={classes.containerIconVisiMisi}>
                {" "}
                <Box fontSize="35px" textAlign="center">{item.icon}</Box>
                <Typography>{item.text}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* visi misi end */}

      {/* footer contet */}
      <Box style={{ backgroundColor: Colors.blue }}>
        <Container>
          <Grid container className={classes.footerContent}>
            <Grid
              item
              xs={12}
              md={3}
              sm={6}
              lg={3}
              className={classes.gridFooterContent}
            >
              <Typography>Mbizmarket.co.id</Typography>
              <List style={{ margin: 5, letterSpacing: 0.3 }}>
                <ListItemText>
                  <Box component="a" className={classes.anchorContentFooter}>
                    Tentang Kami
                  </Box>
                </ListItemText>
                <ListItemText>
                  <Box component="a" className={classes.anchorContentFooter}>
                    Syarat dan Ketentuan
                  </Box>
                </ListItemText>
                <ListItemText>
                  <Box component="a" className={classes.anchorContentFooter}>
                    Kebijakan Privasi
                  </Box>
                </ListItemText>
              </List>
              <Button variant="outlined" className={classes.buttonSeller}>
                Seller Center
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sm={6}
              lg={3}
              className={classes.gridFooterContent}
            >
              <Typography>Pembelian</Typography>
              <List>
                <ListItemText>
                  <Box component="a" className={classes.anchorContentFooter}>
                    Cara Bertransaksi
                  </Box>
                </ListItemText>
                <ListItemText>
                  <Box component="a" className={classes.anchorContentFooter}>
                    Masuk Sebagai Pembeli
                  </Box>
                </ListItemText>
              </List>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sm={6}
              lg={3}
              className={classes.gridFooterContent}
            >
              <Typography>Penjualan</Typography>
              <List>
                <ListItemText>
                  <Box component="a" className={classes.anchorContentFooter}>
                    Cara Berjualan
                  </Box>
                </ListItemText>
                <ListItemText>
                  <Box component="a" className={classes.anchorContentFooter}>
                    Masuk Sebagai Penjual
                  </Box>
                </ListItemText>
              </List>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sm={6}
              lg={3}
              className={classes.gridFooterContent}
            >
              <Typography>Hubungi Kami</Typography>
              <List>
                <ListItemText>
                  <Box component="a" className={classes.anchorContentFooter}>
                    help@mbizmarket.co.id
                  </Box>
                </ListItemText>
                <ListItemText>
                  <Box component="a" className={classes.anchorContentFooter}>
                    Kirim Pesan
                  </Box>
                </ListItemText>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* footer content end */}

      <Container className={classes.copyright}>
        <Typography>
          Copyright{" "}
          <a href="www.mbizmarket.co.id" style={{ color: "#007bff" }}>
            mbizmarket.co.id
          </a>{" "}
          © 2019. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default footerComponent;
