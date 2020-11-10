import { combineReducers } from "redux";

import reducerTransaction from "~/reducers/transaction";
import reducerLoading from "~/reducers/loading";

const reducers = combineReducers({
  reducerTransaction,
  reducerLoading
});

export default reducers;
