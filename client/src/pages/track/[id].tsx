import React from 'react';
import MainLayout from "@/layout/mainLayout";
import {Container} from "@mui/system";
import {Button, Grid, TextField} from "@mui/material";
import {Itrack} from "@/type/create";
import {useRouter} from "next/router";

const TrackPage = () => {
    const track: Itrack[] = {_id: 1, name: 'Горький вкус', artist: 'Султан Лагучев', text:'text..........', listens:64546, audio:'', picture:'data:image/jpeg;base64,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', comments:[]}
    const router = useRouter()
    return (
       <>
       <MainLayout>
           <Container
           style={{margin: '40px 100px'}}
           >
               <Button
                   onClick={() => router.push('/track')}
                   variant={'outlined'}
               style={{fontSize:30}}
               >To List Track</Button>
               <Grid
                   style={{margin: '40px 100px'}}
                   container>
                   <img width={270} height={270} src={track.picture}/>
                   <div
                   style={{marginLeft:50}}
                   >
                       <h1>Track Name - {track.name}</h1>
                       <h1>Track Artist - {track.artist}</h1>
                       <h2>Listens - {track.listens}</h2>
                   </div>
               </Grid>
               <hr
                   style={{margin:100}}
               />
               <h1>Text Track:</h1>
               <p>{track.text}</p>
               <Grid container>
                   <h1>Comments</h1>
                   <TextField
                   label={'Enter your username'}
                   fullWidth
                   />
                   <TextField
                       label={'Enter your username'}
                       fullWidth
                       multiline
                       rows={10}
                   />
                   <Button>Send Comment</Button>
               </Grid>
           </Container>
       </MainLayout>
       </>
    );
};

    export default TrackPage;