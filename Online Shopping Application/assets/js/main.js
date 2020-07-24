window.addEventListener("load", initEvents);

function initEvents() {
    showProducts();
}

function showProducts() {
    var ul = document.querySelector("#products");
    ul.innerHTMl = "";
    products.forEach(function(obj) {
        var li = document.createElement("li");
        li.className = "products";
        var p_name = document.createElement("span");
        p_name.innerHTML = obj.p_name;

        var p_price = document.createElement("span");
        p_price.innerHTML = obj.p_price;


        var p_image = document.createElement("img");
        // p_image.src = obj.p_image;
        p_image.setAttribute('src', obj.p_image);
        var cart_button = document.createElement("button");
        cart_button.innerHTML = "ADD TO CART";
        cart_button.className = "btn btn-primary w-100"
        li.appendChild(p_image);
        li.appendChild(p_name);
        li.appendChild(p_price);
        li.appendChild(cart_button);


        ul.appendChild(li);




    })



}