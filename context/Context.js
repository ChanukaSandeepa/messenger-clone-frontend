import React, { createContext, useContext, useReducer } from 'react';
import reducer,{ initialState } from './reducer'

const Context = createContext()

const AppContext = ({children}) => {
    return (
        <Context.Provider value={useReducer(reducer, initialState)}>
            {children}
        </Context.Provider>
    )
}

export default AppContext
export const useAppContext = () => useContext(Context)