import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPostAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    // redux内部のpostsデータが見れる
    // console.log(getState().posts);

    // 配列でuserIdのみ出す
    const userIds = _.uniq(_.map(getState().posts, "userId"));
    userIds.forEach((id) => dispatch(fetchUser(id)));

    // こっちでもOK
    // await Promise.all(userIds.map((id) => dispatch(fetchUser(id))));

    // こっちでもOK
    // _.chain(getState().posts)
    // .map('userId')
    // .uniq()
    // .forEach(id => dispatch(fetchUser(id)))
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts"); //URLの末尾,欲しい情報
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};

// 1行だからreturn省略してるだけ
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};

// ユーザーID毎呼び出す
// export const fetchUser = (id) => async (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// });
