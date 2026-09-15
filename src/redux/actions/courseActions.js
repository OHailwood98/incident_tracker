import * as types from "../ActionTypes";
//import * as courseAPI from "../../api/courseApi";
import api from "../../api";
var incidents = api.incidents;

export function LoadCoursesAction(courses) {
  return { type: types.LOAD_COURSES, courses };
}

export function updateCourseAction(course) {
  return { type: types.UPDATE_COURSE, course };
}

export function saveCourseAction(course) {
  return { type: types.SAVE_COURSE, course };
}

export function LoadCourses() {
  return function (dispatch) {
    return incidents
      .getCourses()
      .then((courses) => {
        console.dir(courses);
        dispatch(LoadCoursesAction(courses));
      })
      .catch((error) => {
        console.dir(error);
        throw error;
      });
  };
}
