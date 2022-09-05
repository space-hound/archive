const STATE = {
    list: []
}

const SELECTORS = {
    addButton: "#contacts-content .contacts-header button",
    contactItem: ".contact-item",
    contactEdit: ".contacts-action .contact-add",
    contactDel: ".contacts-action .contact-del",
    modal: "#modal-container",
    modalSave: "#modal-container .modal-save",
    modalDiscard: "#modal-container .modal-discard",
    modalInputs: "#modal-container input",
    contactsList: "#contacts-content .contacts-contacts"
}


const UTILS = {
    getItem(selector) {
        return document.querySelector(selector);
    },

    getItems(selector) {
        return document.querySelectorAll(selector);
    },

    toggleDisplay(element, show) {
        if(show) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}

const TEMPLATE = (name, phone, email, id) => {
    return `<div class="contact-item" data-id="${id}">
        <div class="contacts-name">
            <p>${name}</p>
        </div>
        <div class="contacts-phone">
            <p>${phone}</p>
        </div>
        <div class="contacts-email">
            <p>${email}</p>
        </div>
        <div class="contacts-action">
            <button class="contact-add">
                <i class="fa fa-tags" aria-hidden="true"></i>
            </button>
            <button class="contact-del">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    </div>`;
}