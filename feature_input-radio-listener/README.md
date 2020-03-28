# Определение выбранного **radio** без цикла.

Для определения выбранного _radio_
```
<div id="_options">
  <input type="radio" name="option" value="opt_1">some text 1<br>
  <input type="radio" name="option" value="opt_2">some text 2<br>
  <input type="radio" name="option" value="opt_3">some text 3<br>
</div>
```

...без прохода по циклу, можно обойтись следующим скриптом:
```
document.querySelector('#_options').onclick = function(){
  console.log(this.querySelector(`[name="option"]:checked`))
}
```

Реализация:[тут](https://farscince.github.io/input-radio-listener/)
