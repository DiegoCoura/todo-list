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
  card.appendChild(cardTitle);

  const list = customCreateElement("ul", { className: "checklist__card-list" });

  listItems.forEach((item, index) => {
    const newListItem = customCreateElement("li", {
      className: "list-item",
      innerText: item,
    });
    const deleteItemBtn = customCreateElement("button", {
      className: "delete-item-btn",
    });
    deleteItemBtn.setAttribute("data-delete-index", `${index}`);
    newListItem.appendChild(deleteItemBtn);
    list.appendChild(newListItem);
  });

  const listInput = customCreateElement("input", {
    type: "text",
    className: "list-input",
  });
  listInput.setAttribute("data-input-item", `${cardIndex}`);

  card.appendChild(list);
  card.appendChild(listInput);

  return card;
};

export default ChecklistCard;
