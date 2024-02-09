import { customCreateElement } from "../helpers";

const ChecklistCard = (title, listItems, cardIndex) => {
  const card = customCreateElement("div", {
    id: `checklist-${cardIndex}`,
    className: "checklist__card",
  });

  const cardTitle = customCreateElement("h3", {
    className: "checklist__card-title",
    innerText: `${title}`,
  });

  const list = customCreateElement("ul", { className: "checklist__card-list" });

  listItems.forEach((item, index) => {
    const newListItem = customCreateElement("li", {
      className: "list-item",
    });

    const checkTextDiv = customCreateElement("div", {
      className: "checkbox-container"
    })

    const newCheckBox = customCreateElement("input", {
      type: "checkbox",
      value: "is-checked",
      checked: item.isChecked,
      className: "list-item-checkbox"
    });

    newCheckBox.setAttribute("data-check-index", `${index}`);


    const itemText = customCreateElement("p", { className: "list-item-text", innerText: item.text })
    
    const deleteItemBtn = customCreateElement("button", {
      className: "delete-item-btn",
    });
    deleteItemBtn.setAttribute("data-delete-index", `${index}`);
    const trashCanIcon = customCreateElement("i", { className: "fa-solid fa-trash-can"})
    deleteItemBtn.appendChild(trashCanIcon)

    checkTextDiv.appendChild(newCheckBox);
    checkTextDiv.appendChild(itemText);
    
    newListItem.appendChild(checkTextDiv)
    newListItem.appendChild(deleteItemBtn);
    list.appendChild(newListItem);
  });

  const listInput = customCreateElement("input", {
    type: "text",
    className: "list-input",
  });
  listInput.setAttribute("data-input-item", `${cardIndex}`);

  card.appendChild(cardTitle);
  card.appendChild(list);
  card.appendChild(listInput);

  return card;
};

export default ChecklistCard;
