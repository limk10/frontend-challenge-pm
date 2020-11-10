import React from "react";
import {
  Grid,
  Container,
  CircularProgress,
  Typography
} from "@material-ui/core";
import { useSelector } from "react-redux";
import moment from "moment";

import { useStyles } from "./styles";

import { titleCase } from "~/utils/text";
import { randomDateTime } from "~/utils/date";
import { formatBrazillianMoney } from "~/utils/money";

const CardList = params => {
  const transactions = useSelector(
    state => state.reducerTransaction.addTransaction
  );
  const requestLoading = useSelector(
    state => state.reducerLoading.requestLoading
  );
  const classes = useStyles();

  return (
    <>
      {requestLoading && (
        <Container
          className={classes.containerCard}
          style={{ textAlign: "center" }}
        >
          <CircularProgress size={30} />
        </Container>
      )}
      {!requestLoading && !transactions?.data?.length && (
        <Typography
          style={{ textAlign: "center" }}
          variant="body1"
          gutterBottom
        >
          Nenhuma transação encontrada!
        </Typography>
      )}
      <div data-testid="card-list">
        {!requestLoading &&
          transactions?.data?.map((transaction, index) => (
            <Container key={index} className={classes.containerCard}>
              <Grid container>
                <Grid className={classes.name} xs={6}>
                  {titleCase(transaction?.credit_card_holder_name) || "-"}
                </Grid>
                <Grid className={classes.status} xs={6}>
                  {transaction?.status || "-"}
                </Grid>
                <Grid className={classes.date} xs={6}>
                  {moment(randomDateTime()).format("DD/MM/YYYY HH:mm") || "-"}
                </Grid>
                <Grid className={classes.amount} xs={6}>
                  {formatBrazillianMoney(transaction?.amount) || "-"}
                </Grid>
              </Grid>
            </Container>
          ))}
      </div>
    </>
  );
};

export default CardList;
