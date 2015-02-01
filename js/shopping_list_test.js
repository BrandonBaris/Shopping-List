function ShoppingListItem( name, description ){
  this.name = name;
  this.description = description;
  this.is_done = false;
  check = function(){
    this.is_done = true;
  };
  uncheck = function(){
    this.is_done = false;
  };
  render = function(){
    return '<li class="[is_done]"><span>[name]</span> <span>[description]</span></li>';
  };

}

function ShoppingList( item ){
  this.items = [];
  additem = function ( item ){
    return this.items.push(item);
  };
  removeItem = function ( item ){
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

  render = function(){
    return '<ul>...[all the li elements from ShoppingListItem.render()]...</ul>';
  };
}