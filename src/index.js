import "./style.css";
import customCreateElement from "./customCreateElement";

const projects = [];

function Todo(type, title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

function CheckList(type, title) {
  this.title = title;
  this.listItems = [];

  function addListItem(item) {
    this.listItems.push(item);
  }
}

const addProjectDialog = document.querySelector(".add-project-dialog");

const cancelBtn = document.querySelector(".cancel-btn");
const addBtns = document.querySelectorAll(".add-btn");
const selectSection = document.querySelector(".form-section");
const projectType = document.getElementById("project-type");

const addForm = document.getElementById("add-form");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let type = document.getElementById("project-type").value;
  let title = document.querySelector(".title").value;
  let description = document.querySelector(".description").value;
  let dueDate = document.querySelector(".due-date").value;
  let priority = document.getElementById("project-priority").value;

  if (title.trim() === "") {
    return;
  }

  if (type === "checklist") {
    const newChecklist = new CheckList(type, title);
    projects.push(newChecklist);
  } else if (type === "todo") {
    const newTodo = new Todo(type, title, description, dueDate, priority);
    projects.push(newTodo);
  }

  addForm.submit();
});

cancelBtn.addEventListener("click", function () {
  closeDialog();
});

addBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    openDialog();
  })
);

projectType.addEventListener("change", function () {
  handleSelectType(projectType.value);
});

function openDialog() {
  addProjectDialog.showModal();
}

function closeDialog() {
  addProjectDialog.close();
}

function handleSelectType(selectedOption) {
  console.log(selectedOption);
  if (selectedOption === "todo") {
    selectSection.classList.remove("hidden");
    selectSection.classList.add("shown");
  } else if (selectedOption === "checklist") {
    selectSection.classList.remove("shown");
    selectSection.classList.add("hidden");
  }
}
