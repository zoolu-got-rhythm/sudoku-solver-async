# Sudoku Solver Asynchronous (TypeScript)
a proper sudoku solver where the input has to be 9x9 and with a minimum of 17 clues, uses a recursive backtracking algorithm. 

![screenshot of solved sudoku puzzle input](./solved-sudoku-puzzle-screenshot.png)

# example usage to write a realtime visualisation (in the console) of a suduko puzzle being solved 

``` TypeScript
// sudoku puzzle input as a 2d array (can also be as a 1d array)
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

(async () => {
  console.log("sudoku puzzle input");

  const formattedPuzzleInputAsString = puzzleInput2dArr
    .map((row) => row.map((cell) => (cell === -1 ? " " : cell)).join(" "))
    .join("\n");
  console.log(formattedPuzzleInputAsString);

  console.log("\n");
  
  // function api usage
  const solvedSudoku = await solveProperSudokuAsync(puzzleInput2dArr, {
    // 'hook' into each function call in the recursive call stack
    onFunctionExecutingInCallStack: (x, y, arr2d) => {

      // visualisation code start
      console.clear();
      console.log(`call stack n: ${y * 9 + x}, x: ${x}, y: ${y}`);
      const formattedResultAsString = arr2d
        .map((row) => row.map((cell) => (cell === -1 ? " " : cell)).join(" "))
        .join("\n");
      console.log(formattedResultAsString);
      // visualisation code end

    },

    // update/draw 10 times per second (will wait 1/10 of a second until calling next function in recursive algorithm)
    delayBetweenEachStepInCallStackInMillisecs: 1000 / 10, 
  });

  // print result
  console.log("solved sudoku puzzle");
  const formattedResultAsString = solvedSudoku
    ?.map((row) => row.join(" "))
    .join("\n");
  console.log(formattedResultAsString);
})();
```

# API Documentation 
## Function: solveProperSudokuAsync()

> **solveProperSudokuAsync**(`puzzleInput`, `callStackStep`?): `Promise`\<`number`[][]\>

Defined in: [sudokuSolver.ts:227](https://github.com/zoolu-got-rhythm/sudoku-solver-ts/blob/ab3a63f30406e385e3d868fb3c933a955c6268e8/src/sudokuSolver.ts#L227)

Solves a proper sudoku puzzle (9x9 with a minimum of 17 clues) with a recursive backtracking algorithm

### Parameters

#### puzzleInput

a 9x9 2d array of numbers where -1 represents an empty cell

`number`[] | `number`[][]

#### callStackStep?

[`CallStackStep`](./docs/type-aliases/CallStackStep.md)

### Returns

`Promise`\<`number`[][]\>

a 9x9 2d array of numbers representing the solved sudoku puzzle
