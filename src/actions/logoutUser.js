export default function logout() {
    return (dispatch) => {
        fetch(`https://www.api.rileyslayden.com/logout`, {method: "POST", credentials: 'include'})
        .then(res => res.json())
        .then(res => dispatch({type: 'LOGOUT_USER', payload: res}))
    }
}
