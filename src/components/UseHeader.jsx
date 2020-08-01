import React from "react";
import { connect } from "react-redux";
// import { fetchUser } from "../actions";

import { Header } from "semantic-ui-react";

// 1人のユーザーだけ表示
class UseHeader extends React.Component {
  // ユーザーを重複で取得してしまうので削除
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }
    return <Header>{user.name}</Header>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UseHeader);
