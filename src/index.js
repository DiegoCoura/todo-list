import "./style.css";
import { Project } from "./constructors";
import { fieldsReset, removeChildren } from "./helpers";
import ProjectListDisplay from "./Components/ProjectListDisplay";
import ProjectTemplate from "./Components/ProjectTemplate";

let projects = [];
let PROJECTS_ID_COUNTER = 0;
const CURRENT_DISPLAY = {
  state: "",
};

const addProjectDialog = document.querySelector(".add-project-dialog");

const cancelBtn = document.querySelector(".cancel-btn");
const addBtns = document.querySelectorAll(".add-btn");

const addForm = document.getElementById("add-form");
const heroSection = document.querySelector(".hero");

cancelBtn.addEventListener("click", function () {
  closeDialog();
});

addBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    openDialog();
  })
);

const openDialog = () => {
  addProjectDialog.showModal();
};

const closeDialog = () => {
  addProjectDialog.close();
};

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

const addNewListItem = (e, cardId, itemTitle, itemDescription, itemPriority) => {
  const newItem = {
    isChecked: false,
    title: itemTitle,
    description: itemDescription,
    priority: itemPriority
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

// const toggleColorOptions = (e) => {
//   const colorOptionsContainer = e.target.previousElementSibling;
//   if (colorOptionsContainer.classList.contains("hidden")) {
//     colorOptionsContainer.classList.remove("hidden");
//   } else {
//     colorOptionsContainer.classList.add("hidden");
//   }
// };

// const changeCardColor = (e) => {
//   const cardId = Number(
//     e.target.closest(".project__container").id.split("-")[1]
//   );
//   const parentCard = e.target.closest(".project__container");
//   const btnId = e.target.id.split("-")[2];
//   let bgColor;
//   btnId === "1"
//     ? (bgColor = "#F7D15F")
//     : btnId === "2"
//     ? (bgColor = "#FCA397")
//     : btnId === "3"
//     ? (bgColor = "#79D997")
//     : (bgColor = "#D1A8FF");

//   parentCard.style.backgroundColor = bgColor;

//   projects.forEach((project) => {
//     if (project.id === cardId) {
//       project.changeBgColor(bgColor);
//     }
//   });
// };

const updateProjectList = () => {
  const listTitles = projects.map(({ id, title }) => ({ id, title }));
  ProjectListDisplay(listTitles);
};

const changeHeroDisplay = (display) => {
  if (heroSection.classList.contains(display)) return;

  if (heroSection.classList.contains("grid")) {
    heroSection.classList.remove("grid");
    heroSection.classList.add("flex");
  } else if (heroSection.classList.contains("flex")) {
    heroSection.classList.remove("flex");
    heroSection.classList.add("grid");
  }
};

const displayProject = (cardId) => {
  removeChildren(heroSection);

  projects.forEach((project) => {
    if (cardId === project.id) {
      heroSection.appendChild(
        ProjectTemplate(
          project.id,
          project.title,
          project.listItems,
          project.description,
          project.dueDate,
          project.priority
        )
      );
    }
  });
  updateProjectList();
  grabInputs();
};

function grabInputs() {
  const projectsListBtns = document.querySelectorAll(".projects-list-btn");
  projectsListBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const parentCardId = Number(this.dataset.projectBtn);
      CURRENT_DISPLAY.state = parentCardId;
      displayProject(parentCardId);
    });
  });

  const deleteCardBtns = document.querySelectorAll(".delete-card-btn");
  deleteCardBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const parentCardId = Number(this.dataset.deleteCard);
      deleteProject(parentCardId);
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

      addNewListItem(e, inputCardId, newItemText);
    });
  });

  // const toggleColorBtnsList = document.querySelectorAll(".toggle-color-btn");
  // toggleColorBtnsList.forEach((btn) => {
  //   btn.addEventListener("click", function (e) {
  //     toggleColorOptions(e);
  //   });
  // });

  // const colorOptionsBtnsList = document.querySelectorAll(".color-option-btn");
  // colorOptionsBtnsList.forEach((btn) => {
  //   btn.addEventListener("click", function (e) {
  //     changeCardColor(e);
  //   });
  // });
}

function displayCards() {
  removeChildren(heroSection);
  let current_filter = filterProjects(CURRENT_DISPLAY.state);

  if (current_filter) {
    current_filter.forEach((project) => {
      heroSection.appendChild(
        ProjectTemplate(
          project.id,
          project.title,
          project.listItems,
          project.description,
          project.dueDate,
          project.priority
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
          project.description,
          project.dueDate,
          project.priority
        )
      );
    });
  }

  grabInputs();
}

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = document.querySelector(".title");
  let description = document.querySelector(".description-text-area");
  let dueDate = document.querySelector(".due-date");
  let priority = document.getElementById("project-priority");

  if (title.value.trim() === "") {
    return;
  }

  const fields = [];

  fields.push(title, description, dueDate, priority);
  const newProject = new Project(
    PROJECTS_ID_COUNTER,
    title.value,
    description.value,
    dueDate.value,
    priority.value
  );

  projects.push(newProject);
  PROJECTS_ID_COUNTER++;

  updateProjectList();
  fieldsReset(fields);
  console.log(projects)
  addForm.submit();

  if (typeof CURRENT_DISPLAY.state === "string") {
    displayCards();
  } else {
    displayProject(CURRENT_DISPLAY.state);
  }
});

const deleteProject = (id) => {
  const filteredProjects = projects.filter((project) => project.id !== id);
  projects = filteredProjects;
  updateProjectList();
  CURRENT_DISPLAY.state = "";
  displayCards();
};

const filterProjects = (filter) => {
  let filteredProjects;
  if (filter === "") return "";

  if (typeof filter === "number") {
    filteredProjects = projects.filter((project) => project.id == filter);
  } else if (typeof filter === "string") {
    return projects
  }

  return filteredProjects;
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
