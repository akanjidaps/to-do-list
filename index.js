console.log('Script Loaded')

var list = document.getElementById('todo-list');
var textBox = document.getElementById('textbox');
var btnAdd = document.getElementById('add-btn');
var btnUpdate = document.getElementById('update-btn');
var btnRemove = document.getElementById('remove-btn');
var btnDelete = document.getElementById('delete-btn');

var listContent = '';

textBox.addEventListener('input', function (e) {
  listContent = e.target.value;
});

function createNewNode() {
  var newListElement = document.createElement('li');
  var textNode = document.createTextNode(listContent);
  newListElement.appendChild(textNode);
  newListElement.id = "item" + (list.childElementCount + 1);

  return newListElement;    
};

function addListItem() {
  if (listContent !== undefined && listContent !== null && listContent !== '') {
      var newListElement = createNewNode ();
      newListElement.classList.add('textboxes');

      list.appendChild(newListElement);

      var btnDelete = document.createElement('button');
      btnDelete.id = "delete-btn";
      btnDelete.innerText = "Delete";
      newListElement.appendChild(btnDelete);

      textBox.value = '';
      listContent = '';
  } else {
    alert('Please enter a valid ToDo List Item')
  }   
};

btnAdd.addEventListener('click', addListItem);
  
textBox.addEventListener('keypress', function (event) {
  if (event.key === "Enter") {
        addListItem();
      }
});

btnUpdate.addEventListener('click', function () {
  if (listContent !== undefined && listContent !== null && listContent !== '') {
  var firstElement = list.firstElementChild;
  var newListElement = createNewNode();

  newListElement.classList.add('textboxes')

  var btnDelete = document.createElement('button');
  btnDelete.id = "delete-btn";
  btnDelete.innerText = "Delete";
  newListElement.appendChild(btnDelete);

  list.replaceChild(newListElement, firstElement);
  } else {
    alert('Please enter a valid ToDo List Item')
  }  
});

btnRemove.addEventListener('click', function () {
  var firstElement = list.firstElementChild;

  list.removeChild(firstElement)
});

// Li delete functionality

// btnDelete.addEventListener("click", function(event) {
//   if (event.target.id === 'delete-btn') {
//   listItem.remove();
//   }
// });

// btnDelete.addEventListener('click', function () {
//   var listItemElement = document.getElementById("item" + list.childElementCount);
   
//   list.removeChild(listItemElement);

//   // listItemElement.remove();
// })

// btnDelete.addEventListener('click', function () {
//   //var listItemElement = document.getElementById("item1");
   
//   // list.removeChild(listItemElement);

//   // listItemElement.remove();
//   this.parentElement.remove();
// })

// function removeInput() {
//   this.parentElement.remove();
// };

// btnDelete.addEventListener('click', removeInput);