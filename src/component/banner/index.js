import React from 'react'
import {
    Container,
    Grid,
    Box} from "@material-ui/core";
import Slider from '../slider';
import Styles from './styles'
import { Images } from '../../theme';

const bannerComponent = () => {
    const classes = Styles();
    return(
        <Container className={classes.boxBanner}>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={12} sm={8} md={8}>
            <Slider />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box className={classes.smallBanner}>
              <Box>
                <img
                  className={classes.imageSmall}
                  src={Images.small1}
                  alt=""
                />
              </Box>
              <Box>
                <img
                  alt=""
                  className={classes.imageSmall}
                  src={Images.small2}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    )
}

export default bannerComponent;