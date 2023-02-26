import React from 'react';
import {Itrack} from "@/type/create";
import {Box, Grid} from "@mui/material";
import TrackItem from "@/components/trackItem";


interface TrackListProps{
    track: Itrack[]
}
const TrackList:React.FC<TrackListProps> = ({track}) => {
    return (
        <Grid direction={'column'}
        container
        >
            <Box p={5}>
                {track.map( track =>
                <TrackItem
                    track={track}
                key={track._id}
                />
                )}
            </Box>
        </Grid>
    );
};

export default TrackList;