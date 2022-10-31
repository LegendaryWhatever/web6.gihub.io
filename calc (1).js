function calculator() {
    var price = Number(document.getElementById("price").value);
    var quantity = Number(document.getElementById("quantity").value);
    if(quantity<0) quantity=-quantity;
    var result = price * quantity;

    if (Number.isNaN(result)) {
        document.getElementById("result").innerHTML = "Не удалось посчитать";
    } else {
        document.getElementById("result").innerHTML = result;
    }
}
