export default function postReducer(state = { posts: [], requesting: true}, action) {
  switch(action.type) {
    case 'START_FETCHING_POSTS':
      return {
        requesting: true
      }

    case 'FETCH_POSTS':
      return {
        posts: action.payload,
        requesting: false
      }

    case 'START_DELETING_POST':
      return {
        requesting: true
      }

    case 'DELETE_POST':
      return {
        requesting: false,
        posts: action.payload
      }

    default:
      return state
  }
}
