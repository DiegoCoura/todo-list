import "./style.css";
import { Todo, CheckList } from "./constructors";
import { fieldsReset, toggleFormHidden, customCreateElement, removeChildren } from "./helpers";
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

function displayCards() {
  projects.forEach((project) => {
    if (project.type === "checklist") {
      heroSection.appendChild(ChecklistCard(project.title));
    } else if (project.type === "todo") {
      heroSection.appendChild(TodoCard());
    }
  });
}

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  removeChildren(heroSection);

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

  displayCards();
  fieldsReset(fields);
  toggleFormHidden(selectSection, projectType.value);
  addForm.submit();
  console.log(projects);
});

// heroSection.appendChild(ChecklistCard("primeiro card"));
// heroSection.appendChild(ChecklistCard("segundo card"));

// const addListItemBtn = document.querySelector(".checklist__card-add-btn");
// addListItemBtn.addEventListener("click", function () {
//   console.log(this);
// });
