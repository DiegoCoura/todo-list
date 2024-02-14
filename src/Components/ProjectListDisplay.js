import { customCreateElement, removeChildren } from "../helpers";

const ProjectListDisplay = (titlesList) => {
  const projectsList = document.querySelector(".projects-list");
  removeChildren(projectsList);

  titlesList.forEach((item) => {
    const newListItem = customCreateElement("li", { className: "projects-list-item"})
    
    const projectBtn = customCreateElement("button", {
      className: "projects-list-btn",
      innerText: `${item.title}`,
    });
    projectBtn.setAttribute("data-project-btn", `${item.id}`)


    newListItem.appendChild(projectBtn);
    projectsList.appendChild(newListItem);
  });
};

export default ProjectListDisplay;
