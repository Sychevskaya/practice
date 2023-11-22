//464 Модифицируйте мой код так, чтобы по клику на абзац к его содержимому прибавлялась единица.
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
//     p.addEventListener("click",function(){
//         p.textContent+="1";
//     })
//     parent.appendChild(p);
// }

//465.1 Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// let ul = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	let li = document.createElement('li');
// 	li.textContent = elem;
//     ul.appendChild(li);
// }

//465.2 Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.
// let ul = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	let li = document.createElement('li');
// 	li.textContent = elem;
//     li.addEventListener("click",function(){
//         console.log(li.textContent)
//     })
//     ul.appendChild(li);
// }

//465.3 Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.
// let ul = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	let li = document.createElement('li');
// 	li.textContent = elem;
//     li.addEventListener("click",function(){
//         li.textContent+="!"
//     })
//     ul.appendChild(li);
// }

//465.4 Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.
// let ul = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	let li = document.createElement('li');
// 	li.textContent = elem;
//     li.addEventListener("click",function func(){
//         li.textContent+="!";
//         li.removeEventListener("click", func)
//     })
//     ul.appendChild(li);
// }


//466.1 Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.
// let table = document.querySelector('#table');
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//466.2 Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.
// let table = document.querySelector('#table');
// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//466.3 Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'.
// let table = document.querySelector('#table');
// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
//         td.textContent+="x"
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//466.4 Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).
// let table = document.querySelector('#table');
// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// input2.addEventListener("blur", function(){
//     for (let i = 0; i < input1.value; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < input2.value; i++) {
// 		let td = document.createElement('td');
//         td.textContent+="x"
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }
// })

//467.1 Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.
// let table = document.querySelector('#table');
// let k = 1;
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		td.textContent = k; 
// 		k++; 
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }


//467.2 Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.
// let table = document.querySelector('#table');
// let k = 2; 
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		td.textContent = k; 
// 		k+=2;
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//468.1 Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table.
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]; 
// let table = document.querySelector('#table');
// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem;
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//468.2 Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов.
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]; 
// let table = document.querySelector('#table');
// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem**2;
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//469.1 Выведите элементы этого массива в виде HTML таблицы.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let employe of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = employe.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = employe.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = employe.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// }

//469.2 Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let employe of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = employe.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = employe.age;
//     td2.addEventListener("click", function(){
//         td2.textContent = employe.age+=1;
//     })
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = employe.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// }

//469.3 Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let employe of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = employe.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = employe.age;
//     td2.addEventListener("click", function(){
//         td2.textContent = employe.age+=1;
//     })
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = employe.salary;
//     td3.addEventListener("click", function(){
//         td3.textContent = employe.salary+= employe.salary*0.1;
//     })
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// }


//470.1 Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.
// let table = document.querySelector('#table');
// let button = document.querySelector('#button');
// button.addEventListener("click", function(){
//     let tr = document.createElement('tr');
//     tr.textContent+="x"
//     table.appendChild(tr);
// })


//470.2 Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.
// let table = document.querySelector('#table');
// let button = document.querySelector('#button');
// let num = 1;
// button.addEventListener("click", function(){
//     ++num;
//     let trr = document.createElement('tr');
//     for(let i=0; i<num; i++){
//         let td = document.createElement('td');
//         trr.appendChild(td);
//     }
//     table.appendChild(trr);
//     let trs = document.querySelectorAll('#table tr');
//     for (let tr of trs) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
// })


//471 Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.
// let tds = document.querySelectorAll('#table td');
// let button = document.querySelector('#button');
// button.addEventListener("click", function(){
//     for (let td of tds) {
//         td.textContent *=2;
//     }
// })


//472 Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.
// let ul = document.querySelector('#parent');
// let button = document.querySelector('#button');
// button.addEventListener("click", function(){
//     let li = document.createElement('li');
//     li.textContent = 23;
//     ul.appendChild(li);
//     let lies = document.querySelectorAll('#parent li');
//     for(let elem of lies){
//         elem.addEventListener('click', function() {
//             this.remove();
//         });
//     }
// })

//473 Самостоятельно, не подсматривая в мой код, решите описанную задачу.
// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');
// remove.addEventListener('click', function(event) {
// 	elem.remove();
// 	event.preventDefault();
// });

