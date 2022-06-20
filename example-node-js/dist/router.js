"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const player_controller_1 = require("./controllers/player.controller");
const routes = (app) => {
    app.post("/players", player_controller_1.createPlayer);
    app.get("/players", player_controller_1.listPlayers);
    app.get("/players/:id", player_controller_1.retrivePlayer);
};
exports.routes = routes;
