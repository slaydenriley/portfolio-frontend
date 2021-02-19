export default function fetchPosts() {
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_POSTS' });
    fetch('http://www.api.rileyslayden.com/posts')
    .then(resp => resp.json())
    .then(posts => dispatch({
      type: 'FETCH_POSTS',
      payload: posts
    }))
  }
}
