
export function Project(id, title) {
  this.id = id;
  this.title = title;
  this.listItems = [];

  this.addListItem = function (item) {
    let newItem = {
      isChecked: false,
      title: item.title,
      description: item.description,
      priority: item.priority,
    }    
    
    this.listItems.push(newItem);
  };

  this.editListItem = function(item){
    
  }

  this.removeListItem = function (itemIndex) {
    let filteredList = this.listItems.filter((_, index) => {
      return index !== itemIndex;
    });

    this.listItems = filteredList;
  };

  this.toggleCheckItem = function (index, state) {
    this.listItems[index].isChecked = state;
  };
}
