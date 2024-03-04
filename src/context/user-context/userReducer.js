import { ADD_USER, DELETE_USER, UPDATE_USER } from "./actionTypes";
import { initialState } from "./initialState";


export const userReducer = (users = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return[...users, action.payload]
        
        //  case DELETE_USER:
        //     return;
        
        
        //  case UPDATE_USER:
        //     return;
            
            
    
        default:
            return users;
    }
};