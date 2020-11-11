import React from "react";
import {
  Grid,
  Container,
  CircularProgress,
  Typography
} from "@material-ui/core";
import { useSelector } from "react-redux";

import { useStyles } from "./styles";

import { titleCase } from "~/utils/text";
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
                <Grid item={true} className={classes.name} xs={6}>
                  {titleCase(transaction?.credit_card_holder_name) || "-"}
                </Grid>
                <Grid item={true} className={classes.status} xs={6}>
                  {transaction?.status || "-"}
                </Grid>
                <Grid item={true} className={classes.date} xs={6}>
                  {transaction?.createdAt || "-"}
                </Grid>
                <Grid item={true} className={classes.amount} xs={6}>
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
