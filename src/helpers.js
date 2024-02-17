export const toggleHidden = (element) => {
  element.classList.toggle("hidden");
};

export const removeHidden = (element) => {
  element.classList.remove("hidden");
}

export const fieldsReset = (fieldsArray) => {
  fieldsArray.forEach((field) => {
    field.value = "";
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

export const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
