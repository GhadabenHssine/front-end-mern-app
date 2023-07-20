const UsersReducer = (state, action) => {
    switch (action.type) {
        case "GET_USERS_Start":
            return { users: [], isFetching: true, error: false }
        case "GET_USERS_SUCCESS":
            return { users: action.payload, isFetching: false, error: false }
        case "GET_USERS_FAILURE":
            return { users: [], isFetching: false, error: true }

        case "CREATE_USER_Start":
            return { ...state, isFetching: true, error: false }
        case "CREATE_USER_SUCCESS":
            return { users: [...state.users, action.payload], isFetching: false, error: false }
        case "CREATE_USER_FAILURE":
            return { ...state, isFetching: false, error: true }

        case "DELETE_USER_Start":
            return { ...state, isFetching: true, error: false }
        case "DELETE_USER_SUCCESS":
            return { users: state.users.filter((user) => user !== action.payload), isFetching: false, error: false }
        case "DELETE_USER_FAILURE":
            return { ...state, isFetching: false, error: true }

        case "EDIT_USER_Start":
            return { ...state, isFetching: true, error: false }
        case "EDIT_USER_SUCCESS":
            return { ...state, isFetching: false, edit: action.payload }
        case "EDIT_USER_FAILURE":
            return { ...state, isFetching: false, error: true }
        default:
            return { ...state }
    }

}

export default UsersReducer