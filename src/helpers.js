export const toggleFormHidden = (selectSection, selectedOption) => {
  if (selectedOption === "todo") {
    selectSection.classList.remove("hidden");
  } else if (selectedOption === "checklist") {
    selectSection.classList.remove("shown");
  }
};

export const fieldsReset = (fieldsArray) => {
  fieldsArray.forEach((field) => {
    if (field.id === "project-type") {
      field.value = "checklist";
    } else if (field.id === "project-priority") {
      field.value = "standard";
    } else {
      field.value = "";
    }
  });
};

export const customCreateElement = (elementTag, props = {}) => {
  const customElement = document.createElement(elementTag);

  Object.entries(props).forEach(([key, value]) => {
    customElement[key] = value;
  });

  return customElement;
};

export const removeChildren = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
};
