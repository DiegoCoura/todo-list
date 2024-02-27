import { customCreateElement } from "../helpers";
import { EditItemMenu } from "./EditItemMenu";

const DisplayTasks = (tasks) => {
  const list = customCreateElement("div", {
    className: "project__container-list",
  });

  tasks.forEach((task) => {
    const listItemContainer = customCreateElement("div", {
      id: `item-${task.projectId}-${task.itemIndex}`,
      className: `list-item-container ${task.projectId}-${task.itemIndex}`,
      draggable: false,
    });

    const newListItem = customCreateElement("div", {
      className: `list-item priority-${task.priority}`,
    });

    const listItemNavigation = customCreateElement("div", {
      className: "list-item-navigation",
    });

    const checkTextDiv = customCreateElement("div", {
      className: "checkbox-container",
    });
    if (task.isChecked) {
      checkTextDiv.classList.add("item-checked");
    }

    const newCheckBox = customCreateElement("input", {
      type: "checkbox",
      value: "is-checked",
      checked: task.isChecked,
      className: "list-item-checkbox",
    });

    newCheckBox.setAttribute("data-check-index", `${task.itemIndex}`);

    const itemTitle = customCreateElement("div", {
      className: "list-item-title edit-item-input",
      innerText: task.title,
      contentEditable: true,
    });
    itemTitle.setAttribute("data-title-index", `${task.itemIndex}`);

    const optionsDiv = customCreateElement("div", {
      className: "item-options-container",
    });

    const editItemBtn = customCreateElement("button", {
      className: "edit-item-btn",
    });
    editItemBtn.setAttribute("data-edit-index", `${task.itemIndex}`);

    const editIcon = customCreateElement("i", {
      className: "fa-regular fa-pen-to-square",
    });
    editItemBtn.appendChild(editIcon);

    const dateText = customCreateElement("span", {
      innerText: `${task.date ? task.date : "Due Date"}`,
    });

    const deleteItemBtn = customCreateElement("button", {
      className: "delete-item-btn",
    });
    deleteItemBtn.setAttribute("data-delete-index", `${task.itemIndex}`);

    const trashCanIcon = customCreateElement("i", {
      className: "fa-solid fa-trash-can",
    });
    deleteItemBtn.appendChild(trashCanIcon);

    checkTextDiv.appendChild(newCheckBox);
    checkTextDiv.appendChild(itemTitle);

    optionsDiv.appendChild(editItemBtn);
    optionsDiv.appendChild(dateText);
    optionsDiv.appendChild(deleteItemBtn);

    listItemNavigation.appendChild(checkTextDiv);
    listItemNavigation.appendChild(optionsDiv);

    newListItem.appendChild(listItemNavigation);

    const editItemContainer = customCreateElement("div", {
      className: `edit-item-menu-container hidden`,
    });

    const editMenu = EditItemMenu(task.itemIndex, task);
    editItemContainer.appendChild(editMenu);

    listItemContainer.appendChild(newListItem);
    listItemContainer.appendChild(editItemContainer);

    list.appendChild(listItemContainer);
  });
  return list;
};

export default DisplayTasks;
