export default function singlePostReducer(state = { post: [], requesting: true }, action) {
  switch(action.type) {
    case 'START_FETCHING_POST':
      return {
        ...state,
        requesting: true
      }

    case 'FETCH_SINGLE_POST':
      return {
        post: action.payload,
        requesting: false
      }

    case 'START_POSTING_POST':
      return {
        ...state,
        requesting: true
      }

    case 'POST_POST':
      return {
        post: action.payload,
        requesting: false
      }

    case 'START_EDIT_POST':
      return {
        requesting: true,
      }

    case 'EDIT_POST':
      return {
        requesting: false,
        post: action.payload
      }

    default:
      return state
  }
}
