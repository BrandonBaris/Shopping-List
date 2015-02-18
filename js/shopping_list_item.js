function ShoppingListItem( name, description ){
  this.name = name;
  this.description = description;
  this.is_done = false;
}

ShoppingListItem.prototype.check = function() {
  this.is_done = true;
};

ShoppingListItem.prototype.uncheck = function() {
  this.is_done = false;
};

ShoppingListItem.prototype.render = function(idx){
	console.log('adwa',this.is_done);
  return '<li class="' + this.is_done + '"><div><input type="button" class="damn_button" onclick="removeItemButtonClicked(' + idx + 
  ')" value="DELETE"><input onchange=changeCheckedStatus("' + idx + '"); type="checkbox" ' + (this.is_done? 'checked':'') + 
  ' >Done</div><p> ' + this.name + '</p><p> ' + this.description+'</p></li>';
};