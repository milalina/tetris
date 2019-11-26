
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
  var k;
  var i;
  var short_T_as_param=[];
  for(var k=0; k<17; k++){
    i=k;
    j=5;
    var short_T=[];
    var a = "r"+i+"c"+j;
    var b = "r"+(++i)+"c"+(--j);
    var c = "r"+(i)+"c"+(++j);
    var d = "r"+(i)+"c"+(++j);
    short_T.push(a,b,c,d);
    short_T_as_param.push(short_T)
    //console.log(short_T_as_param)
   // short_T=[]
  }
  element_moving_vertically(short_T_as_param);
  console.log(short_T_as_param)
} 

function element_moving_vertically(array){
  for(i in array){
    a=array[i]
    animate(0)
    function animate(j){
      console.log("finally I am here")
      myVar=setTimeout(function(){document.getElementById(a[j]+"").style.backgroundColor="salmon"
      if (j==4){
        clearTimeout(myVar);
        return;
      }animate(j+1)}
       , 1000)
    }
  } 
}

/*  function element_moving_vertically(array){
  for(i in array){
    a=array[i]
    for(j in a){
      setTimeout(function(){document.getElementById(a[j]+"").style.backgroundColor="salmon"}, 500, j);
   
    }
  }
} */
 
// setTimeout(()=> {k++}, 1000)  document.getElementById(a[j]+"").style.backgroundColor="salmon" 