//474.1 Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
// let li = document.querySelectorAll('#parent li');
// for(let elem of li){
//     let a = document.createElement("a");
//     a.href = "";
//     a.textContent  = " remove"
//     elem.appendChild(a);
//     a.addEventListener("click", function(event){
//         elem.remove();
//         event.preventDefault()
//     })


// }


//474.2Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.
// let trs = document.querySelectorAll('#table tr');
// for(let tr of trs){
//     let td = document.createElement("td");
//     let a = document.createElement("a");
//     a.href = "";
//     a.textContent  = " remove"
//     td.appendChild(a)
//     tr.appendChild(td)
//     a.addEventListener("click", function(event){
//         tr.remove();
//         event.preventDefault()
// })
// }

//475.1 Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут.
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
// input.value = elem.textContent;
// input.addEventListener('input', function() {
// 	elem.textContent = this.value;
// })


//475.2 Самостоятельно, не подсматривая в мой код, решите описанную задачу.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		this.remove();
// 	});
// 	elem.parentElement.appendChild(input);
// });


//476 Самостоятельно, не подсматривая в мой код, решите описанную задачу.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function func() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
// 	elem.textContent = '';
// 	elem.appendChild(input);
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		elem.addEventListener('click', func); 
// 	});
// 	elem.removeEventListener('click', func);
// });


//477.1 Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредатировать текст этой li.
// let li = document.querySelectorAll('#parent li');
// for(let elem of li){
// 	elem.addEventListener("click", function func(){
// 		let input = document.createElement("input")
// 		input.value = elem.textContent;
// 		elem.textContent = ""
// 		elem.appendChild(input)
// 		input.addEventListener("blur", function(){
// 			elem.textContent = input.value
// 			elem.addEventListener('click', func); 
// 		})
// 		elem.removeEventListener('click', func);
// 	})
// }


//477.2 Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки.
// let td = document.querySelectorAll('#table td');
// for(let elem of td){
// 	elem.addEventListener("click", function func(){
// 		let input = document.createElement("input")
// 		input.value = elem.textContent;
// 		elem.textContent = ""
// 		elem.appendChild(input)
// 		input.addEventListener("blur", function(){
// 			elem.textContent = input.value
// 			elem.addEventListener('click', func); 
// 		})
// 		elem.removeEventListener('click', func);
// 	})
// }

//478.1 Добавьте ссылку на удаление в конец каждого абзаца. Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования.
// let span = document.querySelectorAll('#parent span');
// let ps = document.querySelectorAll('#parent p');
// for(let elem of span){
// 	elem.addEventListener("click", function func(){
// 		let input = document.createElement("input")
// 		input.value = elem.textContent;
// 		elem.textContent = ""
// 		elem.appendChild(input)
// 		input.addEventListener("blur", function(){
// 			elem.textContent = input.value
// 			elem.addEventListener('click', func); 
// 		})
// 		elem.removeEventListener('click', func);
// 	})
// }
// for(let p of ps){
// 	let a = document.createElement("a");
//     a.href = "";
//     a.textContent  = " remove"
//     p.appendChild(a);
// 	a.addEventListener("click", function(event){
// 		p.remove();
// 		event.preventDefault()
// 	})
// }


//478.2 Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление.
// let ps = document.querySelectorAll('#parent p');
// for(let p of ps){
// 	let span = document.createElement("span")
// 	span.textContent = p.textContent
// 	p.textContent = "";
// 	span.addEventListener("click", function func(){
// 	let input = document.createElement("input")
// 	input.value = span.textContent;
// 	span.textContent = ""
// 	span.appendChild(input)
// 	input.addEventListener("blur", function(){
// 		span.textContent = input.value
// 		span.addEventListener('click', func); 
// 	})
// 	span.removeEventListener('click', func);
// 	})
// 	p.appendChild(span)
// 	let a = document.createElement("a");
//     a.href = "";
//     a.textContent  = " remove"
//     p.appendChild(a);
// 	a.addEventListener("click", function(event){
// 		p.remove();
// 		event.preventDefault()
// 	})
// }


