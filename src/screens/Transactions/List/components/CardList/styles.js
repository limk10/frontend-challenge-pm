import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
  name: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
    color: theme.palette.grey[500],
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  },
  date: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
    color: theme.palette.grey[500]
  },
  status: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "right",
    color: theme.palette.grey[300]
  },
  amount: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "right",
    color: theme.palette.grey[700]
  },
  containerCard: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid #F2F2F3"
  }
}));
