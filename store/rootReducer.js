import { combineReducers } from "redux";
import worflowReducer from "./workflow/workflowReducer";

const rootReducer = combineReducers({
  workflow: worflowReducer,
});

export default rootReducer;
