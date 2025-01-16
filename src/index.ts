import { solveProperSudokuAsync } from "./sudokuSolverAsync";

const puzzleInput2dArr: number[][] = [
  [9, 1, 5, -1, -1, 3, 4, -1, 6],
  [-1, -1, -1, 1, -1, 2, -1, 8, 9],
  [-1, 6, -1, -1, -1, 4, 7, -1, 3],

  [-1, -1, -1, 3, 1, -1, -1, 9, -1],
  [5, -1, 8, -1, 4, -1, -1, 3, 2],
  [3, 4, 1, 8, -1, -1, -1, 5, -1],

  [-1, -1, -1, 4, 9, 6, -1, -1, -1],
  [2, 7, -1, -1, -1, -1, 9, -1, -1],
  [4, -1, 9, -1, -1, 1, 3, -1, 5],
];

const puzzleInput2dArrEvil: number[][] = [
  [-1, -1, -1, 3, -1, -1, 5, 4, -1],
  [-1, -1, -1, 5, -1, 6, -1, -1, -1],
  [-1, 1, -1, -1, -1, -1, -1, -1, -1],

  [-1, -1, -1, -1, 2, -1, -1, 1, 9],
  [8, -1, -1, 7, -1, -1, -1, -1, -1],
  [3, -1, -1, -1, -1, -1, -1, -1, -1],

  [-1, 6, -1, -1, 1, 9, -1, -1, -1],
  [5, -1, -1, -1, -1, -1, 3, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
];

const puzzleInput1dArr: number[] = [
  9, 1, 5, -1, -1, 3, 4, -1, 6, -1, -1, -1, 1, -1, 2, -1, 8, 9, -1, 6, -1, -1,
  -1, 4, 7, -1, 3,

  -1, -1, -1, 3, 1, -1, -1, 9, -1, 5, -1, 8, -1, 4, -1, -1, 3, 2, 3, 4, 1, 8,
  -1, -1, -1, 5, -1,

  -1, -1, -1, 4, 9, 6, -1, -1, -1, 2, 7, -1, -1, -1, -1, 9, -1, -1, 4, -1, 9,
  -1, -1, 1, 3, -1, 5,
];

(async () => {
  console.log("sudoku puzzle input");
  const formattedPuzzleInputAsString = puzzleInput2dArr
    .map((row) => row.map((cell) => (cell === -1 ? " " : cell)).join(" "))
    .join("\n");
  console.log(formattedPuzzleInputAsString);

  console.log("\n");

  const solvedSudoku = await solveProperSudokuAsync(puzzleInput2dArr, {
    onFunctionExecutingInCallStack: (x, y, arr2d) => {
      console.clear();
      console.log(`call stack n: ${y * 9 + x}, x: ${x}, y: ${y}`);
      const formattedResultAsString = arr2d
        .map((row) => row.map((cell) => (cell === -1 ? " " : cell)).join(" "))
        .join("\n");
      console.log(formattedResultAsString);
    },
    delayBetweenEachStepInCallStackInMillisecs: 1000 / 20,
  });

  console.log("solved sudoku puzzle");
  const formattedResultAsString = solvedSudoku
    ?.map((row) => row.join(" "))
    .join("\n");
  console.log(formattedResultAsString);
})();
