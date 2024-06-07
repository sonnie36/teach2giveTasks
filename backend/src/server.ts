import express, { json, NextFunction, Request, Response } from 'express';
import note_router from './route/note.route';

const app = express();
app.use(json());
app.use('/note',note_router);

app.use((err:Error, req:Request, res:Response,next:NextFunction)=>{
    res.json({
        message:err.message
    });

})

let PORT =5203;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`);
})