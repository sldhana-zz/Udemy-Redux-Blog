import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  //declaring an object on the PostsNew class

  //this searches all of PostsNew parents to look for an object router and when it
  //finds, it assigns it to be available to this class
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    //this method returns a promise, so we can chain a success callback
    this.props.createPost(props)
      .then(() => {
        //blog post has been created, navigate to index
        this.context.router.push('/');
      })
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

//way to create a function another way
const validate = values => {
  const errors = {};
  if(!values.title){
    errors.title = 'Enter a title';
  }
  if(!values.categories){
    errors.categories = 'Enter category';
  }
  if(!values.content) {
    errors.content = 'Enter content';
  }
  return errors;
}

export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
