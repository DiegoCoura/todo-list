import { customCreateElement } from "../helpers";

const TodoCard = () => {
    const cardContainer = customCreateElement("div", { className: "todo__card" })

    const newTitle = customCreateElement("h3", { innerText: "Todo Card"});

    cardContainer.appendChild(newTitle);

    return cardContainer;
}

export default TodoCard;