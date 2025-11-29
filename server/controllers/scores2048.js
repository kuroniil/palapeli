const router = require("express").Router();
const Score2048 = require("../models/score2048");

Score2048.sync();

router.get("/", async (request, response) => {
  const scores = await Score2048.findAll();
  scores.sort((first, second) => second.score - first.score);
  response.json(scores);
});

router.post("/", async (request, response) => {
  try {
    const score = await Score2048.create(request.body);
    response.json(score);
  } catch (error) {
    return response.status(400).json({ error });
  }
});

module.exports = router;
