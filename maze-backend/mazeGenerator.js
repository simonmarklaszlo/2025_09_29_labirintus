//maze generator backenden
class MazeGenerator {
    constructor(rows, cols) {
        // mindig páratlan legyen
        if (rows % 2 === 0) rows++;
        if (cols % 2 === 0) cols++;

        this.rows = rows;
        this.cols = cols;
        this.maze = Array.from({ length: rows }, () => Array(cols).fill(1)); // 1 = fal
    }

    generate() {
        this.carve(1, 1);

        return {
            rows: this.rows,
            cols: this.cols,
            maze: this.maze,
            start: [1, 1],
            end: [this.rows - 2, this.cols - 2]
        };
    }

    carve(r, c) {
        this.maze[r][c] = 0; // 0 = járat
        const dirs = [
            [0, 2],
            [0, -2],
            [2, 0],
            [-2, 0]
        ].sort(() => Math.random() - 0.5);

        for (let [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (
                nr > 0 && nr < this.rows - 1 &&
                nc > 0 && nc < this.cols - 1 &&
                this.maze[nr][nc] === 1
            ) {
                this.maze[r + dr / 2][c + dc / 2] = 0;
                this.carve(nr, nc);
            }
        }
    }
}

module.exports = MazeGenerator;
