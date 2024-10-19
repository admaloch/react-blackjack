const GameSessionsModel = require("../models/GameSessions");

// @desc Get all gameSessions
// @route GET /gameSessions
// @access Public
const getAllGameSessions = async (req, res) => {
  try {
    // Fetch all game sessions from the database
    const gameSessions = await GameSessionsModel.find().lean();

    // Check if any game sessions were found
    if (!gameSessions?.length) {
      return res.status(404).json({ message: "No game sessions found" });
    }

    // Send the found game sessions as the response
    res.status(200).json(gameSessions);
  } catch (error) {
    // Error handling
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Get gameSession by ID
// @route GET /gameSessions/:id
// @access Public
const getGameSessionById = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the game session by ID
    const gameSession = await GameSessionsModel.findById(id).lean();

    // Check if the game session exists
    if (!gameSession) {
      return res.status(404).json({ message: "Game session not found" });
    }

    // Send the found game session as the response
    res.status(200).json(gameSession);
  } catch (error) {
    // Handle server errors
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc create new gameSession
// @route POST /gameSessions
// @access Public
const createGameSession = async (req, res) => {
  const { gameSessionData } = req.body;
  console.log(gameSessionData)

  // Check if game session data is provided
  if (!gameSessionData) {
    return res.status(400).json({ message: "Game session data is required" });
  }

  try {
    // Create the new game session
    const gameSession = await GameSessionsModel.create(gameSessionData);

    // Check if the creation was successful
    if (!gameSession) {
      return res.status(500).json({ message: "Failed to create game session" });
    }

    // Respond with success and the created game session
    res.status(201).json({
      message: `New session created with ID: ${gameSession.id}`,
      gameSession,
    });
  } catch (error) {
    // Handle any unexpected errors
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc update movie gameSession
// @route PATCH /gameSessions/:id
// @access Private
const updateGameSession = async (req, res) => {
  const { gameSessionData } = req.body;
  const { id } = req.params;

  if (!gameSessionData || !id) {
    return res.status(400).json({
      message: "Game session ID and data are required",
    });
  }

  try {
    // Find the game session by ID
    const gameSession = await GameSessionsModel.findById(id).exec();

    if (!gameSession) {
      return res.status(400).json({ message: "Game session not found" });
    }

    // Update the fields with the new data
    Object.assign(gameSession, gameSessionData);

    // Save the updated session to the database
    const updatedGameSession = await gameSession.save();

    // Send the updated game session as the response
    res.json({
      message: `Game session #${updatedGameSession._id} updated`,
      gameSession: updatedGameSession,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc delete gameSession
// @route DELETE /gameSessions/:id
// @access Private
const deleteGameSession = async (req, res) => {
  const { id } = req.params;

  // Check if the game session ID is provided
  if (!id) {
    return res.status(400).json({ message: "Game session ID is required" });
  }

  try {
    // Find and delete the game session in one step
    const gameSession = await GameSessionsModel.findByIdAndDelete(id);

    // If the game session is not found
    if (!gameSession) {
      return res.status(404).json({ message: "Game session not found" });
    }

    // Success response
    res
      .status(200)
      .json({ message: `Game session ${id} deleted successfully` });
  } catch (error) {
    // Handle any unexpected errors
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllGameSessions,
  getGameSessionById,
  createGameSession,
  updateGameSession,
  deleteGameSession,
};
