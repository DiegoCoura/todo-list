export const toggleHidden = (element) => {
  element.classList.toggle("hidden");
};

export const toggleClass = (element, className) => {
  element.classList.toggle(className)
};

export const removeClass = (element, className) => {
  if (element.classList.contains(className)){
    element.classList.remove(className);
  }
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
