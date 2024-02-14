import { customCreateElement } from "../helpers";

const TodoCard = (cardId) => {
  const cardContainer = customCreateElement("div", {
    id: `todo-${cardId}`,
    className: "todo__card",
  });

  const newTitle = customCreateElement("h3", { innerText: "Todo Card" });

  cardContainer.appendChild(newTitle);

  return cardContainer;
};

export default TodoCard;
