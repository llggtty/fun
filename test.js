

function make_2d_array(rows,cols){
  let arr = new Array(rows)
  for (let i=0; i < arr.length; i++){
    arr[i] = new Array(cols);
  }
  return arr;
}

let grid;
let cols;
let rows;
let resolution =10;

function setup(){
  createCanvas(400,400);
  cols = width/resolution;
  rows = height/resolution;
  grid = make_2d_array(cols,rows);
  for (let i =0; i < rows; i++){
    for (let j=0; j < cols ; j++){
      grid[i][j] = Math.floor(Math.random(1)*2);
    }
  }
}
function draw(){
  background(0);
  
  for (let i =0; i < rows; i++){
    for (let j=0; j < cols ; j++){
      let x = i*resolution;
      let y = j*resolution;
      if (grid[i][j] == 1){
        fill(255);
        stroke(0);
        rect(x,y,resolution-1,resolution-1);
      }
    }
  }
  // compute next based on grid
  let next = make_2d_array(rows,cols);
  for (let i =0; i < rows; i++){
    for (let j=0; j < cols ; j++){
      if (i==0 || j==0 || i== rows -1|| j == cols -1){
        next[i][j] = grid[i][j];
      }
      else{
        num = count(grid, i,j);
        console.log(num);
        if (num==3) { next[i][j]=1; }
        else if (num>3 || num<2 ) {next[i][j]=0;}
        else {next[i][j] = grid[i][j];}
      }
    }
  }
  grid = next;
}

function count(grid,x,y){
  var sum = 0;
  for (let i=-1;i<2;i++){
    for (let j=-1;j<2;j++){
      if (grid[x+i][y+j] ==1){
        sum = sum+1;
      }
    }
  }
  sum = sum - grid[x][y];
  return sum;
}
window.onload = function (){setup()};

