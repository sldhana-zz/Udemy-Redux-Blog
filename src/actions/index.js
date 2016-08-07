import axios from 'axios';
import * as ACTIONS from './action_dictionary';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY= '?key=1234dhana5678';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: ACTIONS.FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
  return {
    type: ACTIONS.CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: ACTIONS.FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: ACTIONS.DELETE_POST,
    payload: request
  };
}
