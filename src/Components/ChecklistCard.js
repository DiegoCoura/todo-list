import { customCreateElement } from "../helpers";

const ChecklistCard = (cardId, title, listItems, bgColor) => {
  const card = customCreateElement("div", {
    id: `checklist-${cardId}`,
    className: "checklist__card",
  });
  card.style.backgroundColor = bgColor;

  const cardHeaderDiv = customCreateElement("div", {
    className: "checklist__card-header",
  });

  const cardTitle = customCreateElement("h3", {
    className: "checklist__card-title",
    innerText: `${title}`,
  });

  const deleteCardBtn = customCreateElement("button", {
    className: "delete-card-btn",
  });
  const deleteCardIcon = customCreateElement("i", {
    className: "fa-solid fa-x",
  });
  deleteCardBtn.appendChild(deleteCardIcon);

  const list = customCreateElement("ul", { className: "checklist__card-list" });

  listItems.forEach((item, index) => {
    const newListItem = customCreateElement("li", {
      className: "list-item",
    });

    const checkTextDiv = customCreateElement("div", {
      className: "checkbox-container",
    });

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

    newListItem.appendChild(checkTextDiv);
    newListItem.appendChild(deleteItemBtn);
    list.appendChild(newListItem);
  });

  const listInput = customCreateElement("input", {
    type: "text",
    className: "list-input",
  });
  listInput.setAttribute("data-input-item", `${cardId}`);

  const colorButton = customCreateElement("button", {
    className: "toggle-color-btn",
  });
  colorButton.style.backgroundColor = bgColor;

  const colorButtonContainer = customCreateElement("div", {
    className: "toggle-color-container",
  });

  const colorOptionsContainer = customCreateElement("div", {
    className: "color-options-container hidden",
  });

  for (let i = 1; i < 5; i++) {
    const colorOptionBtn = customCreateElement("button", {
      id: `color-option-${i}`,
      className: "color-option-btn",
    });

    colorOptionsContainer.appendChild(colorOptionBtn);
  }

  colorButtonContainer.appendChild(colorOptionsContainer);
  colorButtonContainer.appendChild(colorButton);

  cardHeaderDiv.appendChild(cardTitle);
  cardHeaderDiv.appendChild(deleteCardBtn);

  card.appendChild(cardHeaderDiv);
  card.appendChild(list);
  card.appendChild(listInput);
  card.appendChild(colorButtonContainer);

  return card;
};

export default ChecklistCard;
