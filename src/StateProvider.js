// set up the data layer
// to track the order in the basket.

import React, { createContext, useContext, useReducer } from "react";

//this is data layer.
export const StateContext = createContext();

//build a provider.
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//this is how we use inside a component.
export const useStateValue = () => useContext(StateContext);
