Обращение к последнему элементу массива
==

К сожалению, инструменты JavaScript не позволяет обратиться к последнему элементу в массиве, с помощью коротких команд. Традиционным считается обращение вида:  

    let array = [1, 2, 3, 4];
    let lastElem = array[array.length - 1];

Вроде бы, читабельно, но что если `array` возвращается функцией и хочется тутже вызвать его последний элемент?

    let lastElem = SomeObj.method() [SomeObj.method() - 1]     

Конечно же нет. Эх, Python, где же твой `array[-1]`. В общем, тут есть 2 варианта:

1.  Если нас не беспокоит судьба самого массива, то последний элемент извлекается так:  

        let lastElem = SomeObj.method().pop();

2. Также можно один раз добавить метод в `Array.prototype`.  
       Array.prototype.last = function() {
        return this[this.length - 1]
       }
       let lastElem = SomeObj.method().last();

Массивоподобные объекты не являются объектами `Array`. Поэтому чтобы использовать приведённые методы необходимо их преобразовать, с помощью метода `Array.from()`. Например:  

    let lastElem = Array.from(window.document.querySelectorAll('img')).pop()
    let lastElem = Array.from('string').pop() // lastElem = 'g'
