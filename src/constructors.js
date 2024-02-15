const DEFAULT_BG_COLOR = "#F7D15F";

export function Todo(id, type, title, description, dueDate, priority) {
  this.id = id;
  this.type = type;
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

export function Project(id, type, title) {
  this.id = id;
  this.type = type;
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.bgColor = DEFAULT_BG_COLOR;
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

  this.toggleCheckItem = function (index, state) {
    this.listItems[index].isChecked = state;
  };
  
  this.changeBgColor = function (color) {
    this.bgColor = color;
  };
}
