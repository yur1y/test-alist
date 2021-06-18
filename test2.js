
const spiralArray = array => {
    const result = [];
  
    let rowLength = array.length - 1;
    let colLength = array[0].length -1;
    let startRow = 0;
    let startCol = 0;
  
    while (rowLength >= startRow && colLength >= startCol) {
      for (let column = startCol; column <= colLength; column++) {
        result.push(array[startRow][column]);
      }
  
      startRow++;
  
      for (let row = startRow; row <= rowLength; row++) {
        result.push(array[row][colLength]);
      }
      colLength--;
  
      if (rowLength >= startRow) {
        for (let column = colLength; column >= startCol; column--) {
          result.push(array[rowLength][column]);
        }
      }
      rowLength--;
  
      if (colLength >= startCol) {
        for (let row = rowLength; row >= startRow; row--) {
          result.push(array[row][startCol]);
        }
      }
      startCol++;
    }
  
    return result;
  };


//test 
/* 
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] ];

  console.log(spiralArray(matrix));
  */