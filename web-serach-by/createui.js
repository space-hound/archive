const createOption = (value) => {
    return `<option value="${value}">${value}</option>`;
}

const createTag = ({publisher, author, title}) => {
    return `
        <div class="tag" data-publisher="${publisher}" data-author="${author}" data-title="${title}">
            <h3>${title}</h3>
            <p>${author}</p>
            <h6>${publisher}</h6>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const AUTHOR_SELECT = document.getElementById("author");
    const PUBLISHER_SELECT = document.getElementById("publisher");
    const TAGS_CONTAINER = document.getElementById("tags-container");

    let tags = [];
    let authors = {};
    let publishers = {};
    
    BOOKS.forEach(book => {
        if(!authors[book.author]) {
            authors[book.author] = book.author;
        }
        if(!publishers[book.publisher]) {
            publishers[book.publisher] = book.publisher;
        }
        tags.push(createTag(book));
    });

    authors = Object.keys(authors).map(createOption);
    publishers = Object.keys(publishers).map(createOption);
    
    TAGS_CONTAINER.insertAdjacentHTML('afterbegin', tags.join(""));
    AUTHOR_SELECT.insertAdjacentHTML('afterbegin', authors.join(""));
    PUBLISHER_SELECT.insertAdjacentHTML('afterbegin', publishers.join(""));
});