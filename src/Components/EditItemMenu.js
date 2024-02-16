import { customCreateElement } from "../helpers";

export const EditItemMenu = (itemIndex) => {
  const editMenu = customCreateElement("div", {
    id: "edit-item-menu",
    className: "edit-item-menu",
  });
  editMenu.setAttribute("data-edit-item", `${itemIndex}`);

  const title = customCreateElement("input", {
    type: "text",
    className: "edit-title-input",
    name: "item-title",
    placeholder: "Title",
  });

  const description = customCreateElement("textarea", {
    className: "description-text-area",
    name: "item-description",
    placeholder: "Description",
  });

  const dueDateLabel = customCreateElement("label", {
    for: "due-date",
    innerText: "Due date:",
  });

  const dueDateInput = customCreateElement("input", {
    id: "due-date",
    type: "date",
    name: "due-date",
    className: "due-date",
  });

  const priorityLabel = customCreateElement("label", {
    for: "item-priority",
  });

  const prioritySelect = customCreateElement("select", {
    name: "item-priority",
    id: "item-priority",
  });

  const urgentOption = customCreateElement("option");
  urgentOption.value = "urgent";
  urgentOption.text = "Urgent";

  const highOption = customCreateElement("option");
  highOption.value = "high";
  highOption.text = "High";

  const standardOption = customCreateElement("option");
  standardOption.value = "standard";
  standardOption.text = "standard";

  prioritySelect.add(urgentOption, null);
  prioritySelect.add(highOption, null);
  prioritySelect.add(standardOption, null);

  editMenu.appendChild(title);
  editMenu.appendChild(description);
  editMenu.appendChild(dueDateLabel);
  editMenu.appendChild(dueDateInput);
  editMenu.appendChild(priorityLabel);
  editMenu.appendChild(prioritySelect);

  return editMenu;
};
