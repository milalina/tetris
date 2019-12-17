var x_cols_left = [];
var x_cols_right = [];
var rotate_clockwise = [];
var col = 5;
//placing elements at the bottom
var place_element_bottom = [];
var time_show;
var time_hide;
//generating elements
var element_number;
var final_row_show_function;
var final_row_hide_function;

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
}


function selectElement(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  element_number = Math.floor(Math.random() * (max - min + 1)) + min;
  if (element_number == 1) {
    animate_show_short_T(0);
    animate_hide_short_T(0);
    col = 5
    place_element_bottom = [];
  }
  if (element_number == 2) {
    animate_show_spaghetti(0);
    animate_hide_spaghetti(0);
    col = 5
    place_element_bottom = [];
  }
  if (element_number == 3) {
    animate_show_short_Z(0)
    animate_hide_short_Z(0)
    col = 5
    place_element_bottom = [];
  }
  if (element_number == 4) {
    animate_show_square(0)
    animate_hide_square(0)
    col = 5
    place_element_bottom = [];
  }
  if (element_number == 5) {
    animate_show_L(0)
    animate_hide_L(0)
    col = 5
    place_element_bottom = [];
  }
  console.log(element_number)
}

function calculate_landing_grid_row_show_hide_element() {
  if (element_number == 1 || element_number == 3 || element_number == 5) {
    if (rotate_clockwise.length == 1 || rotate_clockwise.length == 3) {
      element_length == 3
    } else {
      element_length == 2
    }
  }
  if (element_number == 4) {
    element_length == 2
  }
  if (element_number == 1) {
    if (rotate_clockwise.length == 1 || rotate_clockwise.length == 3) {
      element_length == 1
    } else {
      element_length = 4
    }

  }
  final_row_show_function=17-(element_length-1)+2;
  final_row_hide_function=final_row_show_function-1;
}

//---------------------------------------------------------------------------
//short-T element start
function animate_show_short_T(j) {
  //create short-T element per row j for displaying it  
  setting_time_for_element_motion_down()
  myVar = setTimeout(function () {
   // var final_row;
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
      calculate_landing_grid_row_show_hide_element()
      short_T.push(a, b, c, d);
      rotate_clockwise = [];
     // final_row = 17;
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
      calculate_landing_grid_row_show_hide_element()
      short_T.push(a, b, c, d);
    //  final_row = 15;
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
      var b = "r" + (row) + "c" + (col + 2);
      var a = "r" + (++row) + "c" + (++col);
      calculate_landing_grid_row_show_hide_element()
      short_T.push(a, b, c, d);
      //final_row = 17;
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
      var b = "r" + (row + 2) + "c" + (col);
      calculate_landing_grid_row_show_hide_element()
      short_T.push(a, b, c, d);
      //final_row = 16;
    }
    a = short_T;
    x_cols_right = [];
    x_cols_left = [];
    short_T = [];
    for (l in a) {
      document.getElementById(a[l] + "").className = "salmon"
    }

    if (j == final_row_show_function) {
      clearTimeout(myVar);
      return;
    }
    animate_show_short_T(j + 1)
  }, time_show)
}

