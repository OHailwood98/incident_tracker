import { combineReducers } from "redux";

import incidents from "./incidentReducers";
import user from "./userReducer";

const rootReducer = combineReducers({
  user: user,
  incidents: incidents,
});

export default rootReducer;
