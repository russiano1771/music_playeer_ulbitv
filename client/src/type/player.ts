import {Itrack} from "@/type/create";


export interface PlayerState{
    active: null | Itrack;
    volume: number;
    duration: number;
    currentTime: number;
    pause: boolean
}

export enum PlayerActionTypes{
    PLAY = 'PLAY',
    PAUSE = 'PAUSE',
    SET_ACTIVE = 'SET_ACTIVE',
    SET_DURATION = 'SET_DURATION',
    SET_CURRENT_TIME = 'SET_CURRENT_TIME',
    SET_VOLUME = 'SET_VOLUME'
}

interface playAction{
    type: PlayerActionTypes.PLAY
}
interface pauseAction{
    type: PlayerActionTypes.PAUSE
}
interface SetActiveAction{
    type: PlayerActionTypes.SET_ACTIVE,
    payload: Itrack
}
interface setDurationActive{
    type: PlayerActionTypes.SET_DURATION,
    payload: number
}
interface setCurrentTimeAction{
    type: PlayerActionTypes.SET_CURRENT_TIME,
    payload: number
}
interface setVolumeAction{
    type: PlayerActionTypes.SET_VOLUME,
    payload: number;
}

export type PlayerAction =
    playAction
    | pauseAction
    | SetActiveAction
    | setDurationActive
    | setCurrentTimeAction
    | setVolumeAction
