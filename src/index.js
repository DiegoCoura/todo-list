import "./style.css";
import customCreateElement from "./customCreateElement";

const projects = [];

function Todo(type, title, description, dueDate, priority) {
  this.type = type;
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

function CheckList(type, title) {
  this.type = type;
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
    console.log(newChecklist);
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

function fieldsReset(fieldsArray) {
  fieldsArray.forEach((field) => {
    if (field.id === "project-type") {
      field.value = "checklist";
    } else {
      field.value = "";
    }
  });
}

function openDialog() {
  addProjectDialog.showModal();
}

function closeDialog() {
  addProjectDialog.close();
}

function handleSelectType(selectedOption) {
  if (selectedOption === "todo") {
    selectSection.classList.remove("hidden");
    selectSection.classList.add("shown");
  } else if (selectedOption === "checklist") {
    selectSection.classList.remove("shown");
    selectSection.classList.add("hidden");
  }
}
