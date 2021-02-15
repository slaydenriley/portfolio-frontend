export default function signupUser(formData) {
    return (dispatch) => {
        dispatch({ type: 'START_SIGNUP' });
        fetch(`https://riley-portfolio-api.herokuapp.com/signup`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData),
            credentials: 'include'
        })
        .then(res => res.json())
        .then(res => dispatch({type: 'SIGNUP_USER', payload: res}))
    }
}
