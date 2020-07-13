
window.addEventListener("load",function()


{
   var numBtn= document.querySelectorAll(".num");
   for (var i=0;i<numBtn.length;i++)
   {
       numBtn[i].addEventListener("click",appendNum);
   }
});

function appendNum()
{   var textbox= document.querySelector("#box");
    // console.log(textbox);
    textbox.value += event.srcElement.innerText;
}