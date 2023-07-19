function display(val){
    document.getElementById("result").value += val
}//display the digits and signs using the button value

function solve (){
    let x = document.getElementById("result").value
    let y = eval(x);
    document.getElementById("result").value =y
}//evalutes the equation in the input

function clearScreen(){
    document.getElementById("result").value = ""
}//makes input blank