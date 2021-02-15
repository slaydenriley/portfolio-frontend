export default function fetchTags() {
  return (dispatch) => {
    dispatch({ type: 'START_FETCH_TAGS' });
    fetch('https://slayden-frontend.herokuapp.com//tags')
    .then(resp => resp.json())
    .then(tags => dispatch({
      type: 'FETCH_TAGS',
      payload: tags
    }))
  }
}
