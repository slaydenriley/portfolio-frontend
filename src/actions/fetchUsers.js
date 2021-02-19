export default function fetchUsers(action) {
  return (dispatch) => {
    fetch('https://www.api.rileyslayden.com/users')
    .then(resp => resp.json())
    .then(users => dispatch({
      type: 'FETCH_USERS',
      payload: users
    }))
  }
}
