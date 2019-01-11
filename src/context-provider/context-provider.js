import React, { useReducer, createContext } from "react";
import mainReducer, { initialState } from '../store/reducer';


const MainContext = createContext();

function MainContextProvider(props) {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const value = { state, dispatch };
  return (
    <MainContext.Provider value={value}>{props.children}</MainContext.Provider>
  );
};

export { MainContext, MainContextProvider };
