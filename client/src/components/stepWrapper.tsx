import React from 'react';
import {Card, Container, Grid, Step, StepLabel, Stepper} from "@mui/material";

interface StepProps{
    activeStep: number;
}

const steps = ['Info about track', 'DownLoad Image', 'DownLoad Music']
const StepWrapper: React.FC<StepProps> = ({activeStep, children}) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map( (step, index) =>
                <Step>
                    <StepLabel
                    key={index}
                    completed={activeStep > index}
                    >
                        {step}
                    </StepLabel>
                </Step>
                )}
            </Stepper>
            <Grid
                justifyContent={'center'}
                style={{height: 270, margin:'70px 0'}}
                container>
                <Card
                style={{width:600}}
                >
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;