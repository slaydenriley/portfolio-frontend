export default function deleteTag(tag) {
    return (dispatch) => {
        dispatch({ type: 'START_DELETING_TAG' });
        fetch(`https://slayden-frontend.herokuapp.com//tags`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE',
            credentials: 'include',
            body: JSON.stringify(tag)
        })
        .then(res => res.json())
        .then(res => dispatch({
          type: 'FETCH_TAGS',
          payload: res
        }))
    }
}
