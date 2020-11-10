import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  iconButton: {
    padding: 0,
    color: theme.palette.purple[100]
  },
  header: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "center",
    color: theme.palette.purple[800]
  },
  textArea: {
    width: "100%"
  },
  gridPadding: {
    paddingBottom: theme.spacing(2)
  },
  containerForm: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(5)
  }
}));

export default useStyles;
