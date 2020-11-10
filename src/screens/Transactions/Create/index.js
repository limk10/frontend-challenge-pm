import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NumberFormat from "react-number-format";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

import {
  Typography,
  Grid,
  IconButton,
  Container,
  TextField
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import actionsTransaction from "~/actions/transaction";
import ActionButton from "~/components/ActionButton";
import { validate, transaction } from "~/utils/formValidation";
import actionsLoading from "~/actions/loading";
import Header from "~/components/Header";
import api from "~/services/api";

import _ from "lodash";

import useStyles from "./styles";

toast.configure();

const Create = () => {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const [form, setForm] = useState({});

  const transactions = useSelector(
    state => state.reducerTransaction.addTransaction
  );

  const requestLoading = useSelector(
    state => state.reducerLoading.requestLoading
  );

  const handleChange = (props, value) => {
    form[props] = value;
    setForm({ ...form });
  };

  const submit = async e => {
    e.preventDefault();
    dispatch(actionsLoading.requestLoading(true));
    const errors = await validate(transaction, form);

    if (!_.isEmpty(errors)) {
      toast.warn(`${errors}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false,
        allowHtml: true
      });
      return dispatch(actionsLoading.requestLoading(false));
    }

    const data = {
      credit_card_holder_name: form?.customerName,
      buyer_document: form?.document,
      credit_card_number: form?.cardNumber,
      credit_card_expiration_date: form?.expirationDate,
      credit_card_cvv: form?.cvv,
      amount: parseInt(form?.amount),
      createdAt: moment(new Date()).format("YYYY/MM/DD HH:mm:ss")
    };

    try {
      const { data: collection } = await api.post("transactions", data);

      let newtransactions = transactions?.data || [];

      newtransactions.push(collection);

      dispatch(
        actionsTransaction.addTransaction({
          data: newtransactions,
          success: true
        })
      );

      toast.success(`Transação criada com sucesso!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false,
        allowHtml: true
      });

      history.push("/transaction");
    } catch (error) {
    } finally {
      dispatch(actionsLoading.requestLoading(false));
    }
  };

  return (
    <>
      <Header
        render={
          <Grid container>
            <Grid xs={1}>
              <IconButton
                onClick={() => history.push("/transaction")}
                className={classes.iconButton}
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <ArrowBackIcon />
              </IconButton>
            </Grid>
            <Grid xs={10}>
              <Typography
                className={classes.header}
                variant="body1"
                gutterBottom
              >
                Nova Transação
              </Typography>
            </Grid>
            <Grid xs={1}></Grid>
          </Grid>
        }
      />
      <form noValidate autoComplete="false">
        <Container className={classes.containerForm}>
          <Grid container>
            <Grid className={classes.gridPadding} xs={12}>
              <TextField
                fullWidth
                autoComplete="off"
                value={form.customerName}
                onChange={e => handleChange("customerName", e.target.value)}
                id="outlined-basic"
                label="Nome da pessoa compradora"
                variant="outlined"
              />
            </Grid>
            <Grid className={classes.gridPadding} xs={12}>
              <NumberFormat
                fullWidth
                autoComplete="off"
                customInput={TextField}
                format="###.###.###-##"
                value={form.document}
                onValueChange={values => {
                  handleChange("document", values.value);
                }}
                id="outlined-basic"
                label="CPF"
                variant="outlined"
              />
            </Grid>
            <Grid className={classes.gridPadding} xs={12}>
              <NumberFormat
                fullWidth
                autoComplete="off"
                customInput={TextField}
                format="#### #### #### ####"
                value={form.cardNumber}
                onValueChange={values => {
                  handleChange("cardNumber", values.value);
                }}
                id="outlined-basic"
                label="N° do cartão"
                variant="outlined"
              />
            </Grid>
            <Grid className={classes.gridPadding} xs={8}>
              <NumberFormat
                style={{ width: "95%" }}
                autoComplete="off"
                customInput={TextField}
                format="##/##"
                value={form.expirationDate}
                onValueChange={values => {
                  handleChange("expirationDate", values.value);
                }}
                id="outlined-basic"
                label="Data de expiração"
                variant="outlined"
              />
            </Grid>
            <Grid className={classes.gridPadding} xs={4}>
              <NumberFormat
                fullWidth
                autoComplete="off"
                customInput={TextField}
                value={form.cvv}
                format="####"
                onChange={e => handleChange("cvv", e.target.value)}
                id="outlined-basic"
                label="CVV"
                variant="outlined"
              />
            </Grid>
            <Grid className={classes.gridPadding} xs={12}>
              <NumberFormat
                fullWidth
                autoComplete="off"
                customInput={TextField}
                value={form.amount}
                onValueChange={values => {
                  handleChange("amount", values.floatValue);
                }}
                thousandSeparator={"."}
                decimalSeparator={","}
                id="outlined-basic"
                label="Valor da transação"
                variant="outlined"
                prefix={"R$ "}
              />
            </Grid>
          </Grid>
        </Container>

        <div>
          <Container>
            <ActionButton
              disabled={requestLoading}
              onClick={e => submit(e)}
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
      </form>
    </>
  );
};

export default Create;