function animate_hide_short_T(j) {
  setting_time_for_element_motion_down()
  //remove element
  myVar = setTimeout(function () {
    if (j > 0 && j < final_row_hide_function) {
      var salmon_table_cells = document.querySelectorAll(".salmon");
      Array.prototype.forEach.call(salmon_table_cells, function (cell) {
        cell.className = "white";
      });
    }
    if (j == final_row_hide_function) {
      clearTimeout(myVar);
      return;
    }
    animate_hide_short_T(j + 1)
  }, time_hide)
}
//short-T element finish
//---------------------------------------------------------------------------
//short-Z element start
function animate_show_short_Z(j) {
  //create short-Z element per row j for displaying it  
  setting_time_for_element_motion_down()
  myVar = setTimeout(function () {
    var final_row;
   // var row = j;
    var move_x_rows = x_cols_right.length - x_cols_left.length;
    col = col + move_x_rows;
    //the element points up (square b a face up)
    if (rotate_clockwise.length == 0 || rotate_clockwise.length == 4) {
      if (col <= 1) {
        col = 1
      }
      if (col >= 8) {
        col = 8
      }
      var short_z = [];
      var b = "r" + (row) + "c" + (--col);
      var a = "r" + row + "c" + (++col);
      var c = "r" + (++row) + "c" + (col);
      var d = "r" + (row) + "c" + (++col);
      col = col - 1; //compensate for shift of columns as a result of additions in var a,b,c,d
      calculate_landing_grid_row_show_hide_element()
      short_z.push(a, b, c, d);
      rotate_clockwise = [];
      //final_row = 17;
    }
    //the element points right (squares ba face right)
    if (rotate_clockwise.length == 1) {
      if (col <= 0) {
        col = 0
      }
      if (col >= 8) {
        col = 8
      }
      var short_z = [];
      var b = "r" + row + "c" + (++col);
      var c = "r" + (++row) + "c" + (--col);
      var a = "r" + (row) + "c" + (++col);
      var d = "r" + (++row) + "c" + (--col);
      calculate_landing_grid_row_show_hide_element()
      short_z.push(a, b, c, d);
     // final_row = 15;
    }
    //the element points down (squares b a face down)
    if (rotate_clockwise.length == 2) {
      if (col <= 1) {
        col = 1
      }
      if (col >= 8) {
        col = 8
      }
      var short_z = [];
      var c = "r" + (row) + "c" + (col);
      var d = "r" + row + "c" + (--col);
      var b = "r" + (++row) + "c" + (col + 2);
      var a = "r" + (row) + "c" + (++col);
      calculate_landing_grid_row_show_hide_element()
      short_z.push(a, b, c, d);
     // final_row = 17;
    }
    //the element points left (squares b, a face left)
    if (rotate_clockwise.length == 3) {
      if (col <= 1) {
        col = 1
      }
      if (col >= 9) {
        col = 9
      }
      var short_z = [];
      var c = "r" + (row) + "c" + (col);
      var a = "r" + row + "c" + (--col);
      var d = "r" + (--row) + "c" + (++col);
      var b = "r" + (row + 2) + "c" + (--col);
      col = col + 1;
      calculate_landing_grid_row_show_hide_element()
      short_z.push(a, b, c, d);
     // final_row = 16;
    }
    a = short_z;
    x_cols_right = [];
    x_cols_left = [];
    short_z = [];
    for (l in a) {
      document.getElementById(a[l] + "").className = "green"
      console.log("hello green")
    }
    console.log("show row" + j)

    if (j == final_row_show_function) {
      clearTimeout(myVar);
      return;
    }
    animate_show_short_Z(j + 1)
  }, time_show)
}

function animate_hide_short_Z(j) {
  setting_time_for_element_motion_down()
  //remove element
  myVar = setTimeout(function () {
    if (j > 0 && j < final_row_hide_function) {
      var salmon_table_cells = document.querySelectorAll(".green");
      Array.prototype.forEach.call(salmon_table_cells, function (cell) {
        cell.className = "white";
      });
    }
    console.log("remove row" + j)
    if (j == final_row_hide_function) {
      clearTimeout(myVar);
      return;
    }
    animate_hide_short_Z(j + 1)
  }, time_hide)
}
//short-Z element finish
//---------------------------------------------------------------------------
//square start
function animate_show_square(j) {
  //create short-Z element per row j for displaying it  
  setting_time_for_element_motion_down()
  myVar = setTimeout(function () {
   // var final_row;
    var row = j;
    var move_x_rows = x_cols_right.length - x_cols_left.length;
    col = col + move_x_rows;
    //the element points up (square b a face up)
    if (col <= 0) {
      col = 0
    }
    if (col >= 8) {
      col = 8
    }
    var square = [];
    var a = "r" + row + "c" + (col);
    var b = "r" + row + "c" + (++col);
    var c = "r" + (++row) + "c" + (--col);
    var d = "r" + (row) + "c" + (++col);
    col = col - 1; //compensate for shift of columns as a result of additions in var a,b,c,d
    calculate_landing_grid_row_show_hide_element()
    square.push(a, b, c, d);
    rotate_clockwise = [];
    //final_row = 17;
    a = square;
    x_cols_right = [];
    x_cols_left = [];
    square = [];
    for (l in a) {
      document.getElementById(a[l] + "").className = "blue"
      console.log("hello green")
    }
    console.log("show row" + j)

    if (j == final_row_show_function) {
      clearTimeout(myVar);
      return;
    }
    animate_show_square(j + 1)
  }, time_show)
}

