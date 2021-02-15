export default function userReducer(state = { users: [], requesting: false}, action) {
  switch(action.type) {
    case 'FETCH_USERS':
      return {
        users: action.payload,
      }

    case 'START_UPDATE_USER':
      return {
        ...state,
        requesting: true
      }

    case 'UPDATE_USER':
      return {
        users: action.payload,
        requesting: false
      }

     default:
      return state
  }
}
