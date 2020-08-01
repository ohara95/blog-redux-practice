import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

export default combineReducers({
  //最初にreducer関数が空だとエラーになるのでダミーで入れておく
  // replaceMe: () => "hi there!",
  posts: postReducer,
  users: userReducer,
});
