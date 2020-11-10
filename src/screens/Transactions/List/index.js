import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Typography, Container, CircularProgress } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { useStyles } from "./styles";

import CardList from "./components/CardList";

import actionsTransaction from "~/actions/transaction";
import { formatBrazillianMoney } from "~/utils/money";
import ActionButton from "~/components/ActionButton";
import actionsLoading from "~/actions/loading";
import Header from "~/components/Header";
import api from "~/services/api";

const List = () => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const transactions = useSelector(
    state => state.reducerTransaction.addTransaction
  );
  const requestLoading = useSelector(
    state => state.reducerLoading.requestLoading
  );

  useEffect(() => {
    if (!transactions?.success) init();
  }, []);

  const init = async () => {
    try {
      dispatch(actionsLoading.requestLoading(true));
      const { data } = await api.get("/transactions");
      dispatch(
        actionsTransaction.addTransaction({
          data: data,
          success: true
        })
      );
    } catch (error) {
    } finally {
      dispatch(actionsLoading.requestLoading(false));
    }
  };

  const sumValues = () => {
    var count = 0;
    for (var i = transactions?.data?.length; i--; ) {
      count += transactions?.data[i]?.amount;
    }
    return count;
  };

  return (
    <>
      <Header
        render={
          <>
            <Typography
              className={classes.subtitleHeader}
              variant="subtitle2"
              gutterBottom
            >
              Número de Transações
            </Typography>
            <Typography
              className={classes.descriptionTitleHeader}
              variant="subtitle2"
              gutterBottom
            >
              {requestLoading && (
                <CircularProgress
                  style={{ marginTop: theme.spacing(1) }}
                  size={18}
                />
              )}
              {!requestLoading && transactions?.data?.length}
            </Typography>

            <Typography
              className={classes.subtitleHeader}
              style={{
                marginTop: theme.spacing(2)
              }}
              variant="subtitle2"
              gutterBottom
            >
              Valor Total
            </Typography>
            <Typography
              className={classes.descriptionTitleHeader}
              variant="subtitle2"
              gutterBottom
            >
              {requestLoading && (
                <CircularProgress
                  style={{ marginTop: theme.spacing(1) }}
                  size={18}
                />
              )}
              {!requestLoading && formatBrazillianMoney(sumValues())}
            </Typography>
          </>
        }
      />

      <div>
        <CardList />
        <Container>
          <ActionButton
            onClick={() => history.push("/transaction/create")}
            icon={
              <AddCircleIcon
                style={{ color: theme.palette.purple[20] }}
                fontSize="small"
              />
            }
            title={"Criar Transação"}
          />
        </Container>
      </div>
    </>
  );
};

export default List;