function animate_hide_square(j) {
  setting_time_for_element_motion_down()
  //remove element
  myVar = setTimeout(function () {
    if (j > 0 && j < final_row_hide_function) {
      var salmon_table_cells = document.querySelectorAll(".blue");
      Array.prototype.forEach.call(salmon_table_cells, function (cell) {
        cell.className = "white";
      });
    }
    if (j == final_row_hide_function) {
      clearTimeout(myVar);
      return;
    }
    animate_hide_square(j + 1)
  }, time_hide)
}
//square finish
//---------------------------------------------------------------------------
//L element start
function animate_show_L(j) {
  //create L element per row j for displaying it, a(top row, left), b,c,d(bottom row). c as a starting point
  setting_time_for_element_motion_down()
  myVar = setTimeout(function () {
   // var final_row;
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
      var short_L = [];
      var a = "r" + row + "c" + (--col);
      var b = "r" + (++row) + "c" + (col);
      var c = "r" + (row) + "c" + (++col);
      var d = "r" + (row) + "c" + (++col);
      col = col - 1; //compensate for shift of columns as a result of additions in var a,b,c,d
      calculate_landing_grid_row_show_hide_element()
      short_L.push(a, b, c, d);
      rotate_clockwise = [];
     // final_row = 17;
    }
    //the element points right (square a faces right)
    if (rotate_clockwise.length == 1) {
      if (col <= 0) {
        col = 0
      }
      if (col >= 8) {
        col = 8
      }
      var short_L = [];
      var b = "r" + row + "c" + col;
      var c = "r" + (++row) + "c" + col;
      var d = "r" + (++row) + "c" + col;
      var a = "r" + (row - 2) + "c" + (++col);
      col = col - 1
      calculate_landing_grid_row_show_hide_element()
      short_L.push(a, b, c, d);
     // final_row = 15;
    }
    //the element points down (square a faces down)
    if (rotate_clockwise.length == 2) {
      if (col <= 1) {
        col = 1
      }
      if (col >= 8) {
        col = 8
      }
      var short_L = [];
      var b = "r" + row + "c" + (--col);
      var c = "r" + row + "c" + (++col);
      var d = "r" + row + "c" + (++col);
      var a = "r" + (++row) + "c" + (col);
      col = col - 1
      calculate_landing_grid_row_show_hide_element()
      short_L.push(a, b, c, d);
     // final_row = 17;
    }
    //the element points left (square a faces left)
    if (rotate_clockwise.length == 3) {
      if (col <= 0) {
        col = 0
      }
      if (col >= 8) {
        col = 8
      }
      var short_L = [];
      var b = "r" + (row) + "c" + (++col);
      var c = "r" + (++row) + "c" + (col);
      var d = "r" + (++row) + "c" + (col);
      var a = "r" + (row) + "c" + (--col);
      calculate_landing_grid_row_show_hide_element()
      short_L.push(a, b, c, d);
     // final_row = 16;
    }
    a = short_L;
    x_cols_right = [];
    x_cols_left = [];
    short_L = [];
    for (l in a) {
      document.getElementById(a[l] + "").className = "yellow"
    }
    console.log("show row" + j)

    if (j == final_row_show_function) {
      clearTimeout(myVar);
      return;
    }
    animate_show_L(j + 1)
  }, time_show)
}

