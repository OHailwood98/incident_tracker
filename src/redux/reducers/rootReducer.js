import { combineReducers } from "redux";

import incidents from "./IncidentReducers";

const rootReducer = combineReducers({
  incidents: incidents,
});

export default rootReducer;
