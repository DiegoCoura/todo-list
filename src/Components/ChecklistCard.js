import { customCreateElement } from "../helpers";

const ChecklistCard = (title) => {
  const card = customCreateElement("div", { className: "checklist__card" });

  const cardTitle = customCreateElement("h3", {
    className: "checklist__card-title",
    innerText: `${title}`,
  });

  const list = customCreateElement("ul", { className: "checklist__card-list"});

  const addItemBtn = customCreateElement("button", { className: "checklist__card-add-btn", innerText: "+"})

  card.appendChild(cardTitle);
  card.appendChild(list);
  card.appendChild(addItemBtn);
  return card;
};

export default ChecklistCard;
