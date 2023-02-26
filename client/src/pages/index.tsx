import React from 'react';
import MainLayout from "@/layout/mainLayout";

const Index = () => {
    return (
        <>
           <MainLayout>
               <div className={'center'}>
                   <h1>Welcome, Bro</h1>
                   <h1>$MUSIC 420, place for your Enjoy!</h1>
               </div>
           </MainLayout>
            <style jsx>
                {`
                
                .center{
                margin-top: 150px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                }
                `}
            </style>
        </>
    );
};

export default Index;