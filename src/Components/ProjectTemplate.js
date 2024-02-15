import { customCreateElement } from "../helpers";

const ProjectTemplate = (projectId, title, listItems) => {
  const projectContainer = customCreateElement("div", {
    id: `project-${projectId}`,
    className: "project__container",
  });
  //   projectContainer.style.backgroundColor = bgColor;

  const projectHeaderDiv = customCreateElement("div", {
    className: "project__container-header",
  });

  const projectTitle = customCreateElement("h3", {
    className: "project__container-title",
    innerText: `${title}`,
  });

  const deleteProjectBtn = customCreateElement("button", {
    className: "delete-project-btn",
  });

  deleteProjectBtn.setAttribute("data-delete-project", `${projectId}`);

  const deleteProjectIcon = customCreateElement("i", {
    className: "fa-solid fa-x",
  });

  deleteProjectBtn.appendChild(deleteProjectIcon);

  const list = customCreateElement("ul", {
    className: "project__container-list",
  });

  listItems.forEach((item, index) => {
    const newListItem = customCreateElement("li", {
      className: "list-item",
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

    const itemText = customCreateElement("p", {
      className: "list-item-text",
      innerText: item.text,
    });

    const optionsDiv = customCreateElement("div", {
      className: "item-options-container",
    });

    const editItemBtn = customCreateElement("button", {
      className: "edit-item-btn",
    });
    const editIcon = customCreateElement("i", {
      className: "fa-regular fa-pen-to-square",
    });
    editItemBtn.appendChild(editIcon);

    const dateText = customCreateElement("span", {
      innerText: "Data",
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
    checkTextDiv.appendChild(itemText);

    optionsDiv.appendChild(editItemBtn);
    optionsDiv.appendChild(dateText);
    optionsDiv.appendChild(deleteItemBtn);

    newListItem.appendChild(checkTextDiv);
    newListItem.appendChild(optionsDiv);
    list.appendChild(newListItem);
  });

  const listInput = customCreateElement("input", {
    type: "text",
    className: "list-input",
    placeholder: "New item",
  });
  listInput.setAttribute("data-input-item", `${projectId}`);

  //   const colorButton = customCreateElement("button", {
  //     className: "toggle-color-btn",
  //   });
  //   colorButton.style.backgroundColor = bgColor;

  //   const colorButtonContainer = customCreateElement("div", {
  //     className: "toggle-color-container",
  //   });

  //   const colorOptionsContainer = customCreateElement("div", {
  //     className: "color-options-container hidden",
  //   });

  //   for (let i = 1; i < 5; i++) {
  //     const colorOptionBtn = customCreateElement("button", {
  //       id: `color-option-${i}`,
  //       className: "color-option-btn",
  //     });

  //     colorOptionsContainer.appendChild(colorOptionBtn);
  //   }

  //   colorButtonContainer.appendChild(colorOptionsContainer);
  //   colorButtonContainer.appendChild(colorButton);

  projectHeaderDiv.appendChild(projectTitle);
  projectHeaderDiv.appendChild(deleteProjectBtn);

  projectContainer.appendChild(projectHeaderDiv);
  projectContainer.appendChild(list);
  projectContainer.appendChild(listInput);
  //   projectContainer.appendChild(colorButtonContainer);

  return projectContainer;
};

export default ProjectTemplate;
