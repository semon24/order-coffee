const myButton = document.querySelector('.add-button');
let counter = 1;
let number = 1;
myButton.addEventListener('click', function() {
counter++;
number++;
var newBeverage = `
<form>
<fieldset class="beverage">
    <h4 class="beverage-count">Напиток №${counter}</h4>
    <button type="button" class="delete-button">❌</button>
    <label class="field">
    <span class="label-text">Я буду</span>
    <select>
        <option value="espresso">Эспрессо</option>
        <option value="capuccino" selected>Капучино</option>
        <option value="cacao">Какао</option>
    </select>
    </label>
    <div class="field">
    <span class="checkbox-label">Сделайте напиток на</span>
    <label class="checkbox-field">
        <input type="radio" name="milk" value="usual" checked />
        <span>обычном молоке</span>
    </label>
    <label class="checkbox-field">
        <input type="radio" name="milk" value="no-fat" />
        <span>обезжиренном молоке</span>
    </label>
    <label class="checkbox-field">
        <input type="radio" name="milk" value="soy" />
        <span>соевом молоке</span>
    </label>
    <label class="checkbox-field">
        <input type="radio" name="milk" value="coconut" />
        <span>кокосовом молоке</span>
    </label>
    </div>
    <div class="field">
    <span class="checkbox-label">Добавьте к напитку:</span>
    <label class="checkbox-field">
        <input type="checkbox" name="options" value="whipped cream" />
        <span>взбитых сливок</span>
    </label>
    <label class="checkbox-field">
        <input type="checkbox" name="options" value="marshmallow" />
        <span>зефирок</span>
    </label>
    <label class="checkbox-field">
        <input type="checkbox" name="options" value="chocolate" />
        <span>шоколад</span>
    </label>
    <label class="checkbox-field">
        <input type="checkbox" name="options" value="cinnamon" />
        <span>корицу</span>
    </label>
    </div>
</fieldset>
</form>
`;

var form = document.querySelector('form');
form.insertAdjacentHTML('beforeend', newBeverage);
});

document.addEventListener('click', function(event) {
if (event.target.classList.contains('delete-button')) {
    var formCount = document.querySelectorAll('fieldset.beverage').length;
    if (formCount > 1) {
    number--;
    var formToDelete = event.target.closest('.beverage');
    formToDelete.remove();
    }
}
});

function getDrinkWord(number) {
if (number === 1) {
    return 'напиток';
} else if (number >= 2 && number <= 4) {
    return 'напитка';
} else {
    return 'напитков';
}
}
const submitButtons = document.querySelector('.submit-button');


submitButtons.addEventListener('click', function(event) {
    var modalText = `Вы заказали ${number} ${getDrinkWord(number)}`;
    document.querySelector('.text').textContent = modalText;    


    event.preventDefault();
    document.querySelector('.modal-overlay').style.display = 'flex';

    var beverages = document.querySelectorAll('.beverage');
    var table = document.querySelector('.modal-table');

    beverages.forEach(function(beverage, index) {
        var drinkType = beverage.querySelector('select').value;

        var milkRadios = beverage.querySelectorAll('input[name="milk"]');
        var milk;
        milkRadios.forEach(function(radio) {
            if (radio.checked) {
                milk = radio.nextElementSibling.textContent.trim();
            }
        });

        var optionsCheckboxes = beverage.querySelectorAll('input[name="options"]:checked');
        var extras = [];
        optionsCheckboxes.forEach(function(checkbox) {
            extras.push(checkbox.nextElementSibling.textContent.trim());
        });

        var newRow = table.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.textContent = 'Напиток ' + (index + 1) + ': ' + drinkType;
        cell2.textContent = 'Молоко: ' + milk;
        cell3.textContent = 'Дополнения: ' + extras.join(', ');
    });


});
    


document.querySelector('.close-modal').addEventListener('click', function() {
    var table = document.querySelector('.modal-table');
    
    // Очищаем содержимое таблицы
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    document.querySelector('.modal-overlay').style.display = 'none';
});


let textArea = document.querySelector('.additional-text');
let output = document.querySelector('.additional-output');

textArea.addEventListener('input', function () {
    let text = textArea.value;
    let highlightedText = text.replace(/(срочно|быстрее|побыстрее|скорее|поскорее|очень нужно)/gi, "<b>$1</b>");
    output.innerHTML = highlightedText;
});
