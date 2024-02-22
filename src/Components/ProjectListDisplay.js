import { customCreateElement, removeChildren } from "../helpers";

const ProjectListDisplay = (titlesList) => {
  const projectsListContainer = document.querySelector(".projects-list");
  removeChildren(projectsListContainer);

  titlesList.forEach((item) => {
    const projectListItemContainer = customCreateElement("div", {
      className: "project-list-item-container",
    });

    const projectBtn = customCreateElement("button", {
      className: "projects-list-btn",
    });
    projectBtn.setAttribute("data-project-btn", `${item.id}`);

    const projectIcon = customCreateElement("i", {
      className: "fa-solid fa-list-check",
    });

    const btnText = customCreateElement("span", {
      className: "project-btn-text",
      innerText: `${item.title}`,
    });

    projectBtn.appendChild(projectIcon);
    projectBtn.appendChild(btnText);

    const deleteProjectBtn = customCreateElement("button", {
      className: "delete-project-btn",
    });

    deleteProjectBtn.setAttribute("data-delete-project", `${item.id}`);

    const trashCanIcon = customCreateElement("i", {
      className: "fa-solid fa-trash-can",
    });

    deleteProjectBtn.appendChild(trashCanIcon);


    projectListItemContainer.appendChild(projectBtn);
    projectListItemContainer.appendChild(deleteProjectBtn);

    projectsListContainer.appendChild(projectListItemContainer);
  });
};

export default ProjectListDisplay;
