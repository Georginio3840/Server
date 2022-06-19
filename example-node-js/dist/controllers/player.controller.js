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
exports.createPlayer = void 0;
const player_model_1 = require("../models/player.model");
const createPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { dateOfBirth, placeOfBirth, name, heigth, tshirt } = req.body;
        const response = yield new PlayerCOntroller().create({ dateOfBirth, placeOfBirth, name, heigth, tshirt });
        return res.status(201).json(response);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.createPlayer = createPlayer;
class PlayerCOntroller {
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
}
