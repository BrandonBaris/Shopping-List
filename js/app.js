var someShoppingList = new ShoppingList();
var someRender = someShoppingList.render();

function add_to_shopping_list(){
  var listTitle = document.getElementById("shoptitle").value;
  var listDesc = document.getElementById("shopdesc").value;
  var someShoppingListItem = new ShoppingListItem(listTitle,listDesc);
  someShoppingList.additem(someShoppingListItem);

  document.getElementById("content").innerHTML =  someShoppingListItem.render() + ' a sd ' + someShoppingList.render();
}