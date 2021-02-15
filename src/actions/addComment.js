export default function addComment(formData) {
    return (dispatch) => {
        dispatch({ type: 'START_FETCHING_POST' });
        fetch(`https://riley-portfolio-api.herokuapp.com/posts/${formData.post_id}/comments`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(post => dispatch({
          type: 'FETCH_SINGLE_POST',
          payload: post
        }))
    }
}
