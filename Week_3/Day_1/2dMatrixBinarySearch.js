/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 
 * 
 * You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
 */

const matrix1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
const target1 = 3
// Output: true

const matrix2 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
const target2 = 13
// Output: false

var searchMatrix = function (matrix, target) {
    // my attepmpt

    // let first = 0
    // let last = matrix.length - 1
    // arr = 0
    // while (first <= last) {
    //     let middle = Math.floor(first + last) / 2
    //     if(matrix[first][matrix[first][matrix[first].length]] < target) {
    //         first = middle +1
    //     }
    //     else if (matrix[last][matrix[last][matrix[last].length]] > target) {
    //         last = middle -1
    //     }
    //     else {
    //         let start = 0
    //         let end = matrix[middle][matrix[middle].length -1]
    //         while (start <= end) {
    //             let mid = Math.floor(start + end)/2
    //             if (matrix[middle][start] < target) {
    //                 start = matrix[middle][mid] +1
    //             }
    //             else if(matrix[middle][end] > target) {
    //                 end = matrix[middle][mid] -1
    //             }
    //             else {
    //                 return true
    //             }
    //             return false
    //         }
    //     }
    // }
    // return false


    // recursive: 
//     let l = 0; let r = matrix.length - 1;

//     while (l <= r) {
//         const mid = Math.floor((l + r) / 2);
//         const first = matrix[mid][0];
//         const last = matrix[mid][matrix[mid].length - 1];
//         if (target === first || target === last) return true;
//         if (target > first && target < last) return binarySearch(matrix[mid], target);
//         if (target < first) r = mid - 1;
//         else l = mid + 1;
//     }
//     return false;
// };

// function binarySearch(nums, target) {
//   let l = 0;
//   let r = nums.length - 1;

//   while (l <= r) {
//     const mid = Math.floor((l + r) / 2);
//     if (nums[mid] === target) return true;
//     if (nums[mid] < target) l = mid + 1;
//     else r = mid - 1;
//   }

//   return false;
// };
// none recursive
let [rows, cols] = [matrix.length, matrix[0].length];
    let [top, bot] = [0, rows-1];
    
    while(top <= bot){
        let row = Math.floor((top +  bot) / 2);
        if(target > matrix[row][cols-1]) {
            top = row + 1;
        } else if(target < matrix[row][0]) {
            bot = row - 1; 
        } else {
            break;
        }
    }
    
    if(!(top <= bot)) {
        return false;
    }
    
    let row = Math.floor((top + bot) / 2);
    let [l, r] = [0, cols-1];
    while(l<=r){
        let m = Math.floor((l + r) /2);
        if(target > matrix[row][m]) {
            l = m +1;
        } else if(target < matrix[row][m]) {
            r = m - 1;
        } else if(target == matrix[row][m]) {
            return true;
        }
    }
    return false;
};

console.log(searchMatrix(matrix1, target1))
console.log(searchMatrix(matrix2, target2))