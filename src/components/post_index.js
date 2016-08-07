import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {
  componentWillMount() {
    //call an action creator without an user action since this method
    //will be called on first time the page is loaded (not rerendered)
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item"
          key={post.id}>
            <Link to={`posts/${post.id}`}>
              <span className="pull-xs-right">
                {post.categories}
              </span>
              <strong>{post.title}</strong>
            </Link>
          </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts.all };
}
//shortcut for second argument, it will match the dispatch to props
export default connect(mapStateToProps, { fetchPosts })(PostIndex);
