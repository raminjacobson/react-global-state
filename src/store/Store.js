import React, { createContext, useReducer } from "react";
import { Reducer, ReducerType } from './Reducer'

const initialState = {
    posts: [],
    error: null
};

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

const Context = createContext(initialState);

export { Context, ReducerType };
export default Store;