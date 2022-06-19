import { Application } from "express";
import { createPlayer } from "./controllers/player.controller";

export const routes=(app:Application)=>{
    app.post("/players",createPlayer);
        
    };
    