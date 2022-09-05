document.addEventListener("DOMContentLoaded", ( event ) => {
    document.querySelector(SELECTORS.addButton).addEventListener("click", ContactItemController.onClickAddButton);
    document.querySelector(SELECTORS.modalSave).addEventListener("click", ContactItemController.onClickSave);
    document.querySelector(SELECTORS.modalDiscard).addEventListener("click", ContactItemController.onClickDiscard);
    document.querySelector("body").addEventListener("click", ContactItemController.onClickDelete);
    document.querySelector("body").addEventListener("click", ContactItemController.onClickEdit);
});