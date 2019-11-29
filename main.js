var x_cols_left = [];
var x_cols_right = [];

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
  display_element_moving_vertically_position_1()
  //createArrayForDisplayingShortTverticalMovement()
}

/* function createArrayForDisplayingShortTverticalMovement() {
  var k;
  var l;
  var i;
  var show_short_T_as_param = [];
  var remove_short_T_as_param = [];
  for (var k = 0; k < 17; k++) {
    row = k;
    col = 5;
    var short_T = [];
    var a = "r" + row + "c" + col;
    var b = "r" + (++row) + "c" + (--col);
    var c = "r" + (row) + "c" + (++col);
    var d = "r" + (row) + "c" + (++col);
    short_T.push(a, b, c, d);
    show_short_T_as_param.push(short_T)
  }
  for (var l = 0; l < 16; l++) {
    row = l;
    col = 5;
    var remove_short_T = [];
    var a = "r" + row + "c" + col;
    var b = "r" + (++row) + "c" + (--col);
    var c = "r" + (row) + "c" + (++col);
    var d = "r" + (row) + "c" + (++col);
    remove_short_T.push(a, b, d);
    remove_short_T_as_param.push(remove_short_T)
  }
  display_element_moving_vertically_position_1(show_short_T_as_param, remove_short_T_as_param);
} */

function display_element_moving_vertically_position_1() {
  animate_show(0)
  function animate_show(j) {
    //create short-T element per row j for displaying it
    var col =5;
    var row = j;
    col = col + x_cols_right.length - x_cols_left.length;
    console.log(col)
    var short_T = [];
    var a = "r" + row + "c" + col;
    var b = "r" + (++row) + "c" + (--col);
    var c = "r" + (row) + "c" + (++col);
    var d = "r" + (row) + "c" + (++col);
    short_T.push(a, b, c, d);
    a = short_T;
    console.log(short_T)
    console.log("left " + x_cols_left)
    console.log("right" + x_cols_right)
    short_T = [];
    myVar = setTimeout(function () {
      for (l in a) {
        document.getElementById(a[l] + "").style.backgroundColor = "salmon"
      }
      if (j == 17) {
        clearTimeout(myVar);
        return;
      }
      animate_show(j + 1)
    }, 500)
  }
  animate_hide(0)

  function animate_hide(j) {
    //create short-T element per row j for removing it
    myVar = setTimeout(function () {
      if (j > 0 && j < 17) {
        var row = j-1;
        var col =5;
        col = col + x_cols_right.length - x_cols_left.length;
        var remove_short_T = [];
        var a = "r" + row + "c" + col;
        var b = "r" + (++row) + "c" + (--col);
        var c = "r" + (row) + "c" + (++col);
        var d = "r" + (row) + "c" + (++col);
        remove_short_T.push(a, b, d);
        b = remove_short_T;
        console.log[remove_short_T];
        for (l in b) {
          document.getElementById(b[l] + "").style.backgroundColor = "white"
        }
      }
      x_cols_right = [];
      x_cols_left = [];
      if (j == 16) {
        clearTimeout(myVar);
        return;
      }
      animate_hide(j + 1)
    }, 500)
  }
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