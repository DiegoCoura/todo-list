import "./style.css";
import { Project } from "./constructors";
import {
  addDays,
  compareAsc,
  format,
  isAfter,
  isBefore,
  isEqual,
} from "date-fns";
import {
  fieldsReset,
  removeChildren,
  removeClass,
  toggleClass,
  toggleHidden,
} from "./helpers";
import ProjectListDisplay from "./Components/ProjectListDisplay";
import ProjectTemplate from "./Components/ProjectTemplate";
import DisplayTasks from "./Components/DisplayTasks";

let projects = [];
let PROJECTS_ID_COUNTER = 0;
const CURRENT_DISPLAY = {
  state: "",
};

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

const filterTasksByDate = () => {
  const todayDate = new Date();

  let filteredTasks = [];

  const todayFormattedDate = format(todayDate, "yyyy-MM-dd");

  projects.forEach((project) => {
    project.listItems.forEach((item, index) => {
      if (item.date) {
        let localItemDate = new Date(item.date);

        localItemDate.setMinutes(
          localItemDate.getMinutes() + localItemDate.getTimezoneOffset()
        );

        if (CURRENT_DISPLAY.state === "today") {
          if (
            isEqual(format(localItemDate, "yyyy-MM-dd"), todayFormattedDate)
          ) {
            let itemCopy = item;
            itemCopy.projectId = project.id;
            itemCopy.itemIndex = index;
            filteredTasks.push(itemCopy);
          }
        }

        if (CURRENT_DISPLAY.state === "thisWeek") {
          const oneWeekLater = format(addDays(todayDate, 7), "yyyy-MM-dd");

          if (
            isEqual(format(localItemDate, "yyyy-MM-dd"), todayFormattedDate) ||
            (isAfter(format(localItemDate, "yyyy-MM-dd"), todayFormattedDate) &&
              isBefore(format(localItemDate, "yyyy-MM-dd"), oneWeekLater))
          ) {
            let itemCopy = item;
            itemCopy.projectId = project.id;
            itemCopy.itemIndex = index;
            filteredTasks.push(itemCopy);
          }
        }
        if (CURRENT_DISPLAY.state === "thisWeek") {
          filteredTasks.sort(function compare(a, b) {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date);
            return dateA - dateB;
          });
        }
      }
    });
  });

  removeChildren(heroSection);
  heroSection.appendChild(DisplayTasks(filteredTasks));
  grabInputs();
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

function displayCards() {
  removeChildren(heroSection);
  let current_filter = filterProjects(CURRENT_DISPLAY.state);

  if (current_filter) {
    current_filter.forEach((project) => {
      heroSection.appendChild(
        ProjectTemplate(project.id, project.title, project.listItems)
      );
    });
  } else {
    projects.forEach((project) => {
      heroSection.appendChild(
        ProjectTemplate(project.id, project.title, project.listItems)
      );
    });
  }

  grabInputs();
}

const updateProjectSideList = () => {
  const listTitles = projects.map(({ id, title }) => ({ id, title }));
  ProjectListDisplay(listTitles);
};

if (!localStorage.getItem("projects")) {
  localStorage.setItem("projects", JSON.stringify(projects));
} else {
  const projectsJson = JSON.parse(localStorage.getItem("projects"));
  projectsJson.forEach((project) => {
    const newProject = new Project(
      project.id,
      project.title,
      project.listItems
    );

    projects.push(newProject);
  });

  if (projects.length !== 0) {
    const projectsIds = projects.map(({ id }) => id);

    PROJECTS_ID_COUNTER = Math.max(...projectsIds) + 1;
  }

  updateProjectSideList();
  displayCards();
}

const updateLocalStorage = () => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

window.addEventListener("resize", function () {
  if (window.innerWidth > 576) {
    const sidebar = document.querySelector(".sidebar");
    const mainContainer = document.querySelector(".main");

    removeClass(sidebar, "hidden");
    removeClass(mainContainer, "grid-small");
  }
});

const collapseMenuBtn = document.querySelector(".collapse-btn");
collapseMenuBtn.addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");

  const mainContainer = document.querySelector(".main");

  toggleClass(mainContainer, "grid-small");

  toggleHidden(sidebar);
});

const getAllProjectsBtn = document.querySelector(".sidebar-navigation__all");
getAllProjectsBtn.addEventListener("click", function () {
  CURRENT_DISPLAY.state = "";

  displayCards();
});

const getTodayBtn = document.querySelector(".sidebar-navigation__today");
getTodayBtn.addEventListener("click", function () {
  CURRENT_DISPLAY.state = "today";

  filterTasksByDate();
});

const getThisWeekBtn = document.querySelector(".sidebar-navigation__this-week");

