import { customCreateElement, removeChildren } from "../helpers";

const ChecklistCard = (title, listItems, index, projects) => {
  const card = customCreateElement("div", {
    id: `checklist-${index}`,
    className: "checklist__card",
  });

  const cardTitle = customCreateElement("h3", {
    className: "checklist__card-title",
    innerText: `${title}`,
  });

  // listItems.forEach((item) => {
  //   const newListItem = customCreateElement("li", {
  //     className: "list-item",
  //     innerText: listItemValue,
  //   });
  // })

  const addListItem = (e, cardIndex) => {
    const listItemValue = e.target.value;

    const newListItem = customCreateElement("li", {
      className: "list-item",
      innerText: listItemValue,
    });

    const deleteItemBtn = customCreateElement("button", {
      className: "delete-item-btn",
    });

    deleteItemBtn.addEventListener("click", function (e) {
      const cardIndex = (this.parentNode.id).split("-")[1];
      console.log((this.parentNode.parentNode.parentNode.id).split("-")[1]);
      this.parentNode.remove();
    });

    newListItem.appendChild(deleteItemBtn);

    list.appendChild(newListItem);
    listItems.push(newListItem);
    console.log(cardIndex)

    e.target.value = "";
  };

  const list = customCreateElement("ul", { className: "checklist__card-list" });

  const listInput = customCreateElement("input", {
    type: "text",
    className: "list-input",
  });

  listInput.addEventListener("change", function (e) {
    const cardIndex = (e.target.parentNode.id).split("-")[1];
    
    addListItem(e, cardIndex);
  });

  card.appendChild(cardTitle);
  card.appendChild(list);
  card.appendChild(listInput);

  return card;
};

export default ChecklistCard;
