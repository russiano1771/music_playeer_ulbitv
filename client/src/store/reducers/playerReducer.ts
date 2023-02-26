import {PlayerActionTypes, PlayerState} from "@/type/player";
import {PlayerAction} from "@/type/player";


const initialState: PlayerState = {
    active: null,
    pause: true,
    duration: 0,
    currentTime: 0,
    volume: 0
}

export const PlayerReducer =
    (state = initialState, action: PlayerAction) : PlayerState => {
        switch (action.type){
            case PlayerActionTypes.SET_VOLUME:
                return {...state, volume: action.payload}
            case PlayerActionTypes.SET_DURATION:
                return {...state, duration: action.payload}
            case PlayerActionTypes.SET_CURRENT_TIME:
                return {...state, currentTime: action.payload}
            case PlayerActionTypes.PLAY:
                return {...state, pause: false}
            case PlayerActionTypes.SET_ACTIVE:
                return {...state, active: action.payload, currentTime: 0, duration: 0}
            case PlayerActionTypes.PAUSE:
                return {...state, pause:true}

            default: return state
        }
    }