getThisWeekBtn.addEventListener("click", function () {
  CURRENT_DISPLAY.state = "thisWeek";

  filterTasksByDate();
});

const deleteListItem = (e, deleteIndex) => {
  const projectId = Number(
    e.target.closest(".list-item-container").id.split("-")[1]
  );

  projects.forEach((project) => {
    if (project.id === projectId) {
      project.removeListItem(deleteIndex);
    }
  });

  updateLocalStorage();

  if (typeof CURRENT_DISPLAY.state === "string") {
    if (
      CURRENT_DISPLAY.state === "today" ||
      CURRENT_DISPLAY.state === "thisWeek"
    ) {
      filterTasksByDate();
    } else {
      displayCards();
    }
  } else {
    displayProject(projectId);
  }
};

const replaceItem = (projectId, draggedItemIndex, currentItemIndex) => {
  projects.forEach((project) => {
    if (project.id === projectId) {
      project.changeItemPosition(draggedItemIndex, currentItemIndex);
    }
  });
  updateLocalStorage();
  displayCards();
};

const addNewListItem = (
  projectId,
  itemTitle,
  itemDescription,
  itemPriority
) => {
  const newItem = {
    isChecked: false,
    title: itemTitle,
    description: itemDescription,
    priority: itemPriority,
  };

  projects.forEach((project) => {
    if (project.id === projectId) {
      project.addListItem(newItem);
    }
  });

  updateLocalStorage();

  if (typeof CURRENT_DISPLAY.state === "string") {
    displayCards();
  } else {
    displayProject(projectId);
  }
};

const toggleCheckState = (e, itemIndex) => {
  const parentCardId = Number(
    e.target.closest(".list-item-container").id.split("-")[1]
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

const displayProject = (projectId) => {
  removeChildren(heroSection);

  projects.forEach((project) => {
    if (projectId === project.id) {
      heroSection.appendChild(
        ProjectTemplate(project.id, project.title, project.listItems)
      );
    }
  });
  updateProjectSideList();
  grabInputs();
};

const toggleEditMenu = (e) => {
  const parentEl = e.target.closest(".list-item-container");
  const menuContainer = parentEl.querySelector(".edit-item-menu-container");

  if (menuContainer.classList.contains("hidden")) {
    toggleHidden(menuContainer);
  } else {
    toggleHidden(menuContainer);
    if (
      CURRENT_DISPLAY.state === "today" ||
      CURRENT_DISPLAY.state === "thisWeek"
    ) {
      filterTasksByDate();
    } else {
      displayCards();
    }
  }
};

const editListItem = (projectId, itemIndex, itemValue, itemKey) => {
  projects.forEach((project) => {
    if (project.id === projectId) {
      project.editListItem(itemIndex, itemKey, itemValue);
    }
  });
  updateLocalStorage();
};

let dragged;

function grabInputs() {
  const itemContainers = document.querySelectorAll(".list-item-container");
  itemContainers.forEach((item) => {
    item.addEventListener("dragstart", function (e) {
      e.stopPropagation();
      e.dataTransfer.dropEffect = "move";
      dragged = e.target;
      this.closest(".list-item-container").classList.add("dragging");
    });

    item.addEventListener("dragend", function (e) {
      e.target.classList.remove("dragging");
    });

    item.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    item.addEventListener("dragenter", function (e) {
      e.target.closest(".list-item-container").classList.add("dragover");
    });

    item.addEventListener("dragleave", function (e) {
      e.target.closest(".list-item-container").classList.remove("dragover");
    });

    item.addEventListener("drop", function (e) {
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = "move";

      e.target.closest(".list-item-container").classList.remove("dragover");

      const targetProjectId = e.target
        .closest(".list-item-container")
        .classList[1].split("-")[0];
      const targetItemIndex = e.target
        .closest(".list-item-container")
        .classList[1].split("-")[1];

      const draggedProjectId = dragged.classList[1].split("-")[0];
      const draggedItemIndex = dragged.classList[1].split("-")[1];

      if (draggedProjectId === targetProjectId) {
        replaceItem(
          Number(targetProjectId),
          Number(draggedItemIndex),
          Number(targetItemIndex)
        );
      }
    });
  });

  const editItemsList = document.querySelectorAll(".edit-item-input");
  editItemsList.forEach((input) => {
    if (input.classList.contains("list-item-title")) {
      input.addEventListener("input", function (e) {
        const projectId = Number(
          e.target.closest(".list-item-container").id.split("-")[1]
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
          e.target.closest(".list-item-container").id.split("-")[1]
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
      toggleEditMenu(e);
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
  updateLocalStorage();

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
  if (projects.length === 0) {
    PROJECTS_ID_COUNTER = 0;
  }
  displayCards();
  updateLocalStorage();
};
