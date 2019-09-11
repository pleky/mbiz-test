import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../theme";

const Styles = makeStyles(theme => ({
  test: {
    [theme.breakpoints.down("1189")]: {
      margin: 0
    },
   margin: "0 8px"
  },
  buttonDropdown: {
    [theme.breakpoints.down("417")]: {
      display: 'none'
    },
  },
  input: {
    flex: 2,
    marginLeft: 2,
    marginRight: 2
  },
  buttonAccount: {
    " &:hover ": {
      backgroundColor: Colors.ocean,
      color: Colors.white
    },
    borderColor: Colors.ocean,
    color: Colors.white,
    textTransform: 'capitalize'
  },
  groupButton: {
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    color: Colors.ocean,
    " &:hover ": {
      borderColor: Colors.white
    },
    textTransform: "capitalize"
  },
  root: {
    color: Colors.white
  },
  containerLogo: {
    width: 138,
    height: "auto"
  },
  logo: { width: "100%", height: "auto" },
  headerBottom: { backgroundColor: Colors.blue },
  containerSearchBox: {
    backgroundColor: Colors.white,
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "5px",
    borderColor: Colors.ocean
  },
  containerButtonAccount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 0.3
  }
}));

export default Styles;
