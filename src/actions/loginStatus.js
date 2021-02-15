export default function loginStatus() {
  return (dispatch) => {
    fetch('https://slayden-frontend.herokuapp.com//logged_in', {
      method: 'GET',
      credentials: 'include'})
      .then(res => res.json())
      .then(res => dispatch({type: 'LOGIN_STATUS', payload: res}))
    }
}

//dispatch({type: 'LOGIN_USER', payload: user})
