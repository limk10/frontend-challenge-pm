import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
  button: {
    width: "100%",
    height: "48px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(112, 82, 200, 0.3)",
    textTransform: "none",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3)
  },
  textButton: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0em"
  }
}));
