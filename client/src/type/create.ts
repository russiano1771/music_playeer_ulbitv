
export interface Icomment{
    _id: number;
    username: string;
    text: string;
}

export interface Itrack{
    _id: number;
    name: string;
    text: string;
    artist: string;
    listens: number;
    audio: string;
    picture: string;
    comments: Icomment[]
}