"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const player_controller_1 = require("./controllers/player.controller");
const routes = (app) => {
    app.post("/players", player_controller_1.createPlayer);
};
exports.routes = routes;
