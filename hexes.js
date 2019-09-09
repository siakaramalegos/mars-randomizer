export default {
  base: [
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
  ],
  hellas: [
    { row: 0, column: 6, adjacents: [1, 4, 5] }, // 0
    { row: 0, column: 8, adjacents: [0, 2, 5, 6] }, // 1
    { row: 0, column: 10, adjacents: [1, 3, 6, 7] }, // 2
    { row: 0, column: 12, adjacents: [2, 7, 8] }, // 3

    { row: 1, column: 5, adjacents: [0, 5, 9, 10] }, // 4
    { row: 1, column: 7, adjacents: [0, 1, 4, 6, 10, 11] }, // 5
    { row: 1, column: 9, adjacents: [1, 2, 5, 7, 11, 12] }, // 6
    { row: 1, column: 11, adjacents: [2, 3, 6, 8, 12, 13] }, // 7
    { row: 1, column: 13, adjacents: [3, 7, 13, 14] }, // 8

    { row: 2, column: 4, adjacents: [4, 10, 15, 16] }, // 9
    { row: 2, column: 6, adjacents: [4, 5, 9, 11, 16, 17] }, // 10
    { row: 2, column: 8, adjacents: [5, 6, 10, 12, 17, 18] }, // 11
    { row: 2, column: 10, adjacents: [6, 7, 11, 13, 18] }, // 12
    { row: 2, column: 12, adjacents: [7, 8, 12, 14] }, // 13
    { row: 2, column: 14, adjacents: [8, 13, 19] }, // 14

    { row: 3, column: 3, adjacents: [9, 16, 21, 22] }, // 15
    { row: 3, column: 5, adjacents: [9, 10, 15, 17, 22, 23] }, // 16
    { row: 3, column: 7, adjacents: [10, 11, 16, 18, 23, 24] }, // 17
    { row: 3, column: 9, adjacents: [11, 12, 17, 24] }, // 18
    { row: 3, column: 15, adjacents: [14, 25] }, // 19

    { row: 4, column: 0, adjacents: [21, 26] }, // 20
    { row: 4, column: 2, adjacents: [15, 20, 22, 26, 27] }, // 21
    { row: 4, column: 4, adjacents: [15, 16, 21, 23, 27, 28] }, // 22
    { row: 4, column: 6, adjacents: [16, 17, 22, 24, 28, 29] }, // 23
    { row: 4, column: 8, adjacents: [17, 18, 23, 29, 30] }, // 24
    { row: 4, column: 16, adjacents: [19, 31] }, // 25

    { row: 5, column: 1, adjacents: [20, 21, 27] }, // 26
    { row: 5, column: 3, adjacents: [21, 22, 26, 28, 32] }, // 27
    { row: 5, column: 5, adjacents: [22, 23, 27, 29, 32, 33] }, // 28
    { row: 5, column: 7, adjacents: [23, 24, 28, 30, 33, 34] }, // 29
    { row: 5, column: 9, adjacents: [23, 29, 34, 35] }, // 30
    { row: 5, column: 15, adjacents: [25, 37] }, // 31

    { row: 6, column: 4, adjacents: [27, 28, 33, 38, 39] }, // 32
    { row: 6, column: 6, adjacents: [28, 29, 32, 34, 39, 40] }, // 33
    { row: 6, column: 8, adjacents: [29, 30, 33, 35, 40, 41] }, // 34
    { row: 6, column: 10, adjacents: [30, 34, 36, 41, 42] }, // 35
    { row: 6, column: 12, adjacents: [35, 37, 42, 43] }, // 36
    { row: 6, column: 14, adjacents: [31, 36, 43] }, // 37

    { row: 7, column: 3, adjacents: [32, 39, 44] }, // 38
    { row: 7, column: 5, adjacents: [32, 33, 38, 40, 44, 45] }, // 39
    { row: 7, column: 7, adjacents: [33, 34, 39, 41, 45, 46] }, // 40
    { row: 7, column: 9, adjacents: [34, 35, 40, 42, 46, 47] }, // 41
    { row: 7, column: 11, adjacents: [35, 36, 41, 43, 47, 48] }, // 42
    { row: 7, column: 13, adjacents: [36, 37, 42, 48] }, // 43

    { row: 8, column: 4, adjacents: [38, 39, 45] }, // 44
    { row: 8, column: 6, adjacents: [39, 40, 44, 46] }, // 45
    { row: 8, column: 8, adjacents: [40, 41, 45, 47] }, // 46
    { row: 8, column: 10, adjacents: [41, 42, 46, 48] }, // 47
    { row: 8, column: 12, adjacents: [42, 43, 47] }, // 48
  ],
  elysium: [
    { row: 0, column: 12, adjacents: [4] }, // 0

    { row: 1, column: 3, adjacents: [2, 5, 6] }, // 1
    { row: 1, column: 5, adjacents: [1, 3, 6, 7] }, // 2
    { row: 1, column: 7, adjacents: [2, 7, 8] }, // 3
    { row: 1, column: 13, adjacents: [0, 9] }, // 4

    { row: 2, column: 2, adjacents: [1, 6, 10, 11] }, // 5
    { row: 2, column: 4, adjacents: [1, 2, 5, 7, 11, 12] }, // 6
    { row: 2, column: 6, adjacents: [2, 3, 6, 8, 12] }, // 7
    { row: 2, column: 8, adjacents: [3, 7, 13] }, // 8
    { row: 2, column: 14, adjacents: [4, 14] }, // 9

    { row: 3, column: 1, adjacents: [5, 11, 15, 16] }, // 10
    { row: 3, column: 3, adjacents: [5, 6, 10, 12, 16, 17] }, // 11
    { row: 3, column: 5, adjacents: [6, 7, 11, 17] }, // 12
    { row: 3, column: 9, adjacents: [8, 18, 19] }, // 13
    { row: 3, column: 15, adjacents: [9, 21, 22] }, // 14

    { row: 4, column: 0, adjacents: [10, 16, 23] }, // 15
    { row: 4, column: 2, adjacents: [10, 11, 15, 17, 23, 24] }, // 16
    { row: 4, column: 4, adjacents: [11, 12, 16, 24, 25] }, // 17
    { row: 4, column: 8, adjacents: [13, 19, 26, 27] }, // 18
    { row: 4, column: 10, adjacents: [13, 18, 20, 27, 28] }, // 19
    { row: 4, column: 12, adjacents: [19, 21, 28, 29] }, // 20
    { row: 4, column: 14, adjacents: [14, 20, 22, 29, 30] }, // 21
    { row: 4, column: 16, adjacents: [14, 21, 30] }, // 22

    { row: 5, column: 1, adjacents: [15, 16, 24, 31] }, // 23
    { row: 5, column: 3, adjacents: [16, 17, 23, 25, 31, 32] }, // 24
    { row: 5, column: 5, adjacents: [17, 24, 26, 32, 33] }, // 25
    { row: 5, column: 7, adjacents: [18, 25, 27, 33, 34] }, // 26
    { row: 5, column: 9, adjacents: [18, 19, 26, 28, 34, 35] }, // 27
    { row: 5, column: 11, adjacents: [19, 20, 27, 29, 35, 36] }, // 28
    { row: 5, column: 13, adjacents: [20, 21, 28, 30, 36, 37] }, // 29
    { row: 5, column: 15, adjacents: [21, 22, 29, 37] }, // 30

    { row: 6, column: 2, adjacents: [23, 24, 32, 38] }, // 31
    { row: 6, column: 4, adjacents: [24, 25, 31, 33, 38, 39] }, // 32
    { row: 6, column: 6, adjacents: [25, 26, 32, 34, 39, 40] }, // 33
    { row: 6, column: 8, adjacents: [26, 27, 33, 35, 40, 41] }, // 34
    { row: 6, column: 10, adjacents: [27, 28, 34, 36, 41, 42] }, // 35
    { row: 6, column: 12, adjacents: [28, 29, 35, 37, 42, 43] }, // 36
    { row: 6, column: 14, adjacents: [29, 30, 36, 43] }, // 37

    { row: 7, column: 3, adjacents: [31, 32, 39, 44] }, // 38
    { row: 7, column: 5, adjacents: [32, 33, 38, 40, 44, 45] }, // 39
    { row: 7, column: 7, adjacents: [33, 34, 39, 41, 45, 46] }, // 40
    { row: 7, column: 9, adjacents: [34, 35, 40, 42, 46, 47] }, // 41
    { row: 7, column: 11, adjacents: [35, 36, 41, 43, 47, 48] }, // 42
    { row: 7, column: 13, adjacents: [36, 37, 42, 48] }, // 43

    { row: 8, column: 4, adjacents: [38, 39, 45] }, // 44
    { row: 8, column: 6, adjacents: [39, 40, 44, 46] }, // 45
    { row: 8, column: 8, adjacents: [40, 41, 45, 47] }, // 46
    { row: 8, column: 10, adjacents: [41, 42, 46, 48] }, // 47
    { row: 8, column: 12, adjacents: [42, 43, 47] }, // 48
  ],
}
