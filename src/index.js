import "./style.css";
import customCreateElement from "./customCreateElement";

const projects = [];

function Todo(props) {
  const { type, title, description, dueDate, priority } = props;

  this.type = type;
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

function CheckList(props) {
  const { type, title } = props;

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

  let type = document.getElementById("project-type").value;
  let title = document.querySelector(".title").value;
  let description = document.querySelector(".description").value;
  let dueDate = document.querySelector(".due-date").value;
  let priority = document.getElementById("project-priority").value;

  if (title.trim() === "") {
    return;
  }

  if (type === "checklist") {
    let fields = { type, title };
    const newChecklist = new CheckList(fields);
    projects.push(newChecklist);
  } else if (type === "todo") {
    let fields = { type, title, description, dueDate, priority };
    const newTodo = new Todo(fields);
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
  if (selectedOption === "todo") {
    selectSection.classList.remove("hidden");
    selectSection.classList.add("shown");
  } else if (selectedOption === "checklist") {
    selectSection.classList.remove("shown");
    selectSection.classList.add("hidden");
  }
}
