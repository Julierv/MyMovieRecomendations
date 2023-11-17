const express = require('express');
const router = express.Router();
const databaseModule = require('../modules/database');

router.get('/getRecomendations', async (req, res) => {
  try {
    const recomendations = await databaseModule.getRecomendations();
    res.json(recomendations);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/getRandomItems', async (req, res) => {
  try {
    const randomItems = await databaseModule.getRandomItems();
    res.json(randomItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;