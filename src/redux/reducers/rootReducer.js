import { combineReducers } from "redux";

import incidents from "./incidentReducers";
import user from "./userReducer";
import users from "./usersReducer";

const rootReducer = combineReducers({
  user: user,
  incidents: incidents,
  users: users,
});

export default rootReducer;
