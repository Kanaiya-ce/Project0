const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
	const TextToDo = prompt("Enter TODO");
	const li = document.createElement('li');
	const btn = document.createElement('BUTTON');
	var check = document.createElement("INPUT");
	var newTextNode = document.createTextNode(TextToDo);
	let span = document.createElement('span');
	
	btn.appendChild(document.createTextNode('Delete'));
	list.appendChild(li);  
 
	check.setAttribute("type", "checkbox");
	span.appendChild(btn);
	li.appendChild(check);
	li.appendChild(newTextNode);
	li.appendChild(span);
	  
    let count = + itemCountSpan.innerHTML;
	count++;
	itemCountSpan.innerHTML = count;
	let countVal = + uncheckedCountSpan.innerHTML;
	countVal++;
	uncheckedCountSpan.innerHTML = countVal;
	let checked = li.firstChild;

checked.addEventListener('click', function (e) {
    if (e.target.checked) {
      let count = uncheckedCountSpan.innerHTML;
      count--;
      uncheckedCountSpan.innerHTML = count.toString();

    } else if (!e.target.checked) {
      let count = uncheckedCountSpan.innerHTML;
      count++;
      uncheckedCountSpan.innerHTML = count.toString();
    }
  });
btn.addEventListener('click',function(){
	  li.remove();
	  countVal--;
	  uncheckedCountSpan.innerHTML = countVal;
	  count--;
	  itemCountSpan.innerHTML = count;
  })
 }
