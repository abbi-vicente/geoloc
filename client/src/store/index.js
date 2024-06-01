import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import authReducer from "../reducers/authReducers";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
