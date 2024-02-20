import "./style.css";
import { Project } from "./constructors";
import { fieldsReset, removeChildren, toggleHidden } from "./helpers";
import ProjectListDisplay from "./Components/ProjectListDisplay";
import ProjectTemplate from "./Components/ProjectTemplate";

let projects = [];
let PROJECTS_ID_COUNTER = 0;
const CURRENT_DISPLAY = {
  state: "",
};

const getAllProjectsBtn = document.querySelector(".sidebar-navigation__all");
getAllProjectsBtn.addEventListener("click", function () {
  CURRENT_DISPLAY.state = "";

  displayCards();
});

const getTodayBtn = document.querySelector(".sidebar-navigation__today");
getTodayBtn.addEventListener("click", function () {
  CURRENT_DISPLAY.state = "today";

  displayCards();
});

const getThisWeekBtn = document.querySelector(".sidebar-navigation__this-week");

getThisWeekBtn.addEventListener("click", function () {
  CURRENT_DISPLAY.state = "thisWeek";

  displayCards();
});

const addProjectDialog = document.querySelector(".add-project-dialog");

const projectFormCancelBtn = document.querySelector(".cancel-btn");
const projectFormAddBtns = document.querySelectorAll(".add-btn");

const projectAddForm = document.getElementById("add-form");
const heroSection = document.querySelector(".hero");

projectFormAddBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    addProjectDialog.showModal();
  })
);

projectFormCancelBtn.addEventListener("click", function () {
  addProjectDialog.close();
});

const deleteListItem = (e, deleteIndex) => {
  const parentCardId = Number(
    e.target.closest(".project__container").id.split("-")[1]
  );

  projects.forEach((project) => {
    if (project.id === parentCardId) {
      project.removeListItem(deleteIndex);
    }
  });

  if (typeof CURRENT_DISPLAY.state === "string") {
    displayCards();
  } else {
    displayProject(parentCardId);
  }
};

const addNewListItem = (cardId, itemTitle, itemDescription, itemPriority) => {
  const newItem = {
    isChecked: false,
    title: itemTitle,
    description: itemDescription,
    priority: itemPriority,
  };

  projects.forEach((project) => {
    if (project.id === cardId) {
      project.addListItem(newItem);
    }
  });
  if (typeof CURRENT_DISPLAY.state === "string") {
    displayCards();
  } else {
    displayProject(cardId);
  }
};

const toggleCheckState = (e, itemIndex) => {
  const parentCardId = Number(
    e.target.closest(".project__container").id.split("-")[1]
  );
  const newState = e.target.checked;

  projects.forEach((project) => {
    if (project.id === parentCardId) {
      project.toggleCheckItem(itemIndex, newState);
    }
  });

  const listItemParent = e.target.closest(".checkbox-container");

  toggleCheckStyle(newState, listItemParent);
};

const toggleCheckStyle = (newState, listItemParent) => {
  if (newState === true) {
    listItemParent.classList.add("item-checked");
  } else {
    listItemParent.classList.remove("item-checked");
  }
};

const updateProjectSideList = () => {
  const listTitles = projects.map(({ id, title }) => ({ id, title }));
  ProjectListDisplay(listTitles);
};

const displayProject = (cardId) => {
  removeChildren(heroSection);

  projects.forEach((project) => {
    if (cardId === project.id) {
      heroSection.appendChild(
        ProjectTemplate(project.id, project.title, project.listItems)
      );
    }
  });
  updateProjectSideList();
  grabInputs();
};

const toggleEditMenu = (e, editItemIndex) => {
  const parentEl = e.target.closest(".project__container-list");
  const menuContainer = parentEl.querySelectorAll(".edit-item-menu-container")[
    editItemIndex
  ];

  if (menuContainer.classList.contains("hidden")) {
    toggleHidden(menuContainer);
  } else {
    toggleHidden(menuContainer);
    displayCards();
  }
};

const editListItem = (projectId, itemIndex, itemValue, itemKey) => {
  projects.forEach((project) => {
    if (project.id === projectId) {
      project.editListItem(itemIndex, itemKey, itemValue);
    }
  });
};

