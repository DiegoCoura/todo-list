const customCreateElement = (elementTag, props = {}) => {
  const customElement = document.createElement(elementTag);

  Object.entries(props).forEach(([key, value]) => {
    customElement[key] = value;
  });

  return customElement;
};

export default customCreateElement;
