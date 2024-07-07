function buttonclick(val){
    document.getElementById("screen").value+=val;

}
function allClear(){
   document.getElementById("screen").value="";
}
function lastClear(){
   // document.getElementById("screen").value.slice(0,-1);
}

function equalClick(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result;
}
