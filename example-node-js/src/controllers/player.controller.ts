import { IPlayer, Player } from '../models/player.model';
import { IResponse } from '../models/response.controller';
import { Request,Response } from 'express';


export const createPlayer= async (req:Request,res:Response)=>{
try{
    const {dateOfBirth,placeOfBirth,name, heigth,tshirt}:IPlayer =req.body;
    const response= await new PlayerController().create({dateOfBirth,placeOfBirth,name, heigth,tshirt});
    return res.status(201).json(response);
}catch(err){
    const responseError :IResponse={
        message: "ERROR TO CREATE PLAYER",
        status:500,
        content:err

    };
    return res.status(500).json(responseError);
}
}

export const listPlayers=async(req:Request,res:Response)=>{
    try{
     const response= await new PlayerController().list();
        return res.status(200).json(response);
    }catch(err){
        return res.status(500).json(err);
    }
}

export const  retrivePlayer = async (req:Request,res:Response)=>{
    try{
    const docId:String=req.params.id;
    const response=await new PlayerController().retrive(docId);
        return res.status(200).json(response);
    }
    catch (err){
        const responseError:IResponse={
            message:"ERROR ON RETRIVE PLAYER",
            status:500,
            content:err
        };
        return res.status(500).json(responseError);
    }
    
}

class PlayerController{
    public async create(playerContent:IPlayer): Promise <IResponse>{
        const player = new Player (playerContent);
        await player.save(); //base de datos mongo 
        return{
            message:"SUCCES:PLAYER ADDED TO DATABASE",
            status:201,
            content: player
        }
    };
    public async list(): Promise<IResponse> {
        const data=await Player.find({});
        return{
            message:"Succes:ALL PLAYERS",
            status:200,
            content:data
        }
    }
    public async retrive(docId:String):Promise<IResponse>{
        const data=await Player.find({_id:docId});
        return{
            message:"SUCCES:PLAYER RETRIVE",
            status:200,
            content: data
        };
    }


}