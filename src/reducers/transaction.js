import actionsTypes from "~/actions/actionsTypes";

const INITIAL_STATE = {};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_TRANSACTION:
      return { ...state, addTransaction: action.payload };

    default:
      return state;
  }
};

export default reducers;
