window.addEventListener('load',init);
var num1,num2,result;
function init()
{
    document.querySelector(".add").addEventListener("click",addition);
    document.querySelector(".sub").addEventListener("click",subtraction);
    document.querySelector(".mul").addEventListener("click",multiplication);
    document.querySelector(".div").addEventListener("click",division);

    num1 = document.querySelector("#box1");
    num2 = document.querySelector("#box2");
    result = document.querySelector("#result");
}

function addition()
{
    result.innerText = parseInt(num1.value)+parseInt(num2.value);
}

function subtraction()
{
    result.innerText = parseInt(num1.value)-parseInt(num2.value);
}
function multiplication()
{
    result.innerText = parseInt(num1.value)*parseInt(num2.value);
}
function division()
{
    result.innerText = parseInt(num1.value)/parseInt(num2.value);
}