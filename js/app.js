var someShoppingList = new ShoppingList();

window.onload = function() {
  document.getElementById('shoptitle').focus();
};

function add_to_shopping_list(){
  var listTitle = document.getElementById("shoptitle").value;
  var listDesc = document.getElementById("shopdesc").value;
  /* adds a basic message if user leaves a field blank */
  if (listTitle === ''){
    listTitle = 'SOME ITEM';
  }
  if (listDesc === ''){
    listDesc = 'SOME ITEM DESCRIPTION';
  }
  
  var someShoppingListItem = new ShoppingListItem(listTitle,listDesc);
  someShoppingList.additem(someShoppingListItem);

  document.getElementById("content").innerHTML =  someShoppingList.render();
  document.getElementById("shoptitle").value = '';
  document.getElementById("shoptitle").focus();
  document.getElementById("shoptitle").select();
  document.getElementById("shopdesc").value = '';
}

function changeCheckedStatus(idx){
  if (someShoppingList.items[idx].is_done){
    someShoppingList.items[idx].uncheck();
    document.getElementById("content").innerHTML =  someShoppingList.render();

  } else {
    someShoppingList.items[idx].check();
    document.getElementById("content").innerHTML =  someShoppingList.render();
  }
}

function removeItemButtonClicked(idx){
  someShoppingList.removeItem(someShoppingList.items[idx]);
  document.getElementById("content").innerHTML = someShoppingList.render();
}