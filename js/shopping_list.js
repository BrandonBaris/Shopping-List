function ShoppingList(){
  this.items = [];
}

ShoppingList.prototype.additem = function ( item ){
  if ((item instanceof ShoppingListItem) === false) {
    console.log('Not an item');
    return false;
  }
  return this.items.push(item);
};

ShoppingList.prototype.removeItem = function ( item ){
  if (item === undefined) {
    if (this.items.length > 0 ){
      this.items.pop();
      return true;
    } else {
      return false;
    }
  }
  if (this.items.indexOf(item) === -1){
    return false;
  }
  if (this.items.indexOf(item)!== -1){
    this.items.splice(this.items.indexOf(item),1);
    return true;
  }
};

ShoppingList.prototype.render = function(){
  var renderList = '';
  for (var i=0;i<this.items.length;i++){
    renderList += '<ul>' + this.items[i].render(i) + '</ul>';
 }
 return renderList;
};
