import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme";

const styles = makeStyles(theme => ({
  footer: { backgroundColor: Colors.darkblue, marginTop: 20 },
  visiMisi: {
    flexGrow: 1,
    fontSize: "16px",
    color: Colors.white,
    textAlign: "center",
    flexDirection: "row",
    [theme.breakpoints.down("770")]: {
      flexDirection: "column"
    }
  },
  containerIconVisiMisi: {
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("770")]: {
      flexDirection: "row",
      justifyContent: "flex-start",
      "& p": {
        marginLeft: 15,
        marginTop: 0
      }
    },
  },
  gridVisiMisi: {
    flex: 1,
    padding: "15px 0",
    [theme.breakpoints.down("770")]: {
      padding: 0
    }
  },
  footerContent: {
    flexGrow: 1,
    color: Colors.white,
    flexDirection: "row",
    [theme.breakpoints.down("770")]: {
      flexDirection: "column"
    }
  },
  gridFooterContent: {
    padding: "50px 0 20px"
  },
  anchorContentFooter: {
    color: Colors.lumer,
    "&:hover": {
      color: Colors.white,
      cursor: "pointer"
    }
  },
  buttonSeller: {
    color: Colors.yellow,
    textTransform: "capitalize",
    borderColor: Colors.yellow,
    "&:hover": {
      backgroundColor: Colors.yellow,
      color: Colors.white
    }
  },
  copyright: {
    paddingTop: "15px",
    paddingBottom: "15px",
    color: Colors.white,
    fontSize: 14
  }
}));
export default styles;
