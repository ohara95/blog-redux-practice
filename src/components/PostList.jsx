import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostAndUsers } from "../actions";
import UserHeader from "./UserHeader";

import { Item, Icon } from "semantic-ui-react";

const PostList = ({ fetchPostAndUsers, posts }) => {
  useEffect(() => {
    fetchPostAndUsers();
  }, []);

  const renderList = () => {
    return posts.map((post) => {
      return (
        <Item key={post.id}>
          <Icon size="large" name="user" />
          <Item.Content>
            <Item.Description>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </Item.Description>
            <UserHeader userId={post.userId} />
          </Item.Content>
        </Item>
      );
    });
  };

  return (
    <Item.Group divided relaxed>
      {renderList()}
    </Item.Group>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

// connectの第一引数に入れるものがない時はnullでOK
export default connect(mapStateToProps, { fetchPostAndUsers })(PostList);
