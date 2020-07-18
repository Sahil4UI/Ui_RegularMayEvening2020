

window.addEventListener("scroll",scrollEvent);

function scrollEvent()
{
   section = document.querySelectorAll("section");

   var scrollY= window.scrollY;
//    console.log(scrollY);

  for(var i=0;i<section.length;i++)
  {
    var divScrollY = scrollY-section[i].offsetTop;
    //    console.log("div Scroll Y : "+divScrollY); 
    
       if (divScrollY > 50 )
       {
           section[i].className="active";
       }
       else{
        section[i].className="";
    
       }
  }


   

}
