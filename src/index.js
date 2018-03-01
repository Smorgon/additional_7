module.exports = function solveSudoku(matrix) {
    let obj = {};
    let cell = null;
    let co1 = 10;
    while (checkMatrix() && co1 > 0) {
        co = 10;
        while (checkMatrix() && co > 0) {
            matrix.forEach((val, j, arr) => {
                val.forEach((item, i) => {
                if (item === 0) {
                cell = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                checkCell(j, i);
                if (cell.length === 1) {
                    matrix[j][i] = cell[0];
                    obj['' + j + i] = null;
                } else {
                    obj['' + j + i] = cell;
                }
            } else {
                obj['' + j + i] = null;
            }
        });
        });


            co--;
        }
        co = 10;

        while (checkMatrix() && co > 0) {
            for (let i = 0; i < 9; i += 3) {
                for (let j = 0; j < 9; j += 3) {
                    checkSquare3x3(i, j);
                }
            }
            co--;
        }
        co1--;
    }

    function checkMatrix() {
        let count = 0;
        matrix.forEach((val, j, arr) => {
            if (val.some((item, i) => {
            return item === 0;
    })) {
            count++;
        }
    });
        return count > 0;
    }

    function checkCell(rowIndex, colIndex) {
        checkRow(rowIndex);
        checkCol(colIndex);
        checkSquareForCell(rowIndex, colIndex);
    }

    function checkRow(index) {
        matrix[index].forEach((val) => {
            if (cell.indexOf(val) !== -1) {
            cell.splice(cell.indexOf(val), 1);
        }
    });
    }

    function checkCol(index) {
        matrix.forEach((arr) => {
            if (cell.indexOf(arr[index]) !== -1) {
            cell.splice(cell.indexOf(arr[index]), 1);
        }
    });
    }

    function checkSquareForCell(rowIndex, colIndex) {
        let startRow = rowIndex - (rowIndex % 3);
        let startCol = colIndex - (colIndex % 3);
        for (let k = startRow; k < startRow + 3; k++) {
            for (let l = startCol; l < startCol + 3; l++) {
                let indOf = cell.indexOf(matrix[k][l]);
                if (indOf !== -1) {
                    cell.splice(indOf, 1);
                }
            }
        }
    }

    function checkSquare3x3(rowIndex, colIndex) {
        let square = {};
        let pos = {};
        for (let i = 0 + rowIndex; i < 3 + rowIndex; i++) {
            for (let j = 0 + colIndex; j < 3 + colIndex; j++) {
                if (obj['' + i + j] !== null) {
                    obj['' + i + j].forEach((val) => {
                        if (val in square) {
                        square[val]++;
                    } else {
                        square[val] = 1;
                        pos[val] = i + ',' + j;
                    }
                });
                }
            }
        }
        for (let i = 0; i < 9; i++) {
            if (square[i] === 1) {
                let arr = pos[i].split(',');
                matrix[arr[0]][arr[1]] = i;
                obj['' + arr[0] + arr[1]] = null;
            }
        }
    }


    matrix.forEach((val, j, arr) => {
        val.forEach((item, i) => {
            if (item === 0) {
                matrix[j][i] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            }
        });
    });

    return matrix;
}
