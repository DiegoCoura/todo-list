import "./style.css";
import { Todo, CheckList } from "./constructors";
import {
  fieldsReset,
  toggleFormHidden,
  removeChildren,
} from "./helpers";
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
  const currentDeleteBtn = e.target;
  const parentCardIndex = Number(
    currentDeleteBtn.closest(".checklist__card").id.split("-")[1]
  );
  projects[parentCardIndex].removeListItem(deleteIndex);

  displayCards();
};

const addNewListItem = (e, cardIndex, itemText) => {
  projects[cardIndex].addListItem(itemText)
  console.log(projects[cardIndex].listItems)
}
const grabInputs = () => {
  
  const deleteListItemBtns = document.querySelectorAll("[data-delete-index]");
  
  deleteListItemBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const itemListIndex = Number(this.dataset.deleteIndex);
      deleteListItem(e, itemListIndex);
    });
  });

  const listInputs = document.querySelectorAll("[data-input-item]");
  listInputs.forEach((input) => {
    input.addEventListener("change", function (e) {
      const inputCardIndex = Number(this.dataset.inputItem);
      const newItemText = e.target.value;

      projects[inputCardIndex].addListItem(newItemText);
      console.log(projects[inputCardIndex].listItems)
      // addNewListItem(e, inputCardIndex, newItemText);
    })
  })
};

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
            project.addListItem,
            project.removeListItem
          )
        );
      } else if (project.type === "todo") {
        heroSection.appendChild(TodoCard(index));
      }
    });
  } else {
    displayCards(projects);
  }
  // grabInputs();
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

    // addListInputs();
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

  displayCards();
  grabInputs();
  fieldsReset(fields);
  toggleFormHidden(selectSection, projectType.value);
  addForm.submit();
  console.log(projects);

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

const testChecklist = new CheckList("checklist", "Teste Checklist");

testChecklist.addListItem("oi");
testChecklist.addListItem("oi2");
testChecklist.addListItem("oi3");

projects.push(testChecklist);
displayCards();


