Данный скрипт позволяет скрывать/показывать html-блоки при клике на управляющем элементе. Для этого подключаем прослушку ко всем тэгу **body**:
```
<script>
	$(document).ready(function(){
	    $("body").click(function(e){
	        // alert(e.target.id);
	         $(`[data-subset='${e.target.id}']`).toggle();
	    });
	});
</script>
```

При этом необходимо:
1. Присвоить id управляющему элементу
2. toggle-блоку присвоить data-аттрибут (в данному случае '*subset*') со значением id из п.1.

Пример, реализации:
```
<button id=hider>Hide block</button>
<div data-subset='hider'>
  ...some phrase
</div>
```
