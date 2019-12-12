var x_cols_left = [];
var x_cols_right = [];
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
  myVar = setTimeout(function () {
    var row = j;
    var move_x_rows = x_cols_right.length - x_cols_left.length;
    col = col + move_x_rows;
    if(col<=1){
      col=1
    }if(col>=8){
      col=8
    }
    var short_T = [];
    var a = "r" + row + "c" + col;
    var b = "r" + (++row) + "c" + (--col);
    var c = "r" + (row) + "c" + (++col);
    var d = "r" + (row) + "c" + (++col);
    col = col - 1; //compensate for shift of columns as a result of additions in var a,b,c,d
    short_T.push(a, b, c, d);
    a = short_T;
    x_cols_right = [];
    x_cols_left = [];
    short_T = [];
    for (l in a) {
      document.getElementById(a[l] + "").className = "salmon"
    }
    console.log("show row"+j)
    if (j == 17) {
      clearTimeout(myVar);
      return;
    }
    animate_show(j + 1)
  }, 500)
}
function animate_hide(j) {
  //remove element
  myVar = setTimeout(function () {
    if (j > 0 && j < 17) {
      var salmon_table_cells = document.querySelectorAll(".salmon");
      Array.prototype.forEach.call(salmon_table_cells, function (cell) {
        cell.className = "white";
      });
    }
    console.log("remove row"+j)
    if (j == 16) {
      clearTimeout(myVar);
      return;
    }
    animate_hide(j + 1)
  }, 499)
}
// changing position of elements on the grid
function add_event_listeners_to_buttons() {
  document.getElementById("left").addEventListener("click", function () {
    move_x_cols_left(1);
  });
  document.getElementById("right").addEventListener("click", function () {
    move_x_cols_right(1);
  });
  /*  document.getElementById("rotate").addEventListener("click", function () {
     myFunction(p1, p2);
   });
   document.getElementById("down").addEventListener("click", function () {
     myFunction(p1, p2);
   }); */
  // document.getElementById("display_movement_feft_right").innerHTML="move right " + x_cols_right[0] + " rows," +"move left " + x_cols_left[0] + " rows"
}

function move_x_cols_left(x) {
  x_cols_left.push(x)
}

function move_x_cols_right(x) {
  x_cols_right.push(x)
}