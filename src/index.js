import "./style.css";
import { Todo, CheckList } from "./constructors";
import { fieldsReset, toggleFormHidden, removeChildren } from "./helpers";
import ChecklistCard from "./Components/ChecklistCard";
import TodoCard from "./Components/TodoCard";

const projects = [];

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
  const parentCardIndex = Number(
    e.target.closest(".checklist__card").id.split("-")[1]
  );
  projects[parentCardIndex].removeListItem(deleteIndex);
  displayCards();
};

const addNewListItem = (e, cardIndex, itemText) => {
  const newItem = {
    isChecked: false,
    text: itemText,
  };
  projects[cardIndex].addListItem(newItem);

  displayCards();
};

const toggleCheckState = (e, itemIndex) => {
  const parentCardIndex = Number(
    e.target.closest(".checklist__card").id.split("-")[1]
  );
  const newState = e.target.checked;
  projects[parentCardIndex].toggleCheckItem(itemIndex, newState);

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
  const cardIndex = e.target.closest(".checklist__card").id.split("-")[1];
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
  projects[cardIndex].changeBgColor(bgColor);
  console.log(projects[cardIndex]);
};

function grabInputs() {
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
      const inputCardIndex = Number(this.dataset.inputItem);
      const newItemText = e.target.value;

      addNewListItem(e, inputCardIndex, newItemText);
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

function displayCards(arrayOfCards) {
  removeChildren(heroSection);
  if (arrayOfCards) {
    arrayOfCards.forEach((project, index) => {
      if (project.type === "checklist") {
        heroSection.appendChild(
          ChecklistCard(
            project.title,
            project.listItems,
            index,
            project.bgColor
          )
        );
      } else if (project.type === "todo") {
        heroSection.appendChild(TodoCard(index));
      }
    });
  } else {
    projects.forEach((project, index) => {
      if (project.type === "checklist") {
        heroSection.appendChild(
          ChecklistCard(
            project.title,
            project.listItems,
            index,
            project.bgColor
          )
        );
      } else if (project.type === "todo") {
        heroSection.appendChild(TodoCard(index));
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
    const newChecklist = new CheckList(type.value, title.value);
    projects.push(newChecklist);
  } else if (type.value === "todo") {
    fields.push(type, title, description, dueDate, priority);
    const newTodo = new Todo(
      type.value,
      title.value,
      description.value,
      dueDate.value,
      priority.value
    );

    projects.push(newTodo);
  }

  fieldsReset(fields);
  toggleFormHidden(selectSection, projectType.value);
  addForm.submit();

  displayCards();
});

const filterProjects = (filter) => {
  const filteredProjects = projects.filter((project) =>
    filter ? project.type === filter : project
  );
  return filteredProjects;
};

const getAllProjectsBtn = document.querySelector(".sidebar-navigation__all");
getAllProjectsBtn.addEventListener("click", function () {
  displayCards();
});

const getCheklistsBtn = document.querySelector(
  ".sidebar-navigation__checklists"
);

getCheklistsBtn.addEventListener("click", function () {
  displayCards(filterProjects("checklist"));
});

const getTodosBtn = document.querySelector(".sidebar-navigation__todos");
getTodosBtn.addEventListener("click", function () {
  displayCards(filterProjects("todo"));
});
