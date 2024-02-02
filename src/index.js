import "./style.css";
import customCreateElement from "./customCreateElement";

function Todo(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

function CheckList(title) {
  this.title = title;
  this.listItems = [];

  function addListItem(item) {
    this.listItems.push(item);
  }
}

function openDialog() {
  addProjectDialog.showModal();
}

function closeDialog() {
  addProjectDialog.close();
}

const projects = [];

const addProjectDialog = document.querySelector(".add-project-dialog");

const cancelBtn = document.querySelector(".cancel-btn");

cancelBtn.addEventListener("click", function () {
  closeDialog();
});

const addBtns = document.querySelectorAll(".add-btn");

addBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    openDialog();
  })
);

const selectSection = document.querySelector(".form-section");

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
const projectType = document.getElementById("projectType");
projectType.addEventListener("change", function () {
  handleSelectType(projectType.value);
});
