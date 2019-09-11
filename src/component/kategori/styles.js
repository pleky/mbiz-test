import { makeStyles } from "@material-ui/core/styles";
import { Colors, Images } from "../../theme";

const style = makeStyles(theme => ({
  containerGridNav: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "20px"
    },
    padding: "50px 0 "
  },
  boxGrid: {
    borderWidth: 1,
    borderColor: Colors.ocean,
    borderStyle: "solid",
    padding: "15px 10px",
    transform: "scale(1)",
    transition: "transform 0.2s",
    " &:hover": {
      transform: "scale(1.1)",
      backgroundColor: Colors.darkblue,
      opacity: 1,
      WebkitTransform: "scale(1.1)",
      msTransform: "scale(1.1)",
      zIndex: 99
    }
  },
  titleCategory: {
    backgroundImage: `url(${Images.sp})`,
    height: "362px"
  },
  titleCategoryText: {
    fontWeight: "500",
    color: Colors.white,
    textAlign: "center"
  },
  gridMenuText: {
    textOverflow: "ellipsis",
    color: Colors.white,
    textAlign: "center",
    fontSize: 14,
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    height: 43,
    display: "-webkit-box"
  },
  secondCategory: {
    backgroundColor: Colors.blue,
    marginTop: "15px"
  }
}));

export default style;
