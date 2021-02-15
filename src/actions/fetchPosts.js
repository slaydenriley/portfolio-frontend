export default function fetchPosts() {
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_POSTS' });
    fetch('https://slayden-frontend.herokuapp.com//posts')
    .then(resp => resp.json())
    .then(posts => dispatch({
      type: 'FETCH_POSTS',
      payload: posts
    }))
  }
}
