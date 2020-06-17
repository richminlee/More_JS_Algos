function formingMagicSquare(s) {


}
  console.log([[4, 9, 2],
              [3, 5, 7],
              [8, 1, 5]]);
/*


                          13[0][2],[1][1],[2][0]
4        8+       2       14[0][012]
4-       5        7       16[1][012]
6++      1        6       13[2][012]

14       14       15      15[0][0],[1][1],[2][2]
[012][0] [012][1] [012][2]

let totalCost = 0;
let tempTotal
need all rows columns and diagonals = 15
i = rows
j = columns
for loop s[i]
    for loop s[i][j]
s[i] != 15 
s[i][j] != 15
when i = j != 15
when i=0, j =2 | i=1,j=1 | i=2, j=0 != 15
math.abs 15-tempTotal

*/