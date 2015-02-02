var someShoppingList = new ShoppingList();
//var someRender = someShoppingList.render();

function add_to_shopping_list(){
  var listTitle = document.getElementById("shoptitle").value;
  var listDesc = document.getElementById("shopdesc").value;
  var someShoppingListItem = new ShoppingListItem(listTitle,listDesc);
  someShoppingList.additem(someShoppingListItem);

  document.getElementById("content").innerHTML =   someShoppingList.render();
  listTitle = document.getElementById("shoptitle").value = 'Enter a new item';
  listDesc = document.getElementById("shopdesc").value = 'Enter a description';
}

function changeCheckedStatus(idx){
  if (someShoppingList.items[idx].is_done){
    someShoppingList.items[idx].uncheck();
  } else {
    someShoppingList.items[idx].check();
  }
}

function removeItemButtonClicked(idx){
  someShoppingList.removeItem(someShoppingList.items[idx]);
}