// 479.1 Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет).
// let ps = document.querySelectorAll('p')
// for(let p of ps){
// 	let span = document.createElement("span")
// 	span.textContent = p.textContent
// 	p.textContent = "";
// 	p.appendChild(span)
// 	let a = document.createElement("a");
//     a.href = "";
//     a.textContent  = "link"
//     p.appendChild(a);
// 	a.addEventListener("click", function(event){
// 		span.classList.add("line-through");
// 		event.preventDefault()
// 	})
// }

// 479.2 Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым).
// let ps = document.querySelectorAll('p')
// for(let p of ps){
// 	let span = document.createElement("span")
// 	span.textContent = p.textContent
// 	p.textContent = "";
// 	p.appendChild(span)
// 	let a = document.createElement("a");
//     a.href = "";
//     a.textContent  = "link"
//     p.appendChild(a);
// 	a.addEventListener("click", function func(event){
// 		span.classList.add("line-through");
// 		event.preventDefault()
// 		a.remove()
// 	})
// }

// 479.3 Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со ссылкой. По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона.
// let trs = document.querySelectorAll('#table tr');
// for(let tr of trs){
//     let td = document.createElement("td");
//     let a = document.createElement("a");
//     a.href = "";
//     a.textContent  = "green"
//     td.appendChild(a)
//     tr.appendChild(td)
//     a.addEventListener("click", function(event){
// 		tr.classList.toggle("green");
// 		event.preventDefault()
// })
// }


// 480 Модифицируйте мой код так, чтобы была только одна кнопка. Пусть по первому клику на эту кнопку элемент показывается, а по второму - скрывается.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	elem.classList.toggle('hidden');
// });


// 481.1 Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.
// let buttons = document.querySelectorAll('button');
// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		let elem = document.querySelector('#' + this.dataset.elem);
// 		elem.classList.toggle('hidden');
// 	});
// }


// 481.2 Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.
// let buttons = document.querySelectorAll('button');
// let elems   = document.querySelectorAll('p');
// for (let i = 0; i < buttons.length; i++) { 
// 	buttons[i].addEventListener('click', function() {
// 		elems[i].classList.toggle('hidden');
// 	});
// }

// 481.3 Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.
// let buttons = document.querySelectorAll('button');
// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		this.previousElementSibling.classList.toggle('hidden');
// 	});
// }


// 482.1 Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном.
// let lies = document.querySelectorAll("#parent li")
// for (let li of lies) {
// 	li.addEventListener('click', function() {
// 		this.classList.add('active');
// 	});
// }

// 482.2 Модифицируйте предыдущую задачу так, чтобы по нажатию на активированный пункт списка активация с него снималась.
// let lies = document.querySelectorAll("#parent li")
// for (let li of lies) {
// 	li.addEventListener('click', function() {
// 		this.classList.toggle('active');
// 	});
// }

