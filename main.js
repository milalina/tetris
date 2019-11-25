
generate_tetris_grid()

function generate_tetris_grid(){
  var rows=18;
  var cols=10;
    var grid = document.getElementById("tetris-grid");
    var tblBody = document.createElement("tbody");
    for (var i = 0; i<rows; i++) {
        var row = document.createElement("tr");
        for (var j=0; j<cols; j++) {
          var cell = document.createElement("td");
          cell.id="r"+i+"c"+j
          //var cellText = document.createTextNode("cell in row "+i+", column "+j);
          //cell.appendChild(cellText);
          row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
 grid.appendChild(tblBody);
 grid.setAttribute("border", "2");
 //element_moving_vertically()
 callShortT()
} 

 function callShortT(){
 // j = 5;
  var k;
  var i;
  for(var k=0; k<18; k++){
    i=k;
    j=5;
    var short_T=[];
    var a = "r"+i+"c"+j;
    var b = "r"+(++i)+"c"+(--j);
    var c = "r"+(i)+"c"+(++j);
    var d = "r"+(i)+"c"+(++j);
    short_T.push(a,b,c,d);
    element_moving_vertically(short_T);
  }
} 

 function element_moving_vertically(array){
  for(i in array){
    document.getElementById(array[i]+"").style.backgroundColor="salmon"
  }
}
 
