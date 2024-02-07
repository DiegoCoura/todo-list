import "./style.css";
import { Todo, CheckList } from "./constructors";
import {
  fieldsReset,
  toggleFormHidden,
  customCreateElement,
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

function displayCards(arrayOfCards) {
  removeChildren(heroSection);
  if (arrayOfCards) {
    arrayOfCards.forEach(
      (project, index, removeListItem = { removeListItem }) => {
        if (project.type === "checklist") {
          heroSection.appendChild(
            ChecklistCard(project.title, project.listItems, index, projects)
          );
        } else if (project.type === "todo") {
          heroSection.appendChild(TodoCard(index));
        }
      }
    );
  } else {
    displayCards(projects);
  }
}

const removeListItem = (index) => {
  console.log(projects[index]);
};

const addListItem = (newItem) => {
  this.listItems.push(newItem);
};

const addListInputs = () => {
  const allListInputs = document.querySelectorAll(".list-input");

  console.log(allListInputs);
  
  allListInputs.forEach((listInput) => {
    // const listInput = customCreateElement("input", {
    //   type: "text",
    //   className: "list-input",
    // });
    console.log(listInput)
    listInput.addEventListener("change", function (e) {
      console.log(e.target.parentNode.id);
      addListItem(e);
    });
  });
};
// addListInputs();

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

    addListInputs();
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
console.log(testChecklist)

testChecklist.addListItem( { title:"novo item"} )
console.log(testChecklist)
testChecklist.addListItem( { title:"novo item1"} )
console.log(testChecklist)
testChecklist.addListItem( { title:"novo item2"} )

console.log(testChecklist)