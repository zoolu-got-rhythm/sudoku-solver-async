# Sudoku Solver Asynchronous

a proper sudoku solver where the input has to be 9x9 and with a minimum of 17 clues, uses a brute force recursive backtracking algorithm. the function api has a 2nd optional parameter that allows you to 'hook' into each step in the callstack as the algorithm is executing in 'realtime', this is great for writing visualisations or other apps.

<img alt="screenshot of solved sudoku puzzle input" src="./realtime-console-visualisation.gif" width="280px"/>

# usage

## basic usage

```TypeScript
// sudoku puzzle input as a 2d array (can also be a 1d array)
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
  // function api usage
  const solvedSudoku: number[][] = await solveProperSudokuAsync(puzzleInput2dArr);
})();
```

## example usage to write a visualisation (in the console) of a suduko puzzle being solved in realtime

```TypeScript
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

# projects that use this package

## sudoku solver async realtime visualisation web app

- [sudoku solver async realtime visualisation web app (live link)](https://sudokusolverasyncvisualisation.netlify.app/)
- github repository [https://github.com/zoolu-got-rhythm/sudoku-solver-async-visualisation](https://github.com/zoolu-got-rhythm/sudoku-solver-async-visualisation)

If you end up writing any apps/visualisations that use this package, or find the package useful in any way would <3 to see or hear about it @ christopher.pkm@gmail.com and am happy to link it here. Happy Coding :)
