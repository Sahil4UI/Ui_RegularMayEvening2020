   window.addEventListener('load',init);
        function init()
        {
        document.querySelector("#btn").addEventListener("click",showName);
        }
        function showName()
        {
            name = document.getElementById("box").value;
            document.querySelector("#result").innerText = name;
        }