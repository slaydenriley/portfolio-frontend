export default function fetchTags() {
  return (dispatch) => {
    dispatch({ type: 'START_FETCH_TAGS' });
    fetch('http://www.api.rileyslayden.com/tags')
    .then(resp => resp.json())
    .then(tags => dispatch({
      type: 'FETCH_TAGS',
      payload: tags
    }))
  }
}
