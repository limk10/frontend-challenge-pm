import actionsTypes from "./actionsTypes";

export default {
  addTransaction: value => {
    return {
      type: actionsTypes.ADD_TRANSACTION,
      payload: value
    };
  }
};
