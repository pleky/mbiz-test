/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef } from "react";
import {
  Box,
  Toolbar,
  Typography,
  Grid,
  Container,
  Hidden,
  Button,
  InputBase,
  Popper,
  ButtonGroup,
  Grow,
  Paper,
  MenuList,
  ClickAwayListener,
  MenuItem
} from "@material-ui/core";

import { options } from "../../utils";

import { Search } from "@material-ui/icons";

import { FaBars, FaAngleDown } from "react-icons/fa";

import { Colors, Images } from "../../theme";
import Styles from "./styles";



const headerComponent = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const classes = Styles();
  return (
    <div className={classes.root}>
      <Box component="header">
        <Toolbar variant="dense" style={{ backgroundColor: Colors.darkblue }}>
          <Container maxWidth="lg">
            <Grid container justify="space-between" alignItems="center">
              <Box
                justifyContent="space-between"
                className={classes.containerLogo}
              >
                <Box
                  component="img"
                  src={Images.logo}
                  alt="logo"
                  className={classes.logo}
                />
              </Box>
              <Typography>Bantuan</Typography>
            </Grid>
          </Container>
        </Toolbar>
        <Toolbar className={classes.headerBottom}>
          <Container maxWidth="lg">
            <Grid container alignItems="center">
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                style={{ flex: 0.3 }}
              >
                <FaBars />
                <Hidden smDown>
                  <Typography className={classes.test}>Katerogi</Typography>
                  <FaAngleDown />
                </Hidden>
              </Box>

              <Box style={{ flex: 2 }} paddingRight="5px">
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  className={classes.containerSearchBox}
                >
                  <ButtonGroup
                    variant="outlined"
                    color="primary"
                    ref={anchorRef}
                    className={classes.buttonDropdown}
                    aria-label="split button"
                  >
                    <Button
                      onClick={handleToggle}
                      className={classes.groupButton}
                    >
                      {options[selectedIndex]}
                    </Button>
                    <Button
                      color="primary"
                      size="small"
                      aria-owns={open ? "menu-list-grow" : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle}
                      className={classes.groupButton}
                    >
                      <FaAngleDown />
                    </Button>
                  </ButtonGroup>

                  <Popper open={open} anchorEl={anchorRef.current} transition>
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom"
                              ? "center top"
                              : "center bottom"
                        }}
                      >
                        <Paper id="menu-list-grow">
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList>
                              {options.map((option, index) => (
                                <MenuItem
                                  key={option}
                                  selected={index === selectedIndex}
                                  onClick={event =>
                                    handleMenuItemClick(event, index)
                                  }
                                >
                                  {option}
                                </MenuItem>
                              ))}
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>

                  <InputBase
                    className={classes.input}
                    placeholder="apa yang anda cari?"
                    inputProps={{ "aria-label": "apa yang anda cari?" }}
                  />

                  <Button
                    style={{
                      backgroundColor: Colors.ocean,
                      color: Colors.white,
                      fontWeight: "bold"
                    }}
                  >
                    <Search />
                  </Button>
                </Box>
              </Box>

              <Hidden smDown>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  style={{ flex: 0.3 }}
                  className={classes.containerButtonAccount}
                >
                  <Button
                    className={classes.buttonAccount}
                    size="small"
                    variant="outlined"
                    color="primary"
                  >
                    Masuk
                  </Button>
                  <Button
                    className={classes.buttonAccount}
                    size="small"
                    variant="outlined"
                    color="primary"
                  >
                    Daftar
                  </Button>
                </Box>
              </Hidden>
            </Grid>
          </Container>
        </Toolbar>
      </Box>
    </div>
  );
}

export default headerComponent;
