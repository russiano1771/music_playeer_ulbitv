import {combineReducers} from "redux";
import {PlayerReducer} from "./playerReducer";
import {HYDRATE} from "next-redux-wrapper";



const rootReducer = combineReducers({
    player: PlayerReducer
})
export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        if (state.count) nextState.count = state.count; // preserve count value on client side navigation
        return nextState;
    } else {
        return rootReducer(state, action);
    }
};
export type RootState = ReturnType<typeof rootReducer>