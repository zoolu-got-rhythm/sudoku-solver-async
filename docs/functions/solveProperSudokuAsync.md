[**sedoku-solver-ts**](../README.md)

***

[sedoku-solver-ts](../README.md) / solveProperSudokuAsync

# Function: solveProperSudokuAsync()

> **solveProperSudokuAsync**(`puzzleInput`, `callStackStep`?): `Promise`\<`number`[][]\>

Defined in: [sudokuSolver.ts:227](https://github.com/zoolu-got-rhythm/sudoku-solver-ts/blob/5b1f0ac653f7fecf1ceb065958d23a79b16a6790/src/sudokuSolver.ts#L227)

Solves a proper sudoku puzzle (9x9 with a minimum of 17 clues) with a recursive backtracking algorithm

## Parameters

### puzzleInput

a 9x9 2d array of numbers where -1 represents an empty cell

`number`[] | `number`[][]

### callStackStep?

[`CallStackStep`](../type-aliases/CallStackStep.md)

## Returns

`Promise`\<`number`[][]\>

a 9x9 2d array of numbers representing the solved sudoku puzzle
