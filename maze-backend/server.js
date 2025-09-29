const express = require("express");
const cors = require("cors");
const MazeGenerator = require("./mazeGenerator");

const app = express();
app.use(cors());

app.get("/maze", (req, res) => {
    let rows = parseInt(req.query.rows) || 21;
    let cols = parseInt(req.query.cols) || 21;

    const mazeGen = new MazeGenerator(rows, cols);
    const maze = mazeGen.generate();

    res.json(maze);
});

// Környezeti változó használata (fontos production-höz!)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Maze API running on port ${PORT}`));