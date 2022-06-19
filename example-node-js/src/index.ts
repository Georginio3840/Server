import { routes } from './router';
import express from "express";
import { connectToMongodb } from './database';
import { PORT } from './config';

//Setting

const main= async()=>{
    await connectToMongodb();
    const server=express();
    server.use(express.json());
    routes (server);
    server.listen(PORT,()=>{
        console.log('Server on port '+PORT);
    });
}
main();