const myButton = document.querySelector('.add-button');
let counter = 1;
myButton.addEventListener('click', function() {
    counter++;
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
    <div style="margin-top: 30px">
      <button type="submit" class="submit-button">Готово</button>
    </div>
  </form>
    `;

    var form = document.querySelector('form');
    form.insertAdjacentHTML('beforeend', newBeverage);
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
      var formCount = document.querySelectorAll('fieldset.beverage').length;
      if (formCount > 1) {
        var readyToDelete = event.target.closest('form').querySelector('.submit-button');
        console.log(event.target);
        readyToDelete.remove();
        var formToDelete = event.target.closest('.beverage');
        console.log(formToDelete)
        formToDelete.remove();
        console.log(1)
        console.log(2)
      }
    }
  });
  