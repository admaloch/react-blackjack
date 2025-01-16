const express = require("express");
const router = express.Router();
const gameSessionsController = require("../controllers/gameSessionsController");
//  /gameSessions
router
  .route("/")
  .get(gameSessionsController.getAllGameSessions)
  .post(gameSessionsController.createGameSession);
//  /gameSessions/:id
router
  .route("/:id")
  .get(gameSessionsController.getGameSessionById)
  .patch(gameSessionsController.updateGameSession)
  .delete(gameSessionsController.deleteGameSession);

module.exports = router;
