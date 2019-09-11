import React from "react";

import { HeaderComponent, FooterComponent, BannerComponent, AboutBanner, CategoryComponnet } from "./component";
import {
  CssBaseline,
  Container,
  Grid,
  Hidden,
  Typography} from "@material-ui/core";
import { promo } from "./utils";
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div style={{ flexGrow: 1, backgroundColor: "#EEEEEE" }}>
      <CssBaseline />
      <HeaderComponent />

      {/* BANNER */}
      <BannerComponent />
      {/* BANNER END */}

      {/* PROMO */}

      <Container>
        <Typography
          variant="h5"
          style={{ marginTop: "15px", marginBottom: "15px", fontWeight: "500" }}
        >
          Promo Terbaru
        </Typography>
      </Container>
      {/* PROMO END */}

      {/* carrousel kategori */}
      <Container>
        <Hidden only="xs">
          <Grid container direction="row" spacing={1}>
            {promo.map((item, index) => (
              <Grid item xs={12} sm={4} md={4} key={index}>
                <img
                  src={item}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            ))}
          </Grid>
        </Hidden>

        <Hidden smUp>
          <Grid container>
            <Grid item xs={12}>
              <Carousel showThumbs={false} autoPlay>
                {promo.map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <img
                      src={item}
                      alt=""
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Grid>
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </Hidden>
      </Container>
      {/* carousel kategori end */}


      {/* Kategori poduk */}
      <CategoryComponnet />
      {/* kategori produk end */}

      {/* About */}
      <AboutBanner />
      {/* About end */}

      {/* Footer */}
      <FooterComponent />
      {/* Footer end */}
    </div>
  );
}

export default App;
