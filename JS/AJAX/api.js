window.addEventListener("load",loadAjax);
function loadAjax()
{
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function()
    {
        // if(this.readystate ==4 && this.status == 200)
        {
            var data = this.responseText;
            data = JSON.parse(data);
            var articles = data.articles;
            var ul = document.querySelector("#newsList");
            ul.style.display ="flex";
            ul.style.justifyContent ="space-around";
            ul.style.flexWrap="wrap";
            ul.style.listStyle="none";
            articles.forEach(function(obj)
            {
                var li =document.createElement("li");
                li.style.width="30%";
                li.style.padding="13px";
                li.style.border="1px solid red";
                li.style.marginBottom="20px";
                var h3 =document.createElement("h3");

                
                var headline = obj.title;
                h3.innerText = headline;
                li.appendChild(h3);
                ul.appendChild(li);

            });
        }
    }
    xhttp.open("get","news.json");
    xhttp.send();
}