function animate_hide_L(j) {
  setting_time_for_element_motion_down()
  //remove element
  myVar = setTimeout(function () {
    if (j > 0 && j < final_row_hide_function) {
      var salmon_table_cells = document.querySelectorAll(".yellow");
      Array.prototype.forEach.call(salmon_table_cells, function (cell) {
        cell.className = "white";
      });
    }
    if (j == final_row_hide_function) {
      clearTimeout(myVar);
      return;
    }
    animate_hide_L(j + 1)
  }, time_hide)
}
//L element finish
//---------------------------------------------------------------------------
//spaghetti start
function animate_show_spaghetti(j) {
  //create short-Z element per row j for displaying it  
  setting_time_for_element_motion_down()
  myVar = setTimeout(function () {
    //var final_row;
    var row = j;
    var move_x_rows = x_cols_right.length - x_cols_left.length;
    col = col + move_x_rows;
    if (rotate_clockwise.length == 0 || rotate_clockwise.length == 2 || rotate_clockwise.length == 4) {
      //the element points up (spaghetti b a face up)
      if (col <= 0) {
        col = 0
      }
      if (col >= 9) {
        col = 9
      }
      var spaghetti = [];
      var a = "r" + row + "c" + (col);
      var b = "r" + (++row) + "c" + (col);
      var c = "r" + (++row) + "c" + (col);
      var d = "r" + (++row) + "c" + (col);
      //final_row = 16;
    }

    if (rotate_clockwise.length == 1 || rotate_clockwise.length == 3) {
      //(spaghetti, c is central)
      if (col <= 0) {
        col = 0
      }
      if (col >= 9) {
        col = 9
      }
      var spaghetti = [];
      var a = "r" + row + "c" + (col - 2);
      var b = "r" + row + "c" + (--col);
      var c = "r" + row + "c" + (++col);
      var d = "r" + row + "c" + (++col);
      //final_row = 19;
      col = col - 1
    }
    calculate_landing_grid_row_show_hide_element()
    spaghetti.push(a, b, c, d);
    a = spaghetti;
    x_cols_right = [];
    x_cols_left = [];
    square = [];
    for (l in a) {
      document.getElementById(a[l] + "").className = "orange"
    }
    if (j == final_row_show_function) {
      clearTimeout(myVar);
      return;
    }
    animate_show_spaghetti(j + 1)
  }, time_show)
}

function animate_hide_spaghetti(j) {
  setting_time_for_element_motion_down()
  //remove element
  myVar = setTimeout(function () {
    if (j > 0 && j < final_row_hide_function) {
      var salmon_table_cells = document.querySelectorAll(".orange");
      Array.prototype.forEach.call(salmon_table_cells, function (cell) {
        cell.className = "white";
      });
    }
    if (j == final_row_hide_function) {
      clearTimeout(myVar);
      return;
    }
    animate_hide_spaghetti(j + 1)
  }, time_hide)
}
//spaghetti finish
//---------------------------------------------------------------------------
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
  document.getElementById("start").addEventListener("click", function () {
    selectElement(1, 5);
  });
  /*
  document.getElementById("pause").addEventListener("click", function () {
    myFunction(1);
  });
  document.getElementById("resume").addEventListener("click", function () {
    myFunction(1);
  });
  document.getElementById("finish").addEventListener("click", function () {
   myFunction(1);
  }); */
}
//---------------------------------------------------------------------------
function move_x_cols_left(x) {
  x_cols_left.push(x)
}

function move_x_cols_right(x) {
  x_cols_right.push(x)
}

function rotate_clockwise_a_right_down_left_up(x) {
  rotate_clockwise.push(x)
}

function place_element_down(x) {
  place_element_bottom.push(x);
}

function setting_time_for_element_motion_down() {
  if (place_element_bottom.length > 0) {
    time_show = 10;
    time_hide = 9;
  } else {
    time_show = 500;
    time_hide = 499;
  }
}