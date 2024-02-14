import { customCreateElement } from "../helpers";

const ProjectListDisplay = (titlesList) => {
  const projectsList = document.querySelector(".projects-list");

  titlesList.forEach((item) => {
    const newListItem = customCreateElement("li", { className: "projects-list-item"})
    
    const projectBtn = customCreateElement("button", {
      className: "projects-list-btn",
      innerText: `${item.title}`,
    });
    newListItem.appendChild(projectBtn);
    projectsList.appendChild(newListItem);
  });
};

export default ProjectListDisplay;
