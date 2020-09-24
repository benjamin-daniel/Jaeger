import React, {createContext, useReducer} from 'react';

const initialState = {
  isLoading: true,
  authenticated: false,
};
const store = createContext(initialState);
const {Provider} = store;

const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return {
          ...prevState,
          authenticated: true,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          authenticated: false,
        };
    }
  }, initialState);
  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export {store, StateProvider};
