import { customCreateElement } from "../helpers";

const ChecklistCard = (title) => {
  const card = customCreateElement("div", { className: "checklist__card" });

  const cardTitle = customCreateElement("h3", {
    className: "checklist__card-title",
    innerText: `${title}`,
  });

  const addListItem = (e) => {
    const listItemValue = e.target.value;
    const newListItem = customCreateElement("li", {
      className: "list-item",
      innerText: listItemValue,
    });

    const deleteItemBtn = customCreateElement("button", {
      className: "delete-item-btn",
    });
    deleteItemBtn.addEventListener("click", function (e) {
      this.parentNode.remove();
    });

    newListItem.appendChild(deleteItemBtn);

    list.appendChild(newListItem);
    e.target.value = "";
  }

  const list = customCreateElement("ul", { className: "checklist__card-list" });

  const listInput = customCreateElement("input", {
    type: "text",
    className: "list-input",
  });

  listInput.addEventListener("change", function (e) {
    addListItem(e);
  });

  card.appendChild(cardTitle);
  card.appendChild(list);
  card.appendChild(listInput);

  return card;
};

export default ChecklistCard;
