const ContactItemModel = (function() {

    function ContactItemModel(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.id = (Date.now()).toString();
    }

    return function(name, phone, email) {
        return new ContactItemModel(name, phone, email);
    }

})();

const ContactItemController = (function() {

    const events = {
        onClickAddButton ( event ) {
            showModal(true);
        },
        
        onClickEdit ( event ) {
            const firstParent = event.target.closest(SELECTORS.contactEdit);
            const secondParent = event.target.closest(SELECTORS.contactItem);
            if (!(firstParent && secondParent)){
                return;
            };

            showModal(false, secondParent.dataset.id);
        }, 
        
        onClickDelete ( event ) {
            const firstParent = event.target.closest(SELECTORS.contactDel);
            const secondParent = event.target.closest(SELECTORS.contactItem);
            if (!(firstParent && secondParent)){
                return;
            };

            const id = event.target.closest(SELECTORS.contactItem).dataset.id;
            
            deleteContact(id, event.target.closest(SELECTORS.contactItem));
        },

        onClickSave ( event ) {
            const inputs = [...UTILS.getItems(SELECTORS.modalInputs)];
            const id = UTILS.getItem(SELECTORS.modal).dataset.edit;
            if(UTILS.getItem(SELECTORS.modal).dataset.edit !== "") {
                editContact(id, inputs[0].value, inputs[1].value, inputs[2].value);
            } else {
                createContact(inputs[0].value, inputs[1].value, inputs[2].value);
            }

            inputs.forEach( input => {
                input.value = "";
            });
            UTILS.getItem(SELECTORS.modal).dataset.edit = "";
            hideModal();
        },

        onClickDiscard ( event ) {
            UTILS.getItem(SELECTORS.modal).dataset.edit = "";
            hideModal();
        }
    }

    /*------------------------------------------------------------------------*/
    const showModal = (isNew, id) => {
        const modal = UTILS.getItem(SELECTORS.modal);
        UTILS.toggleDisplay(modal, true);

        if(!isNew) {
            modal.dataset.edit = id;
            const inputs = [...UTILS.getItems(SELECTORS.modalInputs)];
            inputs[0].value = STATE.list[id].name;
            inputs[1].value = STATE.list[id].phone;
            inputs[2].value = STATE.list[id].email;
        }
    }

    const hideModal = () => {
        const modal = UTILS.getItem(SELECTORS.modal);
        UTILS.toggleDisplay(modal, false);
        const inputs = [...UTILS.getItems(SELECTORS.modalInputs)];
        inputs.forEach( input => {
            input.value = "";
        })
    }
    /*------------------------------------------------------------------------*/
    const createContact = (name, phone, email) => {
        const contact = new ContactItemModel(name, phone, email);

        STATE.list[contact.id] = contact;

        UTILS.getItem(SELECTORS.contactsList).insertAdjacentHTML(
            'afterBegin',
            TEMPLATE(name, phone, email, contact.id)
        )
    }
    const deleteContact = (id, element) => {
        let parent = element.parentElement;
        parent.removeChild(element);
        delete STATE.list[id];
    }

    const editContact = (id, name, phone, email) => {
        STATE.list[id].name = name;
        STATE.list[id].phone = phone;
        STATE.list[id].email = email;

        let edited = document.querySelector("[data-id='" + id + "']");

        edited.querySelector(".contacts-name p").innerHTML = name;
        edited.querySelector(".contacts-phone p").innerHTML = phone;
        edited.querySelector(".contacts-email p").innerHTML = email;
    };
    /*------------------------------------------------------------------------*/

    return events;

})();
