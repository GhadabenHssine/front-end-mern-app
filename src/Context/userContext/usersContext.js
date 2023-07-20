

import { createContext, useReducer } from "react"
import UsersReducer from "./usersReducer";

const INISIAL_State = {
    users: [],
    isFetching: false,
    error: false,
    edit: ""

}
export const UsersContext = createContext(INISIAL_State)
export const UsersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UsersReducer, INISIAL_State)

    return (
        <UsersContext.Provider
            value={{
                users: state.users,
                isFetching: state.isFetching,
                error: state.error, dispatch
            }}>{children}</UsersContext.Provider>
    )
}