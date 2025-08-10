/**
 * Minimum Island
 * Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.
 * You may assume that the grid contains at least one island.
 */

const minimumIsland = (grid) => {
    let minimum = Infinity;
    const visited = new Set();
    for(let r=0; r<grid.length; r++){
        for(let c=0; c<grid[0].length; c++){
            const size = exploreSize(grid, r, c, visited);
            if(size>0 && size<minimum) minimum = size; //Here checking the size>0 because on the first iteration 0, 0 returns 0 because that is w. since grid has atleast one island, checking size>0
        }
    }
    return minimum;
}

const exploreSize = (grid, r, c, visited) => {
    const rowInBounds = 0<=r && r<grid.length;
    const colInBounds = 0<=c && c<grid[0].length;
    if(!rowInBounds || !colInBounds) return 0;

    if(grid[r][c] === 'w') return 0;
    const pos = r + ',' + c;
    if(visited.has(pos)) return 0;
    visited.add(pos);

    let size = 1;
    size+=exploreSize(grid, r-1, c, visited);
    size+=exploreSize(grid, r+1, c, visited);
    size+=exploreSize(grid, r, c-1, visited);
    size+=exploreSize(grid, r, c+1, visited);

    return size;

}

const grid = [
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'l', 'w'],
    ['w', 'w', 'l', 'l', 'w'],
    ['l', 'w', 'w', 'l', 'l'],
    ['l', 'l', 'w', 'w', 'w']
]

console.log(minimumIsland(grid));