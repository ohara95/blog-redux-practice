import React from "react";
import { connect } from "react-redux";
// import { fetchUser } from "../actions";

import { Header } from "semantic-ui-react";

// 1人のユーザーだけ表示
const UserHeader = ({ user }) => {
  // ユーザーを重複で取得してしまうので削除
  // useEffect(() => {
  //   fetchUser(userId);
  // }, []);

  if (!user) {
    return null;
  }
  return <Header>{user.name}</Header>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
