import { Application } from "express";
import { createPlayer, listPlayers, retrivePlayer } from './controllers/player.controller';

export const routes=(app:Application)=>{
    app.post("/players",createPlayer);
    app.get("/players",listPlayers);
    app.get("/players/:id",retrivePlayer);
    };
    