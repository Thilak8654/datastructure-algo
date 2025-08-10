/**
 * Island Count
 * Write a function, islandCount, that takes in a grid containing WS and Ls. W represents water and L represents Land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.
 */

const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;
    for(let r=0; r<grid.length; r++){
        for(let c=0; c<grid[0].length; c++){
            if(explore(grid, r, c, visited)) count++;
        }
    }
    return count;
}

const explore = (grid, r, c, visited) => {
    const rowInBounds = 0<=r && r < grid.length;
    const colInBounds = 0 <= c && c < grid.length;
    if(!rowInBounds || !colInBounds) return false;
    
    if(grid[r][c] === 'w') return false;

    const pos = r+','+c;
    if(visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r-1, c, visited);
    explore(grid, r+1, c, visited);
    explore(grid, r, c-1, visited);
    explore(grid, r, c+1, visited);

    return true;
}
const grid = [
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'l', 'w'],
    ['w', 'w', 'l', 'l', 'w'],
    ['l', 'w', 'w', 'l', 'l'],
    ['l', 'l', 'w', 'w', 'w']
]

console.log(islandCount(grid));

// for understanding of how it works in multi dimensional array, when passing the inner array to set.
/*const s = new Set();
s.add([1,3]);
console.log(s.has([1,3])) // return false; because it is checking array. hence convert this to string

s.add('1,3');
console.log(s.has(1,3))*/ // return true;
