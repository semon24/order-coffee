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
    document.querySelector('.modal-content').textContent = modalText;    

    event.preventDefault();
    document.querySelector('.modal-overlay').style.display = 'flex';
});


document.querySelector('.close-modal').addEventListener('click', function() {
console.log("ASDFASDFSADFSD");

document.querySelector('.modal-overlay').style.display = 'none';
});
