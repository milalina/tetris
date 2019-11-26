
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
  display_element_moving_vertically(short_T_as_param);
 // remove_element_moving_vertically(short_T_as_param);
  console.log(short_T_as_param)
} 

function display_element_moving_vertically(array){
   animate_show(0)
      function animate_show(j){
        a=array[j];
        console.log(a)
        myVar=setTimeout(function(){
          for (l in a){document.getElementById(a[l]+"").style.backgroundColor="salmon"}
        if (j==16){
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
            b=array[i];
            console.log(b)
          for(l in b){document.getElementById(b[l]+"").style.backgroundColor="white"}}
        if (j==19){
          clearTimeout(myVar);
          return;
        }animate_hide(j+1)}
         , 500)
      }
}

/* function remove_element_moving_vertically(array){
  animate(0)
  function animate(j){
    a=array[j];
    console.log(a)
    myVar=setTimeout(function(){
      for (l in a){document.getElementById(a[l]+"").style.backgroundColor="white"}
    if (j==16){
      clearTimeout(myVar);
      return;
    }animate(j+1)}
     , 1500)
  }
} */

/*  function element_moving_vertically(array){
  for(i in array){
    a=array[i]
    for(j in a){
      setTimeout(function(){document.getElementById(a[j]+"").style.backgroundColor="salmon"}, 500, j);
   
    }
  }
} */
 
// setTimeout(()=> {k++}, 1000)  document.getElementById(a[j]+"").style.backgroundColor="salmon" 