function grabInputs() {
  const editItemsList = document.querySelectorAll(".edit-item-input");
  editItemsList.forEach((input) => {
    if (input.classList.contains("list-item-title")) {
      input.addEventListener("input", function (e) {
        const projectId = Number(
          e.target.closest(".project__container").id.split("-")[1]
        );

        const itemIndex = Number(e.target.dataset.titleIndex);

        const itemValue = input.textContent;

        const itemKey = "title";

        editListItem(projectId, itemIndex, itemValue, itemKey);
      });
    } else {
      input.addEventListener("change", function (e) {
        const itemIndex = Number(
          e.target.closest("[data-edit-item]").dataset.editItem
        );
        const projectId = Number(
          e.target.closest(".project__container").id.split("-")[1]
        );

        const currentElement = e.target;

        const itemValue = e.target.value;

        currentElement.value = itemValue;
        const itemKey = e.target.name.split("-")[1];

        editListItem(projectId, itemIndex, itemValue, itemKey);
      });
    }
  });

  const editItemBtns = document.querySelectorAll("[data-edit-index]");
  editItemBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const editItemIndex = Number(this.dataset.editIndex);

      toggleEditMenu(e, editItemIndex);
    });
  });

  const projectsListBtns = document.querySelectorAll(".projects-list-btn");
  projectsListBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const parentCardId = Number(this.dataset.projectBtn);
      CURRENT_DISPLAY.state = parentCardId;
      displayProject(parentCardId);
    });
  });

  const deleteProjectBtns = document.querySelectorAll(".delete-project-btn");
  deleteProjectBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const parentCardId = Number(this.dataset.deleteProject);
      deleteProject(parentCardId);
    });
  });

  const deleteListItemBtns = document.querySelectorAll("[data-delete-index]");

  deleteListItemBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const itemListIndex = Number(this.dataset.deleteIndex);
      deleteListItem(e, itemListIndex);
    });
  });

  const listCheckBoxes = document.querySelectorAll("[data-check-index]");

  listCheckBoxes.forEach((checkBox) => {
    checkBox.addEventListener("change", function (e) {
      const itemListCheckIndex = Number(this.dataset.checkIndex);

      toggleCheckState(e, itemListCheckIndex);
    });
  });

  const listInputs = document.querySelectorAll("[data-input-item]");

  listInputs.forEach((item) => {
    item.addEventListener("change", function (e) {
      const inputCardId = Number(this.dataset.inputItem);
      const newItemText = e.target.value;

      addNewListItem(inputCardId, newItemText);
    });
  });
}

function displayCards(currentProjectId, currentItemIndex) {
  removeChildren(heroSection);
  let current_filter = filterProjects(CURRENT_DISPLAY.state);

  if (current_filter) {
    current_filter.forEach((project) => {
      heroSection.appendChild(
        ProjectTemplate(
          project.id,
          project.title,
          project.listItems,
          currentProjectId,
          currentItemIndex
        )
      );
    });
  } else {
    projects.forEach((project) => {
      heroSection.appendChild(
        ProjectTemplate(
          project.id,
          project.title,
          project.listItems,
          currentProjectId,
          currentItemIndex
        )
      );
    });
  }

  grabInputs();
}

projectAddForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = document.querySelector(".title");

  if (title.value.trim() === "") {
    return;
  }

  const fields = [];

  fields.push(title);
  const newProject = new Project(PROJECTS_ID_COUNTER, title.value);

  projects.push(newProject);

  CURRENT_DISPLAY.state = PROJECTS_ID_COUNTER;

  PROJECTS_ID_COUNTER++;

  updateProjectSideList();
  fieldsReset(fields);

  projectAddForm.submit();

  if (typeof CURRENT_DISPLAY.state === "string") {
    displayCards();
  } else {
    displayProject(CURRENT_DISPLAY.state);
  }
});

const deleteProject = (id) => {
  const filteredProjects = projects.filter((project) => project.id !== id);
  projects = filteredProjects;
  updateProjectSideList();
  CURRENT_DISPLAY.state = "";
  displayCards();
};

const filterProjects = (filter) => {
  let filteredProjects;
  if (filter === "") return "";

  if (typeof filter === "number") {
    filteredProjects = projects.filter((project) => project.id == filter);
  } else if (typeof filter === "string") {
    return projects;
  }

  return filteredProjects;
};
