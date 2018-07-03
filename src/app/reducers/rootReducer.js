import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import eventReducer from "../../features/event/eventReducer";
import testReducer from "../../features/testArea/testReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  events: eventReducer,
  test: testReducer
});

export default rootReducer;
