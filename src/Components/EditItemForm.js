import { customCreateElement } from "../helpers";

export const EditItemForm = (itemIndex) => {
  const editForm = customCreateElement("form", {
    id: "edit-item-form",
    className: "edit-item-form",
  });
  editForm.setAttribute("data-edit-item", `${itemIndex}`)

  const title = customCreateElement("input", {
    type: "text",
    className: "edit-title-input",
    name: "item-title",
    id: "item-title",
    placeholder: "Title",
  });

  const description = customCreateElement("textarea", {
    className: "description-text-area",
    name: "item-description",
    id: "item-description",
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
    id: "item-priority"
  });
  console.log(prioritySelect)

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

  const buttonAdd = customCreateElement("button", {
    type: "submit",
    className: "edit-item-submit",
  });

  editForm.appendChild(title);
  editForm.appendChild(description);
  editForm.appendChild(dueDateLabel);
  editForm.appendChild(dueDateInput);
  editForm.appendChild(priorityLabel);
  editForm.appendChild(prioritySelect);
  editForm.appendChild(buttonAdd);

  return editForm;
};
