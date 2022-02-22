import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
// import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    greetings: []
};

function rootReducer(state, action) {
    // console.log(action.type);
    switch (action.type) {
      case "GET_GREETINGS_SUCCESS":
        return { 
            greetings: action.json.greetings 
        };
        default:
        return state;
    }
}

export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
    return store;
}