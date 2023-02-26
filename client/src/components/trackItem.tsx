import React from 'react';
import {Itrack} from "@/type/create";
import {Card, Grid} from "@mui/material";
import styles from '../styles/track.module.scss'
import IconButton from "@mui/material/IconButton";
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import {useRouter} from "next/router";
interface TrackItemProps{
    track: Itrack[];
    active?: boolean
}


const TrackItem:React.FC<TrackItemProps> = ({track, active= false}) => {
    const router = useRouter()
    return (
        <Card
            onClick={() => router.push('/track/' + track._id)}
        className={styles.track}
        >
            <IconButton>
                {active?
                <Pause/>
                    :
                    <PlayArrow/>
                }
            </IconButton>
            <img width={70} height={70} src={track.picture}/>
            <Grid style={{width: 200, margin: '0 20px'}}
                direction={'column'}
                container>
                <div>{track.name}</div>
                <div style={{color: "rgba(0, 0, 0 0.5)"}}>{track.artist}</div>
            </Grid>
            <IconButton
            style={{marginLeft:"auto"}}
            >
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;