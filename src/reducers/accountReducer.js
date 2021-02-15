export default function accountReducer(state = {logged_in: false, errors: null, requesting: false, admin: false }, action) {
  switch(action.type) {
    case 'FETCH_ACCOUNT':
      return action.payload

    case "START_LOGIN":
      return {
        requesting: true
      }

    case "LOGIN_USER":
      return {
        user: action.payload.user,
        logged_in: action.payload.logged_in,
        errors: action.payload.errors,
        requesting: false,
        admin: action.payload.admin
      }

    case "START_SIGNUP":
      return {
        requesting: true
      }

    case "SIGNUP_USER":
      return {
        user: action.payload.user,
        logged_in: action.payload.logged_in,
        errors: action.payload.errors,
        requesting: false,
        admin: action.payload.admin
      }

    case "LOGOUT_USER":
      return {
        account: [],
        logged_in: false
      }

    case "LOGIN_STATUS":
      return {
        user: action.payload.user,
        logged_in: action.payload.logged_in,
        admin: action.payload.admin
      }

    case "START_UPDATE_ACCOUNT":
      return {
        ...state,
        requesting: true
      }

    case "UPDATE_ACCOUNT":
      return {
        ...state,
        requesting: false
      }

    case "START_DELETING_USER":
      return {
        ...state,
        requesting: true
      }
      
    default:
      return state
  }
}
