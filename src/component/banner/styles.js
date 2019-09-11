import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles(theme => ({
    boxBanner: {
      marginTop: theme.spacing(3)
    },
    smallBanner: {
      flexDirection: "row",
      display: "flex",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "column"
      }
    },
    imageSmall: {
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        height: "auto",
        width: "100%"
      }
    },
  }));

  export default style;