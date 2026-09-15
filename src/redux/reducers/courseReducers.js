import * as types from "../ActionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.SAVE_COURSE:
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE:
      return state.map(course => {
        if (course.id === action.course.id) {
          return action.course;
        } else {
          return course;
        }
      });
    case types.LOAD_COURSES:
      return action.courses;
    default:
      return state;
  }
}

/*
state.map(course => {
  course.id === action.course.id ? action.course : course
});
*/
