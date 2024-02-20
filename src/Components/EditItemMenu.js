import { capitalizeFirstLetter, customCreateElement } from "../helpers";

export const EditItemMenu = (itemIndex, item) => {
  const editMenu = customCreateElement("div", {
    id: "edit-item-menu",
    className: "edit-item-menu",
  });
  editMenu.setAttribute("data-edit-item", `${itemIndex}`);

  const description = customCreateElement("textarea", {
    className: "description-text-area edit-item-input",
    name: "item-description",
    placeholder: "Description",
    value: `${item.description ? item.description : ""}`,
  });

  const setDateDiv = customCreateElement("div", {
    className: "set-date-container",
  });

  const itemDateLabel = customCreateElement("label", {
    for: "item-date",
    innerText: "Due date:",
  });

  const itemDateInput = customCreateElement("input", {
    id: "item-date",
    type: "date",
    name: "item-date",
    className: "item-date edit-item-input",
    value: `${item.date}`,
  });

  setDateDiv.appendChild(itemDateLabel);
  setDateDiv.appendChild(itemDateInput);

  const priorityLabel = customCreateElement("label", {
    for: "item-priority",
    innerText: "Priority:",
  });

  const priorityPlaceHolder = customCreateElement("option");
  priorityPlaceHolder.value = "";
  if (!item.priority) {
    priorityPlaceHolder.text = "Priority";
  } else {
    priorityPlaceHolder.text = capitalizeFirstLetter(item.priority);
  }

  const standardOption = customCreateElement("option");
  standardOption.value = "standard";
  standardOption.text = "Standard";

  const highOption = customCreateElement("option");
  highOption.value = "high";
  highOption.text = "High";

  const urgentOption = customCreateElement("option");
  urgentOption.value = "urgent";
  urgentOption.text = "Urgent";

  const prioritySelect = customCreateElement("select", {
    name: "item-priority",
    className: "edit-item-input",
    value: item.priority,
  });

  const setPriorityDiv = customCreateElement("div", {
    className: "set-priority-container",
  });

  prioritySelect.add(priorityPlaceHolder, prioritySelect.options[0]);
  prioritySelect.add(standardOption, prioritySelect.options[1]);
  prioritySelect.add(highOption, prioritySelect.options[2]);
  prioritySelect.add(urgentOption, prioritySelect.options[3]);

  setPriorityDiv.appendChild(priorityLabel);
  setPriorityDiv.appendChild(prioritySelect);

  editMenu.appendChild(description);
  editMenu.appendChild(setDateDiv);
  editMenu.appendChild(setPriorityDiv);

  return editMenu;
};
