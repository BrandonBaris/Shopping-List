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

ShoppingListItem.prototype.render = function(idx){
  return '<li class="'+ this.is_done +'"><span><input type="checkbox" checked="'+this.is_done+'">' + this.name+ '        ' + this.description+'</span> <span onclick="removeItemButtonClicked()">DOWN</span></li>';
};