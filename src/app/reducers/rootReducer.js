import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import eventReducer from "../../features/event/eventReducer";
import testReducer from "../../features/testArea/testReducer";
import modalsReducer from "../../features/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  events: eventReducer,
  test: testReducer,
  modals: modalsReducer,
  auth: authReducer
});

export default rootReducer;
