var x_cols_left = [];
var x_cols_right = [];
var rotate_clockwise = [];
var place_element_bottom =[];
var col = 5;
var objectForRemovingElements = [];

generate_tetris_grid()
add_event_listeners_to_buttons()

function generate_tetris_grid() {
  var rows = 18;
  var cols = 10;
  var grid = document.getElementById("tetris-grid");
  var tblBody = document.createElement("tbody");
  for (var i = 0; i < rows; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < cols; j++) {
      var cell = document.createElement("td");
      cell.id = "r" + i + "c" + j
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }

  grid.appendChild(tblBody);
  grid.setAttribute("border", "2");
  animate_show(0);
  animate_hide(0);
}

function animate_show(j) {
  //create short-T element per row j for displaying it  
  var time;  
  if(place_element_bottom.length==1){
    time=100
  }else(time=500)
  myVar = setTimeout(function () {
    var final_row;
    var row = j;
    var move_x_rows = x_cols_right.length - x_cols_left.length;
    col = col + move_x_rows;
    //the element points up (square a faces up)
    if (rotate_clockwise.length == 0 || rotate_clockwise.length == 4) {
      if (col <= 1) {
        col = 1
      }
      if (col >= 8) {
        col = 8
      }
      var short_T = [];
      var a = "r" + row + "c" + col;
      var b = "r" + (++row) + "c" + (--col);
      var c = "r" + (row) + "c" + (++col);
      var d = "r" + (row) + "c" + (++col);
      col = col - 1; //compensate for shift of columns as a result of additions in var a,b,c,d
      short_T.push(a, b, c, d);
      rotate_clockwise=[];
      final_row=17;
    }
     //the element points right (square a faces right)
     if (rotate_clockwise.length == 1) {
      if (col <= 0) {
        col = 0
      }
      if (col >= 8) {
        col = 8
      }
      var short_T = [];
      var b = "r" + row + "c" + col;
      var c = "r" + (++row) + "c" + (col);
      var a = "r" + (row) + "c" + (++col);
      var d = "r" + (++row) + "c" + (--col);
      short_T.push(a, b, c, d);
      final_row=15;
    }
    //the element points down (square a faces down)
    if (rotate_clockwise.length == 2) {
      if (col <= 1) {
        col = 1
      }
      if (col >= 8) {
        col = 8
      }
      var short_T = [];
      var c = "r" + (row) + "c" + (col);
      var d = "r" + row + "c" + (--col);
      var b = "r" + (row) + "c" + (col+2);
      var a = "r" + (++row) + "c" + (++col);
      short_T.push( a, b, c, d);
      final_row=17;
    }
    //the element points left (square a faces left)
    if (rotate_clockwise.length == 3) {
      if (col <= 1) {
        col = 1
      }
      if (col >= 9) {
        col = 9
      }
      var short_T = [];
      var c = "r" + (row) + "c" + (col);
      var a = "r" + row + "c" + (--col);
      var d = "r" + (--row) + "c" + (++col);
      var b = "r" + (row+2) + "c" + (col);
      short_T.push( a, b, c, d);
      final_row=16;
    }
    a = short_T;
    x_cols_right = [];
    x_cols_left = [];
    short_T = [];
    for (l in a) {
      document.getElementById(a[l] + "").className = "salmon"
    }
    console.log("show row" + j)

    if (j == final_row) {
      clearTimeout(myVar);
      return;
    }
    animate_show(j + 1)
    place_element_bottom=[]
  }, time)
}

function animate_hide(j) {
  //remove element
  var time;
  if(place_element_bottom.length==1){
    time=99
  }else(time=499)
  myVar = setTimeout(function () {
    if (j > 0 && j < 17) {
      var salmon_table_cells = document.querySelectorAll(".salmon");
      Array.prototype.forEach.call(salmon_table_cells, function (cell) {
        cell.className = "white";
      });
    }
    console.log("remove row" + j)
    if (j == 17) {
      clearTimeout(myVar);
      return;
    }
    animate_hide(j + 1)
    place_element_bottom=[]
  }, time)
}
// changing position of elements on the grid
function add_event_listeners_to_buttons() {
  document.getElementById("left").addEventListener("click", function () {
    move_x_cols_left(1);
  });
  document.getElementById("right").addEventListener("click", function () {
    move_x_cols_right(1);
  });
  document.getElementById("rotate").addEventListener("click", function () {
    rotate_clockwise_a_right_down_left_up(1);
  }); 
   document.getElementById("down").addEventListener("click", function () {
     place_element_down(1);
   }); 
}

function move_x_cols_left(x) {
  x_cols_left.push(x)
}

function move_x_cols_right(x) {
  x_cols_right.push(x)
}

function rotate_clockwise_a_right_down_left_up(x) {
  rotate_clockwise.push(x)
}

function place_element_down(x){
  place_element_bottom.push(x)
}
