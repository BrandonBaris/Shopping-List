function ShoppingList(){
  this.items = [];
}

ShoppingList.prototype.additem = function ( item ){
    return this.items.push(item);
  };

/*ShoppingList.prototype.render = function(){
  var someshit;
  for (i=0;i<this.items.length;i++){
    someshit += '<ul>'+ this.items[i].name + this.items[i].description+'</ul>';
 }
 return someshit;
};
*/
ShoppingList.prototype.removeItem = function ( item ){
  if (item === undefined) {
    if (this.items.length > 0 ){
      this.items.pop();
      return true;
    } else {
      return false;
    }
  }
  if (this.items.Indexof(item) == -1){
    return false;
  }
  if (item){
    this.items.splice(this.items.Indexof(item),this.items.Indexof(item)+1);
    return true;
  }
};

ShoppingList.prototype.render = function(){
  var someshit;
  for (i=0;i<this.items.length;i++){
    someshit += '<ul>'+ this.items[i].render() + '</ul>';
 }
 return someshit;
};
