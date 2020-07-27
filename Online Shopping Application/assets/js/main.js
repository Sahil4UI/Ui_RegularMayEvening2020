window.addEventListener("load", initEvents);

function initEvents() {
    showProducts();
}
var row;

function showProducts() {
    var section = document.querySelector("#products");
    row = document.createElement("div");
    row.className = "row";
    // ul.innerHTMl = "";
    products.forEach(function(obj) {
        var div = document.createElement("div");
        div.className = "products col-lg-4 col-md-6 col-sm-12";
        div.setAttribute('title', obj.p_id);
        var p_name = document.createElement("span");
        p_name.innerHTML = obj.p_name;

        var p_price = document.createElement("span");
        p_price.innerHTML = obj.p_price;

        var p_image = document.createElement("img");
        // p_image.src = obj.p_image;
        p_image.setAttribute('src', obj.p_image);
        var cart_button = document.createElement("button");
        cart_button.innerHTML = "ADD TO CART";
        cart_button.className = "btn btn-primary w-100";
        cart_button.addEventListener("click", add);
        div.appendChild(p_image);
        div.appendChild(p_name);
        div.appendChild(p_price);
        div.appendChild(cart_button);

        row.appendChild(div);


    })
    var container = document.createElement("div");
    container.className = "container-fluid";
    container.appendChild(row);
    section.appendChild(container);


}

function add() {
    var elem = event.srcElement.parentNode;
    var product = elem.childNodes;
    var elemId = elem.title;
    obj.addItem(elemId, product[1].innerHTML, product[2].innerHTML, product[0].src);
    console.log(obj.itemList);
    displayCartItem();
}

function displayCartItem() {

}