export function toggleFormHidden(selectSection, selectedOption) {
  if (selectedOption === "todo") {
    selectSection.classList.remove("hidden");
    selectSection.classList.add("shown");
  } else if (selectedOption === "checklist") {
    selectSection.classList.remove("shown");
    selectSection.classList.add("hidden");
  }
}

export function fieldsReset(fieldsArray) {
  fieldsArray.forEach((field) => {
    if (field.id === "project-type") {
      field.value = "checklist";
    } else if (field.id === "project-priority") {
      field.value = "standard";
    } else {
      field.value = "";
    }    
  });

}
