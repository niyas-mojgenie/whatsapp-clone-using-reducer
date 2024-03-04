import { createContext, useReducer } from "react";
import { userReducer } from "./userReducer";
import { initialState } from "./initialState";

const UsersContext = createContext({});

export const UsersDataProvider = ({ childern }) => {
    const [users, dispatch] = useReducer(userReducer, initialState);

    return (
        <UsersContext.Provider value={{ users, dispatch }}>
            {childern}
        </UsersContext.Provider>
    );
};

export default UsersContext;
