import React from "react";
import { Grid, Box, Typography, Container, Hidden } from "@material-ui/core";
import Styles from "./styles";
import { kategori } from "../../utils";

const kategoriComponent = () => {
  const classes = Styles();
  return (
    <div className={classes.secondCategory}>
      <Container>
        <Grid container>
          <Hidden mdDown>
            <Grid
              container
              justify="center"
              alignItems="center"
              md={3}
              className={classes.titleCategory}
            >
              <Typography variant="h3" className={classes.titleCategoryText}>
                Kategori Produk
              </Typography>
            </Grid>
          </Hidden>

          <Grid
            container
            sm={12}
            md={12}
            lg={9}
            className={classes.containerGridNav}
          >
            {kategori.map(item => (
              <Grid
                container
                direction="column"
                lg={2}
                xs={4}
                key={item.id}
                className={classes.boxGrid}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  style={{ flexGrow: 1, marginBottom: 10 }}
                >
                  <img
                    alt=""
                    src={item.icon}
                    style={{ height: 40, opacity: 0.7 }}
                  />
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  style={{ overflow: "hidden" }}
                >
                  <Typography className={classes.gridMenuText}>
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
            <Grid
              container
              direction="column"
              lg={2}
              xs={4}
              className={classes.boxGrid}
            >
              <Box
                display="flex"
                style={{ overflow: "hidden", margin: "auto 0 " }}
              >
                <Typography className={classes.gridMenuText}>
                  Lihat Semua Kategori
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default kategoriComponent;
