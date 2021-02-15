export default function fetchUsers(action) {
  return (dispatch) => {
    fetch('https://riley-portfolio-api.herokuapp.com/users')
    .then(resp => resp.json())
    .then(users => dispatch({
      type: 'FETCH_USERS',
      payload: users
    }))
  }
}
