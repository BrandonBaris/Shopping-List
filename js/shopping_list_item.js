function ShoppingListItem( name, description ){
  this.name = name;
  this.description = description;
  this.is_done = false;
}

ShoppingListItem.prototype.check = function() {
   this.is_done = true;
 };

ShoppingListItem.prototype.uncheck = function(){
    this.is_done = false;
  };

ShoppingListItem.prototype.render = function(){
    return '<li class="[is_done]"><span>[name]</span> <span>[description]</span></li>';
  };