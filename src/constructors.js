export function Todo(type, title, description, dueDate, priority) {
  this.type = type;
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

export function CheckList(type, title) {
  this.type = type;
  this.title = title;
  this.listItems = [];

  this.addListItem = function (item) {
    this.listItems.push(item);
  };

  this.removeListItem = function (itemIndex) {
    let filteredList = this.listItems.filter((_, index) => {
      return index !== itemIndex;
    });

    this.listItems = filteredList;
  };

  this.toggleCheckItem = function (index, state){
    this.listItems[index].isChecked = state
  }
}
