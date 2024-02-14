import { customCreateElement } from "../helpers";

const TodoCard = (cardId) => {
  const cardContainer = customCreateElement("div", {
    id: `todo-${cardId}`,
    className: "todo__card",
  });

  const cardHeaderDiv = customCreateElement("div", {
    className: "todo__card-header",
  });

  const newTitle = customCreateElement("h3", { innerText: "Todo Card" });

  const deleteCardBtn = customCreateElement("button", {
    className: "delete-card-btn",
  });

  deleteCardBtn.setAttribute("data-delete-card", `${cardId}`)
  
  const deleteCardIcon = customCreateElement("i", {
    className: "fa-solid fa-x",
  });

  deleteCardBtn.appendChild(deleteCardIcon);

  cardHeaderDiv.appendChild(newTitle);
  cardHeaderDiv.appendChild(deleteCardBtn);

  cardContainer.appendChild(cardHeaderDiv);

  return cardContainer;
};

export default TodoCard;
