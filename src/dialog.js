import customCreateElement from "./customCreateElement"


const Dialog = () => {
    const dialogElement = customCreateElement("dialog", {className: "add-project-dialog"});

    const addForm = customCreateElement("form", {id: "add-form", method:"dialog"});
}