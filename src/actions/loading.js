import actionsTypes from "./actionsTypes";

export default {
  requestLoading: value => {
    return {
      type: actionsTypes.REQUEST_LOADING,
      payload: value
    };
  }
};