// 483 Разберите мой код, а затем самостоятельно повторите решение этой задачи.
// let tds = document.querySelectorAll('#table td');
// let color = 'color1';
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		if (color == 'color1') {
// 			color = 'color2'
// 		} else {
// 			color = 'color1'
// 		}
		
// 		this.classList.add(color);
// 	});
// }

// 484.1 Дан массив. Выведите его элементы в виде списка ul.
// let arr = [1, 2, 3, 4]
// let ul = document.createElement("ul")
// for(let i = 0; i < arr.length; i++){
// 	let li = document.createElement("li")
// 	li.textContent = arr[i]
// 	ul.appendChild(li)
// }
// document.body.appendChild(ul)

//484.2 Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.
// let arr = [1, 2, 3, 4]
// let ul = document.createElement("ul")
// for(let i = 0; i < arr.length; i++){
// 	let li = document.createElement("li")
// 	li.textContent = arr[i]
// 	li.addEventListener("click", function func(){
// 		let input = document.createElement("input")
// 		input.value = li.textContent;
// 		li.textContent = ""
// 		li.appendChild(input)
// 		input.addEventListener("blur", function(){
// 			li.textContent = input.value
// 			li.addEventListener('click', func); 
// 		})
// 		li.removeEventListener('click', func);
// 	})
// 	ul.appendChild(li)
// }	
// document.body.appendChild(ul)


//484.3 Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать.
// let arr = [1, 2, 3, 4]
// let ul = document.createElement("ul")
// for(let i = 0; i < arr.length; i++){
// 	let li = document.createElement("li")
// 	li.textContent = arr[i]
// 	ul.appendChild(li)
// }
// function func1(li){
//     li.addEventListener("click", function func(){
// 		let input = document.createElement("input")
// 		input.value = li.textContent;
// 		li.textContent = ""
// 		li.appendChild(input)
// 		input.addEventListener("blur", function(){
// 			li.textContent = input.value
// 			li.addEventListener('click', func); 
// 		})
// 		li.removeEventListener('click', func);
// 	})
// }
// let input_enter = document.createElement("input")
// input_enter.addEventListener("blur", function(){
//     let li = document.createElement("li");
//     li.textContent = input_enter.value;
//     input_enter.value = "";
//     func1(li)
//     ul.appendChild(li)
// })
// document.body.appendChild(ul)
// document.body.appendChild(input_enter)
// let lies = document.querySelectorAll("li")
// for(let li of lies){
//     func1(li)
// }



// 484.4 Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.
// let arr = [1, 2, 3, 4]
// let ul = document.createElement("ul")
// for(let i = 0; i < arr.length; i++){
// 	let li = document.createElement("li")
// 	li.textContent = arr[i]
// 	ul.appendChild(li)
// }
// function func1(li){
//     li.addEventListener("click", function func(){
// 		let input = document.createElement("input")
// 		input.value = li.textContent;
// 		li.textContent = ""
// 		li.appendChild(input)
// 		input.addEventListener("blur", function(){
// 			li.textContent = input.value
// 			li.addEventListener('click', func); 
// 		})
// 		li.removeEventListener('click', func);
// 	})
// }

// function func2(li){
//     let p = document.createElement("p");
//     let a = document.createElement("a");
//     a.href = ""
//     a.textContent = "remove"
//     a.addEventListener("click", function(event){
//         p.remove()
//         event.preventDefault()
//     })
//     p.appendChild(li)
//     p.appendChild(a)
//     ul.appendChild(p)
// }

// let input_enter = document.createElement("input")
// input_enter.addEventListener("blur", function(){
//     let li = document.createElement("li");
//     li.textContent = input_enter.value;
//     input_enter.value = "";
//     func1(li)
//     func2(li)
// })
// document.body.appendChild(ul)
// document.body.appendChild(input_enter)
// let lies = document.querySelectorAll("li")
// for(let li of lies){
//     func2(li)
//     func1(li)
    
// }

// 484.5 Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li.
// let arr = [1, 2, 3, 4]
// let ul = document.createElement("ul")
// for(let i = 0; i < arr.length; i++){
// 	let li = document.createElement("li")
// 	li.textContent = arr[i]
// 	ul.appendChild(li)
// }
// function func1(li){
//     li.addEventListener("click", function func(){
// 		let input = document.createElement("input")
// 		input.value = li.textContent;
// 		li.textContent = ""
// 		li.appendChild(input)
// 		input.addEventListener("blur", function(){
// 			li.textContent = input.value
// 			li.addEventListener('click', func); 
// 		})
// 		li.removeEventListener('click', func);
// 	})
// }

// function func2(li){
//     let p = document.createElement("p");
//     let a = document.createElement("a");
//     a.href = ""
//     a.textContent = "удалить"
//     a.addEventListener("click", function(event){
//         p.remove()
//         event.preventDefault()
//     })
//     let a_line = document.createElement("a");
//     a_line.href = ""
//     a_line.textContent = "перечеркнуть"
//     a_line.addEventListener("click", function(event){
//         li.classList.add("line-through")
//         event.preventDefault()
//     })
    
//     p.appendChild(li)
//     p.appendChild(a)
//     p.appendChild(a_line)
//     ul.appendChild(p)
// }

// let input_enter = document.createElement("input")
// input_enter.addEventListener("blur", function(){
//     let li = document.createElement("li");
//     li.textContent = input_enter.value;
//     input_enter.value = "";
//     func1(li)
//     func2(li)
// })
// document.body.appendChild(ul)
// document.body.appendChild(input_enter)
// let lies = document.querySelectorAll("li")
// for(let li of lies){
//     func2(li)
//     func1(li)
    
// }


//484.6 Выведите этих работников в HTML таблице.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 
// 		400}, 
// 	{name: 'employee2', age: 31, salary: 
// 		500}, 
// 	{name: 'employee3', age: 32, salary: 
// 		600}, 
// ];
// let table = document.createElement('table');
// for (let employe of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = employe.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = employe.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = employe.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// }
// document.body.appendChild(table)



// 484.7 Добавьте ячейкам созданной таблицы возможность редактирования.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 
// 		400}, 
// 	{name: 'employee2', age: 31, salary: 
// 		500}, 
// 	{name: 'employee3', age: 32, salary: 
// 		600}, 
// ];
// let table = document.createElement('table');
// for (let employe of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = employe.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = employe.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = employe.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// }
// document.body.appendChild(table)

// let td = document.querySelectorAll('td');
// for(let elem of td){
// 	elem.addEventListener("click", function func(){
// 		let input = document.createElement("input")
// 		input.value = elem.textContent;
// 		elem.textContent = ""
// 		elem.appendChild(input)
// 		input.addEventListener("blur", function(){
// 			elem.textContent = input.value
// 			elem.addEventListener('click', func); 
// 		})
// 		elem.removeEventListener('click', func);
// 	})
// }


// 484.8 Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 
// 		400}, 
// 	{name: 'employee2', age: 31, salary: 
// 		500}, 
// 	{name: 'employee3', age: 32, salary: 
// 		600}, 
// ];
// let table = document.createElement('table');
// for (let employe of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = employe.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = employe.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = employe.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// }

// document.body.appendChild(table)
// let td = document.querySelectorAll('td');
// for(let elem of td){
// 	elem.addEventListener("click", function func(){
// 		let input = document.createElement("input")
// 		input.value = elem.textContent;
// 		elem.textContent = ""
// 		elem.appendChild(input)
// 		input.addEventListener("blur", function(){
// 			elem.textContent = input.value
// 			elem.addEventListener('click', func); 
// 		})
// 		elem.removeEventListener('click', func);
// 	})
// }
// let trs = document.querySelectorAll('tr');
// for(let tr of trs){
//     let td = document.createElement("td");
//     let a = document.createElement("a");
//     a.href = "";
//     a.textContent  = "remove"
//     td.appendChild(a)
//     tr.appendChild(td)
//     a.addEventListener("click", function(event){
// 		tr.remove();
// 		event.preventDefault()
// })
// }


//484.9 Сделайте под таблицей 3 инпута и кнопку для добавление нового работника. Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию на кнопку новый работник добавляется в таблицу. Реализуйте редактирование ячеек для вновь добавленных работников.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 
// 		400}, 
// 	{name: 'employee2', age: 31, salary: 
// 		500}, 
// 	{name: 'employee3', age: 32, salary: 
// 		600}, 
// ];
// let table = document.createElement('table');
// for (let employe of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = employe.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = employe.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = employe.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// }

// document.body.appendChild(table)

// let input1 = document.createElement("input")
// let input2 = document.createElement("input")
// let input3 = document.createElement("input")
// let button = document.createElement("button")
// button.textContent = "добавить"
// document.body.appendChild(input1)
// document.body.appendChild(input2)
// document.body.appendChild(input3)
// document.body.appendChild(button)
// button.addEventListener("click", function(){
//     let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = input1.value;
//     input1.value = ""
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = input2.value
//     input2.value = ""
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent =  input3.value;
//     input3.value = ""
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
//     let td = document.querySelectorAll('td');
//     for(let elem of td){
//         func1(elem)
//     }
//     func2(tr)
// })

// let td = document.querySelectorAll('td');
// function func1(elem){
//     	elem.addEventListener("click", function func(){
// 		let input = document.createElement("input")
// 		input.value = elem.textContent;
// 		elem.textContent = ""
// 		elem.appendChild(input)
// 		input.addEventListener("blur", function(){
// 			elem.textContent = input.value
// 			elem.addEventListener('click', func); 
// 		})
// 		elem.removeEventListener('click', func);
// 	})
// }
// for(let elem of td){
//     func1(elem)
// }

// let trs = document.querySelectorAll('tr');
// function func2(tr){
//         let td = document.createElement("td");
//     let a = document.createElement("a");
//     a.href = "";
//     a.textContent  = "remove"
//     td.appendChild(a)
//     tr.appendChild(td)
//     a.addEventListener("click", function(event){
// 		tr.remove();
// 		event.preventDefault()
// })
// }

// for(let tr of trs){
//     func2(tr)

// }




//484.10 Выведите на экран каждого работника в своем теге li тега ul.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let ul = document.createElement("ul");
// for(let elem of employees){
//     let li = document.createElement("li");
//     for(let key in elem){
//         let span = document.createElement("span");
//         span.textContent = elem[key] + " "
//         li.appendChild(span)
//     }
//     ul.appendChild(li)
// }
// document.body.appendChild(ul)

//484.11 Сделайте так, чтобы по клику на имя, возраст или зарплату работника появлялся инпут для редактирования этого поля.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let ul = document.createElement("ul");
// for(let elem of employees){
//     let li = document.createElement("li");
//     for(let key in elem){
//         let span = document.createElement("span");
//         span.textContent = elem[key] + " "
//         span.addEventListener("click", function func(){
// 		let input = document.createElement("input")
// 		input.value = span.textContent;
// 		span.textContent = ""
// 		span.appendChild(input)
// 		input.addEventListener("blur", function(){
// 			span.textContent = input.value
// 			span.addEventListener('click', func); 
// 		})
// 		span.removeEventListener('click', func);
// 	})
//         li.appendChild(span)
//     }
//     ul.appendChild(li)
// }
// document.body.appendChild(ul)


//484.12 Добавьте в конец каждого тега li ссылку на удаление этого li из списка.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let ul = document.createElement("ul");
// for(let elem of employees){
//     let li = document.createElement("li");
//     for(let key in elem){
//         let span = document.createElement("span");
//         span.textContent = elem[key] + " "
//         span.addEventListener("click", function func(){
// 		let input = document.createElement("input")
// 		input.value = span.textContent;
// 		span.textContent = ""
// 		span.appendChild(input)
// 		input.addEventListener("blur", function(){
// 			span.textContent = input.value
// 			span.addEventListener('click', func); 
// 		})
// 		span.removeEventListener('click', func);
// 	})
//         li.appendChild(span)
//     }
//     let a = document.createElement("a");
//     a.href = "";
//     a.textContent  = "remove"
//     li.appendChild(a)
//     a.addEventListener("click", function(event){
// 		li.remove();
// 		event.preventDefault()
// })

//     ul.appendChild(li)
// }
// document.body.appendChild(ul)



// 484.13 Под списком сделайте форму для добавления нового работника.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let ul = document.createElement("ul");
// for(let elem of employees){
//     let li = document.createElement("li");
//     for(let key in elem){
//         let span = document.createElement("span");
//         span.textContent = elem[key] + " "
//         func1(span)

//         li.appendChild(span)
//     }
//     func2(li)

//     ul.appendChild(li)
// }


// function func1(span){
//     span.addEventListener("click", function func(){
// 		let input = document.createElement("input")
// 		input.value = span.textContent;
// 		span.textContent = ""
// 		span.appendChild(input)
// 		input.addEventListener("blur", function(){
// 			span.textContent = input.value
// 			span.addEventListener('click', func); 
// 		})
// 		span.removeEventListener('click', func);
// 	})
// }

// function func2(li){
//     let a = document.createElement("a");
//     a.href = "";
//     a.textContent  = "remove"
//     li.appendChild(a)
//     a.addEventListener("click", function(event){
// 		li.remove();
// 		event.preventDefault()
// })
// }
// document.body.appendChild(ul)
// let input1 = document.createElement("input")
// let input2 = document.createElement("input")
// let input3 = document.createElement("input")
// let button = document.createElement("button")
// button.textContent = "добавить"
// document.body.appendChild(input1)
// document.body.appendChild(input2)
// document.body.appendChild(input3)
// document.body.appendChild(button)

// button.addEventListener("click", function(){
//     let li = document.createElement("li")
//     let span1 = document.createElement("span");
//     span1.textContent = input1.value + " "
//     input1.value = ""
//     func1(span1)
//     let span2 = document.createElement("span");
//     span2.textContent = input2.value + " "
//     input2.value = "";
//     func1(span2)
//     let span3 = document.createElement("span");
//     span3.textContent = input3.value + " "
//     input3.value = ""
//     func1(span3)
//     li.appendChild(span1)
//     li.appendChild(span2)
//     li.appendChild(span3)
//     func2(li)
//     ul.appendChild(li)
// })






































