
window.addEventListener("load",function()


{
   var numBtn= document.querySelectorAll(".num");
   for (var i=0;i<numBtn.length;i++)
   {
       numBtn[i].addEventListener("click",appendNum);
   }
   var oprBtn= document.querySelectorAll(".opr");
   for (var i=0;i<oprBtn.length;i++)
   {
       oprBtn[i].addEventListener("click",appendOpr);
   }
   document.querySelector(".result").addEventListener("click",Calc);
   document.querySelector(".clear").addEventListener("click",clear);
});

var r1='';
var flag =false;

function appendNum()
{   var textbox= document.querySelector("#box");
    // console.log(textbox);
    r1+= event.srcElement.innerText;
    textbox.value = r1;
    flag= false;
}

function appendOpr()
{   
    var opr =event.srcElement.innerText;
    if (!flag == true)
    {
        r1+=opr;
        flag = true;
    }
    else{
        r1 = r1.slice(0,r1.length-1);
        r1+=opr;
    }
    document.querySelector("#box").value=r1;
    
    
}

function Calc()
{
    document.querySelector("#box").value = eval(document.querySelector("#box").value);
    
}
function clear()
{
    document.querySelector("#box").value = "";
    r1="";
}