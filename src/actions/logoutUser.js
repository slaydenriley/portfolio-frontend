export default function logout() {
    return (dispatch) => {
        fetch(`http://www.api.rileyslayden.com/logout`, {method: "POST", credentials: 'include'})
        .then(res => res.json())
        .then(res => dispatch({type: 'LOGOUT_USER', payload: res}))
    }
}
