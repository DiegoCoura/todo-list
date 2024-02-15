import { customCreateElement, removeChildren } from "../helpers";

const ProjectListDisplay = (titlesList) => {
  const projectsListContainer = document.querySelector(".projects-list");
  removeChildren(projectsListContainer);

  titlesList.forEach((item) => {
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

    projectsListContainer.appendChild(projectBtn);
  });
};

export default ProjectListDisplay;
