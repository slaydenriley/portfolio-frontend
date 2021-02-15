export default function updateUser(formData) {
    return (dispatch) => {
        dispatch({ type: 'START_UPDATE_USER' });
        fetch(`https://slayden-frontend.herokuapp.com//users/${formData.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(users => dispatch({
          type: 'UPDATE_USER',
          payload: users
        }))
      }
    }
