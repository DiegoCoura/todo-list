import { customCreateElement } from "../helpers";
import { EditItemMenu } from "./EditItemMenu";
import DragIcon from "../public/dragIcon.png";

const ProjectTemplate = (
  projectId,
  title,
  listItems,
  currentProjectId,
  currentItemIndex
) => {
  const projectContainer = customCreateElement("div", {
    id: `project-${projectId}`,
    className: "project__container",
  });

  const projectHeaderDiv = customCreateElement("div", {
    className: "project__container-header",
  });

  const projectTitle = customCreateElement("h3", {
    className: "project__container-title",
    innerText: `${title}`,
  });

  const list = customCreateElement("div", {
    className: "project__container-list",
  });

  listItems.forEach((item, index) => {
    const listItemContainer = customCreateElement("div", {
      id: `item-${projectId}-${index}`,
      className: `list-item-container ${projectId}-${index}`,
      draggable: true,
    });

    const dragIconDiv = customCreateElement("div", {
      className: `drag-icon-div`,
    });

    const dragIcon = new Image();
    dragIcon.classList.add("drag-icon");
    dragIcon.src = DragIcon;
    dragIconDiv.appendChild(dragIcon);

    listItemContainer.appendChild(dragIconDiv);

    const newListItem = customCreateElement("div", {
      className: `list-item priority-${item.priority}`,
    });

    const listItemNavigation = customCreateElement("div", {
      className: "list-item-navigation",
    });

    const checkTextDiv = customCreateElement("div", {
      className: "checkbox-container",
    });
    if (item.isChecked) {
      checkTextDiv.classList.add("item-checked");
    }

    const newCheckBox = customCreateElement("input", {
      type: "checkbox",
      value: "is-checked",
      checked: item.isChecked,
      className: "list-item-checkbox",
    });

    newCheckBox.setAttribute("data-check-index", `${index}`);

    const itemTitle = customCreateElement("div", {
      className: "list-item-title edit-item-input",
      innerText: item.title,
      contentEditable: true,
    });
    itemTitle.setAttribute("data-title-index", `${index}`);

    const optionsDiv = customCreateElement("div", {
      className: "item-options-container",
    });

    const editItemBtn = customCreateElement("button", {
      className: "edit-item-btn",
    });
    editItemBtn.setAttribute("data-edit-index", `${index}`);

    const editIcon = customCreateElement("i", {
      className: "fa-regular fa-pen-to-square",
    });
    editItemBtn.appendChild(editIcon);

    const dateText = customCreateElement("span", {
      innerText: `${item.date ? item.date : "Due Date"}`,
    });

    const deleteItemBtn = customCreateElement("button", {
      className: "delete-item-btn",
    });
    deleteItemBtn.setAttribute("data-delete-index", `${index}`);

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
      className: `edit-item-menu-container ${
        currentProjectId === projectId && currentItemIndex === index
          ? ""
          : "hidden"
      }`,
    });

    const editMenu = EditItemMenu(index, item);
    editItemContainer.appendChild(editMenu);

    listItemContainer.appendChild(newListItem);
    listItemContainer.appendChild(editItemContainer);

    list.appendChild(listItemContainer);
  });

  const listInput = customCreateElement("input", {
    type: "text",
    className: "list-input",
    placeholder: "New item",
  });
  listInput.setAttribute("data-input-item", `${projectId}`);

  projectHeaderDiv.appendChild(projectTitle);

  projectContainer.appendChild(projectHeaderDiv);
  projectContainer.appendChild(list);
  projectContainer.appendChild(listInput);

  return projectContainer;
};

export default ProjectTemplate;
