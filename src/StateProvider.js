// set up a data layer
// we need this to track the basket

import React, {createContext,useContext,useReducer} from "react" ;

//
export const StateContext=createContext();

//Build Ap Provider

export  const StateProvider=({reducer , initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState,)}>
        {children}

    </StateContext.Provider>


);


export const useStateValue= () => useContext(StateContext);
