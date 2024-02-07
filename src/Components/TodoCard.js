import { customCreateElement } from "../helpers";

const TodoCard = (index) => {
  const cardContainer = customCreateElement("div", {
    id: `todo-${index}`,
    className: "todo__card",
  });

  const newTitle = customCreateElement("h3", { innerText: "Todo Card" });

  cardContainer.appendChild(newTitle);

  return cardContainer;
};

export default TodoCard;
