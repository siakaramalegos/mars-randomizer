export default [
  { row: 0, column: 4, adjacents: [2, 3] }, // 0
  { row: 0, column: 8, adjacents: [4, 5] }, // 1

  { row: 1, column: 3, adjacents: [0, 3, 7, 8] }, // 2
  { row: 1, column: 5, adjacents: [0, 2, 4, 8, 9] }, // 3
  { row: 1, column: 7, adjacents: [1, 3, 5, 9, 10] }, // 4
  { row: 1, column: 9, adjacents: [1, 4, 6, 10, 11] }, // 5
  { row: 1, column: 11, adjacents: [5, 11, 12] }, // 6

  { row: 2, column: 2, adjacents: [2, 8, 14, 15] }, // 7
  { row: 2, column: 4, adjacents: [2, 3, 7, 9, 15, 16] }, // 8
  { row: 2, column: 6, adjacents: [3, 4, 8, 10, 16, 17] }, // 9
  { row: 2, column: 8, adjacents: [4, 5, 9, 11, 17, 18] }, // 10
  { row: 2, column: 10, adjacents: [5, 6, 10, 12, 18, 19] }, // 11
  { row: 2, column: 12, adjacents: [6, 11, 13, 19, 20] }, // 12
  { row: 2, column: 14, adjacents: [12, 20] }, // 13

  { row: 3, column: 1, adjacents: [7, 15, 21, 22] }, // 14
  { row: 3, column: 3, adjacents: [7, 8, 14, 16, 22] }, // 15
  { row: 3, column: 5, adjacents: [8, 9, 15, 17] }, // 16
  { row: 3, column: 7, adjacents: [9, 10, 16, 18] }, // 17
  { row: 3, column: 9, adjacents: [10, 11, 17, 19] }, // 18
  { row: 3, column: 11, adjacents: [11, 12, 18, 20, 23] }, // 19
  { row: 3, column: 13, adjacents: [12, 13, 19, 23, 24] }, // 20

  { row: 4, column: 0, adjacents: [14, 22, 26] }, // 21
  { row: 4, column: 2, adjacents: [14, 15, 21, 26, 27] }, // 22
  { row: 4, column: 12, adjacents: [19, 20, 24] }, // 23
  { row: 4, column: 14, adjacents: [20, 23, 25] }, // 24
  { row: 4, column: 16, adjacents: [24] }, // 25

  { row: 5, column: 1, adjacents: [21, 22, 27, 31] }, // 26
  { row: 5, column: 3, adjacents: [22, 26, 28, 31, 32] }, // 27
  { row: 5, column: 5, adjacents: [27, 29, 32, 33] }, // 28
  { row: 5, column: 7, adjacents: [28, 30, 33, 34] }, // 29
  { row: 5, column: 9, adjacents: [29, 34, 35] }, // 30

  { row: 6, column: 2, adjacents: [26, 27, 32, 38] }, // 31
  { row: 6, column: 4, adjacents: [27, 28, 31, 33, 38, 39] }, // 32
  { row: 6, column: 6, adjacents: [28, 29, 32, 34, 39, 40] }, // 33
  { row: 6, column: 8, adjacents: [29, 30, 33, 35, 40, 41] }, // 34
  { row: 6, column: 10, adjacents: [30, 34, 36, 41, 42] }, // 35
  { row: 6, column: 12, adjacents: [35, 37, 42, 43] }, // 36
  { row: 6, column: 14, adjacents: [36, 43] }, // 37

  { row: 7, column: 3, adjacents: [31, 32, 39, 44] }, // 38
  { row: 7, column: 5, adjacents: [32, 33, 38, 40, 44, 45] }, // 39
  { row: 7, column: 7, adjacents: [33, 34, 39, 41, 45, 46] }, // 40
  { row: 7, column: 9, adjacents: [34, 35, 40, 42, 46, 47] }, // 41
  { row: 7, column: 11, adjacents: [35, 36, 41, 43, 47] }, // 42
  { row: 7, column: 13, adjacents: [36, 37, 42] }, // 43

  { row: 8, column: 4, adjacents: [38, 39, 45] }, // 44
  { row: 8, column: 6, adjacents: [39, 40, 44, 46] }, // 45
  { row: 8, column: 8, adjacents: [40, 41, 45, 47] }, // 46
  { row: 8, column: 10, adjacents: [41, 42, 46] }, // 47
]
