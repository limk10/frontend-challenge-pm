import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "~/services/api";
import actionsTransaction from "~/actions/transaction";
import Button from "~/components/Button";

import { Container } from "./styles";

const List = () => {
  // const transactions = useSelector(
  //   state => state.reducerTransaction.addTransaction
  // );
  const dispatch = useDispatch();
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const { data } = await api("/transactions");
    dispatch(actionsTransaction.addTransaction(data));
    console.log(data);
  };

  return (
    <Container>
      <h3>Lista</h3>
      <Button />
    </Container>
  );
};

export default List;
