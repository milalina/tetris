
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
          row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
 grid.appendChild(tblBody);
 grid.setAttribute("border", "2");
 createArrayForDisplayingShortTverticalMovement()
} 

 function createArrayForDisplayingShortTverticalMovement(){
  var k;
  var l;
  var i;
  var show_short_T_as_param=[];
  var remove_short_T_as_param=[];
  for(var k=0; k<17; k++){
    i=k;
    j=5;
    var short_T=[];
    var a = "r"+i+"c"+j;
    var b = "r"+(++i)+"c"+(--j);
    var c = "r"+(i)+"c"+(++j);
    var d = "r"+(i)+"c"+(++j);
    short_T.push(a,b,c,d);
    show_short_T_as_param.push(short_T)
  }
  for(var l=0; l<16; l++){
    i=l;
    j=5;
    var remove_short_T=[];
    var a = "r"+i+"c"+j;
    var b = "r"+(++i)+"c"+(--j);
    var c = "r"+(i)+"c"+(++j);
    var d = "r"+(i)+"c"+(++j);
    remove_short_T.push(a,b,d);
    remove_short_T_as_param.push(remove_short_T)
  }
  display_element_moving_vertically_position_1(show_short_T_as_param, remove_short_T_as_param);
} 

function display_element_moving_vertically_position_1(array1, array2){
   animate_show(0)
      function animate_show(j){
        a=array1[j];
        myVar=setTimeout(function(){
          for (l in a){document.getElementById(a[l]+"").style.backgroundColor="salmon"}
        if (j==17){
          clearTimeout(myVar);
          return;
        }animate_show(j+1)}
         , 500)
      } 
       animate_hide(0)
      function animate_hide(j){
        myVar=setTimeout(function(){
         if(j>0 && j<19){
           i=j-1;
            b=array2[i];
          for(l in b){document.getElementById(b[l]+"").style.backgroundColor="white"}}
        if (j==19){
          clearTimeout(myVar);
          return;
        }animate_hide(j+1)}
         , 500)
      }
}
