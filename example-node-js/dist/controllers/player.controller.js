"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrivePlayer = exports.listPlayers = exports.createPlayer = void 0;
const player_model_1 = require("../models/player.model");
const createPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { dateOfBirth, placeOfBirth, name, heigth, tshirt } = req.body;
        const response = yield new PlayerController().create({ dateOfBirth, placeOfBirth, name, heigth, tshirt });
        return res.status(201).json(response);
    }
    catch (err) {
        const responseError = {
            message: "ERROR TO CREATE PLAYER",
            status: 500,
            content: err
        };
        return res.status(500).json(responseError);
    }
});
exports.createPlayer = createPlayer;
const listPlayers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield new PlayerController().list();
        return res.status(200).json(response);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.listPlayers = listPlayers;
const retrivePlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docId = req.params.id;
        const response = yield new PlayerController().retrive(docId);
        return res.status(200).json(response);
    }
    catch (err) {
        const responseError = {
            message: "ERROR ON RETRIVE PLAYER",
            status: 500,
            content: err
        };
        return res.status(500).json(responseError);
    }
});
exports.retrivePlayer = retrivePlayer;
class PlayerController {
    create(playerContent) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = new player_model_1.Player(playerContent);
            yield player.save(); //base de datos mongo 
            return {
                message: "SUCCES:PLAYER ADDED TO DATABASE",
                status: 201,
                content: player
            };
        });
    }
    ;
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield player_model_1.Player.find({});
            return {
                message: "Succes:ALL PLAYERS",
                status: 200,
                content: data
            };
        });
    }
    retrive(docId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield player_model_1.Player.find({ _id: docId });
            return {
                message: "SUCCES:PLAYER RETRIVE",
                status: 200,
                content: data
            };
        });
    }
}
