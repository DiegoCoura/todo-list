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

  const addListItem = (item) => {
    this.listItems.push(item);
  }
}