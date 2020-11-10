import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Container = styled.div``;

export const useStyles = makeStyles(theme => ({
  subtitleHeader: {
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0em",
    color: theme.palette.grey[800],
    marginBottom: 0
  },
  descriptionTitleHeader: {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "32px",
    letterSpacing: "0em",
    color: theme.palette.text.success
  }
}));
