export function Project(id, title, listItems) {
  this.id = id;
  this.title = title;

  if (listItems) {
    this.listItems = listItems;
  } else {
    this.listItems = [];
  }

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

  this.editListItem = function (itemIndex, itemKey, itemValue) {
    this.listItems.forEach((listItem, index) => {
      if (index === itemIndex) {
        listItem[itemKey] = itemValue;
      }
    });
  };

  this.removeListItem = function (itemIndex) {
    let filteredList = this.listItems.filter((_, index) => {
      return index !== itemIndex;
    });

    this.listItems = filteredList;
  };

  this.changeItemPosition = function (draggedItemIndex, currentItemPosition) {
    console.log(this.listItems);
    let itemToChange = this.listItems[draggedItemIndex];

    this.removeListItem(draggedItemIndex);

    console.log(itemToChange);

    this.listItems.splice(currentItemPosition, 0, itemToChange);
  };

  this.toggleCheckItem = function (index, state) {
    this.listItems[index].isChecked = state;
  };
}
