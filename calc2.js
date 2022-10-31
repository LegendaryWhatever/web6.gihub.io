function calc() {
    //получаем ссылку на элемент Select
    let cheese = document.getElementById("cheese");
    //получаем ссылку на чекбокс
    let check1 = document.getElementById("check1");
    //получаем ссылку на элемент input
    let count = document.getElementById("count");
    //получаем ссылку на элемент результата
    let result = document.getElementById("result-rad");
    //получаем ссылку на радиокнопки
    let radios = document.getElementsByName("options");

    //блоки для сокрытия
    let radioDiv = document.getElementById("radios");
    let checkDiv = document.getElementById("checkboxes");

    //проверка на скрытие блоков
    if (cheese.selectedIndex == 2) {
        radioDiv.style.display = "block";
        checkDiv.style.display = "none";
    } else if (cheese.selectedIndex == 3) {
        radioDiv.style.display = "none";
        checkDiv.style.display = "block";
        uncheckAllRadio(radios);
    } else {
        radioDiv.style.display = "none";
        checkDiv.style.display = "none";
        uncheckAllRadio(radios);
    }

    //высчитывание цены
    let price = 0;
    price += parseInt(cheese.options[cheese.selectedIndex].value);
    for (let radio of radios) {
        if (radio.checked) {
            price += parseInt(radio.value);
        }
    }
    price += (check1.checked == true) ? parseInt(check1.value) : 0;
    let countInt = parseInt(count.value);
    if(countInt<0) countInt=-countInt;
    price = countInt * price;

    //проверка на корректность
    if (Number.isNaN(price)) {
        result.placeholder = "Введите кол-во товаров ниже";
    } else {
        result.placeholder = price;
    }
}

function uncheckAllRadio(radios) {
    for (let radio of radios) {
        radio.checked = false;
    }
}