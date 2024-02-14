import "./style.css";
import { Todo, CheckList } from "./constructors";
import { fieldsReset, toggleFormHidden, removeChildren } from "./helpers";
import ChecklistCard from "./Components/ChecklistCard";
import TodoCard from "./Components/TodoCard";

let projects = [];
let PROJECTS_ID_COUNTER = 0;
const CURRENT_DISPLAY = {
  state: "",
};

const addProjectDialog = document.querySelector(".add-project-dialog");

const cancelBtn = document.querySelector(".cancel-btn");
const addBtns = document.querySelectorAll(".add-btn");
const selectSection = document.querySelector(".form-section");
const projectType = document.getElementById("project-type");

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

projectType.addEventListener("change", function () {
  toggleFormHidden(selectSection, projectType.value);
});

const openDialog = () => {
  addProjectDialog.showModal();
};

const closeDialog = () => {
  addProjectDialog.close();
};

const deleteListItem = (e, deleteIndex) => {
  const parentCardId = Number(
    e.target.closest(".checklist__card").id.split("-")[1]
  );
  projects[parentCardId].removeListItem(deleteIndex);
  displayCards();
};

const addNewListItem = (e, cardId, itemText) => {
  const newItem = {
    isChecked: false,
    text: itemText,
  };
  projects[cardId].addListItem(newItem);

  displayCards();
};

const toggleCheckState = (e, itemIndex) => {
  const parentCardId = Number(
    e.target.closest(".checklist__card").id.split("-")[1]
  );
  const newState = e.target.checked;
  projects[parentCardId].toggleCheckItem(itemIndex, newState);

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

const toggleColorOptions = (e) => {
  const colorOptionsContainer = e.target.previousElementSibling;
  if (colorOptionsContainer.classList.contains("hidden")) {
    colorOptionsContainer.classList.remove("hidden");
  } else {
    colorOptionsContainer.classList.add("hidden");
  }
};

const changeCardColor = (e) => {
  const cardId = e.target.closest(".checklist__card").id.split("-")[1];
  const parentCard = e.target.closest(".checklist__card");
  const btnId = e.target.id.split("-")[2];
  let bgColor;
  btnId === "1"
    ? (bgColor = "#F7D15F")
    : btnId === "2"
    ? (bgColor = "#FCA397")
    : btnId === "3"
    ? (bgColor = "#79D997")
    : (bgColor = "#D1A8FF");

  parentCard.style.backgroundColor = bgColor;
  projects[cardId].changeBgColor(bgColor);
};

function grabInputs() {
  const deleteCardBtns = document.querySelectorAll(".delete-card-btn");
  deleteCardBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const parentCardId = Number(this.dataset.deleteCard);
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

  const toggleColorBtnsList = document.querySelectorAll(".toggle-color-btn");
  toggleColorBtnsList.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      toggleColorOptions(e);
    });
  });

  const colorOptionsBtnsList = document.querySelectorAll(".color-option-btn");
  colorOptionsBtnsList.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      changeCardColor(e);
    });
  });
}

function displayCards() {
  removeChildren(heroSection);
  let current_filter = filterProjects(CURRENT_DISPLAY.state);

  if (current_filter) {
    current_filter.forEach((project) => {
      if (project.type === "checklist") {
        heroSection.appendChild(
          ChecklistCard(
            project.id,
            project.title,
            project.listItems,
            project.bgColor
          )
        );
      } else if (project.type === "todo") {
        heroSection.appendChild(TodoCard(project.id));
      }
    });
  } else {
    projects.forEach((project) => {
      if (project.type === "checklist") {
        heroSection.appendChild(
          ChecklistCard(
            project.id,
            project.title,
            project.listItems,
            project.bgColor
          )
        );
      } else if (project.type === "todo") {
        heroSection.appendChild(TodoCard(project.id));
      }
    });
  }

  grabInputs();
}

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let type = document.getElementById("project-type");
  let title = document.querySelector(".title");
  let description = document.querySelector(".description");
  let dueDate = document.querySelector(".due-date");
  let priority = document.getElementById("project-priority");

  if (title.value.trim() === "") {
    return;
  }

  const fields = [];

  if (type.value === "checklist") {
    fields.push(type, title);
    const newChecklist = new CheckList(
      PROJECTS_ID_COUNTER,
      type.value,
      title.value
    );

    projects.push(newChecklist);
    PROJECTS_ID_COUNTER++;
  } else if (type.value === "todo") {
    fields.push(type, title, description, dueDate, priority);
    const newTodo = new Todo(
      PROJECTS_ID_COUNTER,
      type.value,
      title.value,
      description.value,
      dueDate.value,
      priority.value
    );

    projects.push(newTodo);
    PROJECTS_ID_COUNTER++;
  }

  fieldsReset(fields);
  toggleFormHidden(selectSection, projectType.value);
  addForm.submit();

  displayCards();
});

const deleteProject = (id) => {
  const filteredProjects = projects.filter((project) => project.id !== id);
  projects = filteredProjects;
  displayCards();
};

const filterProjects = (filter) => {
  const filteredProjects = projects.filter((project) =>
    filter ? project.type === filter : project
  );
  return filteredProjects;
};

const getAllProjectsBtn = document.querySelector(".sidebar-navigation__all");
getAllProjectsBtn.addEventListener("click", function () {
  CURRENT_DISPLAY.state = "";
  displayCards();
});

const getCheklistsBtn = document.querySelector(
  ".sidebar-navigation__checklists"
);

getCheklistsBtn.addEventListener("click", function () {
  CURRENT_DISPLAY.state = "checklist";
  displayCards();
});

const getTodosBtn = document.querySelector(".sidebar-navigation__todos");
getTodosBtn.addEventListener("click", function () {
  CURRENT_DISPLAY.state = "todo";
  displayCards();
});
