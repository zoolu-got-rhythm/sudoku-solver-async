import { check3by3BoxIsValid, checkColumnIsValid, checkRowIsValid } from "./sudokuSolverAsync";

const puzzleInput2dArrA: number[][] = [
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

const puzzleInput2dArrB: number[][] = [
    [9, 1, 5, 1, 2, 3, 4, 4, 6],
    [-1, -1, -1, 1, -1, 2, -1, 8, 9],
    [-1, 6, -1, -1, -1, 4, 7, -1, 3],

    [-1, -1, -1, 3, 1, -1, -1, 9, -1],
    [5, -1, 8, -1, 3, 1, -1, 3, 2],
    [3, 4, 1, 8, -1, -1, -1, 3, -1],

    [-1, -1, -1, 4, 9, 6, -1, -1, -1],
    [2, 7, -1, -1, -1, -1, 9, -1, -1],
    [9, -1, 9, -1, -1, 1, 3, -1, 5],
];

describe("checkRowIsValid", () => {
    test("first row of puzzle input a is valid", () => {
        expect(checkRowIsValid(0, puzzleInput2dArrA)).toBe(true);
    });

    test("second row of puzzle input a is valid", () => {
        expect(checkRowIsValid(1, puzzleInput2dArrA)).toBe(true);
    });

    test("first row of puzzle input b is invalid", () => {
        expect(checkRowIsValid(0, puzzleInput2dArrB)).toBe(false);
    });

    test("sixth row of puzzle input b is invalid", () => {
        expect(checkRowIsValid(5, puzzleInput2dArrB)).toBe(false);
    });
});

describe("checkColumnIsValid", () => {
    test("first column of puzzle input a is valid", () => {
        expect(checkColumnIsValid(0, puzzleInput2dArrA)).toBe(true);
    });

    test("second column of puzzle input a is valid", () => {
        expect(checkColumnIsValid(1, puzzleInput2dArrA)).toBe(true);
    });

    test("first column of puzzle input b is invalid", () => {
        expect(checkColumnIsValid(0, puzzleInput2dArrB)).toBe(false);
    });
    test("sixth column of puzzle input b is invalid", () => {
        expect(checkColumnIsValid(5, puzzleInput2dArrB)).toBe(false);
    });
});

describe("check3by3BoxIsValid", () => {
    test("top left 3 by 3 box of puzzle input a is valid", () => {
        expect(check3by3BoxIsValid(0, 0, puzzleInput2dArrA)).toBe(true);
    });

    test("top middle 3 by 3 box puzzle input a is valid", () => {
        expect(check3by3BoxIsValid(3, 1, puzzleInput2dArrA)).toBe(true);
    });

    // test("top right 3 by 3 box puzzle input b is invalid", () => {
    //   expect(check3by3BoxIsValid(0, puzzleInput2dArrB)).toBe(false);
    // });
    // test("middle middle 3 by 3 box puzzle input b is invalid", () => {
    //   expect(check3by3BoxIsValid(5, puzzleInput2dArrB)).toBe(false);
    // });
});

// describe("solveProperSudoku", () => {
//   test("top left 3 by 3 box of puzzle input a is valid", () => {
//     expect(solveProperSudoku(puzzleInput2dArrA)).toBe(true);
//   });

//   test("top middle 3 by 3 box puzzle input a is valid", () => {
//     expect(solveProperSudoku(puzzleInput2dArrA)).toBe(true);
//   });

//   test("top right 3 by 3 box puzzle input b is invalid", () => {
//     expect(solveProperSudoku(puzzleInput2dArrB)).toBe(false);
//   });
//   test("middle middle 3 by 3 box puzzle input b is invalid", () => {
//     expect(solveProperSudoku(puzzleInput2dArrB)).toBe(false);
//   });
// });
