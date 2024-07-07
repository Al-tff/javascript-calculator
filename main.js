function buttonclick(val) {
    document.getElementById("screen").value += val;
}
function allClear() {
   document.getElementById("screen").value = "";
}
function lastClear(){
    let result = document.getElementById("screen");
    result.value = result.value.slice(0, -1);
}
function equalClick() {
    let text = document.getElementById("screen").value;
    let result = eval(text);
    document.getElementById("screen").value = result;
}
