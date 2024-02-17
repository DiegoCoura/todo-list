export function Project(id, title) {
  this.id = id;
  this.title = title;
  this.listItems = [];

  this.addListItem = function (item) {
    let newItem = {
      isChecked: false,
      title: item.title,
      description: item.description,
      date: item.date,
      priority: "standard",
    };

    this.listItems.push(newItem);
  };

  this.editListItem = function (itemIndex, itemValue, itemKey) {
    this.listItems.forEach((listItem, index) => {
      if(index === itemIndex){
        listItem[itemKey] = itemValue
      }
    });

  };

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
