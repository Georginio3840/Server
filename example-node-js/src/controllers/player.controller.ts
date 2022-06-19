import { IPlayer, Player } from '../models/player.model';
import { IResponse } from '../models/response.controller';
import { Request,Response } from 'express';


export const createPlayer= async (req:Request,res:Response)=>{
try{
    const {dateOfBirth,placeOfBirth,name, heigth,tshirt}:IPlayer =req.body;
    const response= await new PlayerCOntroller().create({dateOfBirth,placeOfBirth,name, heigth,tshirt});
    return res.status(201).json(response);
}catch(err){
    return res.status(500).json(err);
}
}
class PlayerCOntroller{
    public async create(playerContent:IPlayer): Promise <IResponse>{
        const player = new Player (playerContent);
        await player.save(); //base de datos mongo 
        return{
            message:"SUCCES:PLAYER ADDED TO DATABASE",
            status:201,
            content: player
        }
    };
}