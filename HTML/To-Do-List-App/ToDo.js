
function updateItemStatus()
{
  var cbId = this.id.replace("cb_", "");
  var itemText = document.getElementById("item_" + cbId);

  if(this.checked)
  {
    itemText.className = "checked";
  }
  else
  {
    itemText.className = "";
  }
}

function renameItem()
{
  var newText = prompt("What should this task be renamed to?");

  if(!newText || newText == "" || newText == " ")
  {
    return false;
  }

  this.innerText = newText;
}

function removeItem()
{
  var spanId = this.id.replace("item_", "");
}

function addNewItem(list, itemText)
{
  var date = new Date();
  var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

  var listItem = document.createElement("li");
  listItem.id = "li_" + id;

  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "cb_" + id;
  checkBox.onclick = updateItemStatus;


  var span = document.createElement("span");
  span.id = "item_" + id;
  span.innerText = itemText;
  span.onclick = renameItem;
  span.ondblclick = removeItem

  listItem.appendChild(checkBox);
  listItem.appendChild(span);

  list.appendChild(listItem);

  var itemString = JSON.stringify(itemText);
  sessionStorage.setItem('itemText', itemString);

  var itemString = sessionStorage.getItem('itemText');
  var itemText = JSON.parse(itemString);
  console.log(itemText);
}

var totalItems = 0;
var inItemText = document.getElementById("inItemText");
inItemText.focus();

var buttonNew = document.getElementById("buttonAdd");
buttonNew.onclick = function()
{

  var itemText = inItemText.value;

  if(itemText == "" || itemText == " ")
  {
    return false;
  }

  addNewItem(document.getElementById("todoList"), itemText);
  inItemText.focus();
  inItemText.select();
};
