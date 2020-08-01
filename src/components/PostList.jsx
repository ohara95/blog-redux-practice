import React from "react";
import { connect } from "react-redux";
import { fetchPostAndUsers } from "../actions";
import UserHeader from "./UseHeader";

import { Item, Icon } from "semantic-ui-react";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
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
  }

  render() {
    return (
      <Item.Group divided relaxed>
        {this.renderList()}
      </Item.Group>
    );
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

// connectの第一引数に入れるものがない時はnullでOK
export default connect(mapStateToProps, { fetchPostAndUsers })(PostList);

// const PostList = ({ fetchPosts, posts }) => {
//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const renderList = () => {
//     posts.map((post) => {
//       return (
//         <Item>
//           <Icon large middle aligned name="user" />
//           <Item.Content>
//             <div className="description">
//               <h2>{post.title}</h2>
//               <p>{post.body}</p>
//             </div>
//           </Item.Content>
//         </Item>
//       );
//     });
//   };
//   return <Item>{renderList()}</Item>;
// };

// const mapStateToProps = (state) => {
//   return { posts: state.posts };
// };
