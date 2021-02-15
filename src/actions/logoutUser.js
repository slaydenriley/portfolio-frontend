export default function logout() {
    return (dispatch) => {
        fetch(`https://slayden-frontend.herokuapp.com//logout`, {method: "POST", credentials: 'include'})
        .then(res => res.json())
        .then(res => dispatch({type: 'LOGOUT_USER', payload: res}))
    }
}
