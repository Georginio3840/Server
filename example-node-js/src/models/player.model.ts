import { Schema,model } from "mongoose";
//Interface
export interface IPlayer{
    dateOfBirth: null |Date;
    placeOfBirth: null|string;
    name:         string;
    heigth: number|null;
    tshirt: number;
}
//schema
const playerSchema= new Schema<IPlayer>({
    dateOfBirth:{type:Date},
    placeOfBirth:{type:String},
    name:       {type: String},
    heigth:     {type:Number},
    tshirt:     {type:Number}

});
const Player=model<IPlayer>('Player',playerSchema);
export{Player}