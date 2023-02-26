import React, {useState} from 'react';
import MainLayout from "@/layout/mainLayout";
import {Container} from "@mui/system";
import StepWrapper from "@/components/stepWrapper";
import {Button, Grid, TextField} from "@mui/material";
import FileUpload from "@/components/fileUpload";




const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)
    const next = () => {
        if (activeStep !== 2){
            setActiveStep(prev => prev + 1)
        }
    }
    const back = () => {
        setActiveStep(prev => prev - 1)
    }
    return (
       <>
           <MainLayout>
               <Container>
                   <StepWrapper activeStep={activeStep}>
                       {activeStep === 0 &&
                       <Grid direction={'column'}
                           style={{padding:30}}
                           container>
                           <TextField
                               style={{marginTop:20}}
                           label={'Enter track name'}
                           />
                           <TextField
                               style={{marginTop:20}}
                               label={'Enter track artist'}
                           />
                           <TextField
                               style={{marginTop:20}}
                               label={'Enter track text'}
                               multiline
                               rows={4}
                           />
                       </Grid>
                       }
                       {activeStep === 1 &&
                           <FileUpload setFile={setPicture} accept={"image/*"}>
                               <Grid container
                                     justifyContent={'center'}
                                     style={{marginTop:100}}
                               >
                                   <Button> DownLoad Image</Button>
                               </Grid>
                           </FileUpload>
                       }
                       {activeStep === 2 &&
                           <FileUpload setFile={setAudio} accept={"audio/*"}>
                               <Grid container
                               justifyContent={'center'}
                                     style={{marginTop:100}}
                               >
                                   <Button> DownLoad Audio</Button>
                               </Grid>
                           </FileUpload>
                       }
                   </StepWrapper>
                   <Grid
                       justifyContent={'space-between'}
                       container>
                       <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                       <Button onClick={next}>Continue</Button>

                   </Grid>
               </Container>
           </MainLayout>

       </>
    );
};

export default Create;