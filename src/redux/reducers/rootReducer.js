import { combineReducers } from "redux";

import incidents from "./incidentReducers";

const rootReducer = combineReducers({
  incidents: incidents,
});

export default rootReducer;
