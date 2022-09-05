const isTagVisible = (tag, publisher, author, title) => {
    let publisherMatch = true;
    if(publisher !== "") {
        publisherMatch = tag.dataset.publisher === publisher;
    }
    let authorMatch = true;
    if(author !== "") {
        authorMatch = tag.dataset.author === author;
    }
    let titleMatch = true;
    if(title !== "") {
        titleMatch = tag.dataset.title.toLowerCase().includes(title.toLowerCase());
    }
    return publisherMatch && authorMatch && titleMatch; 
}

document.addEventListener('DOMContentLoaded', (event) => {

    const PUBLISHER_SELECT = document.getElementById("publisher");
    const AUTHOR_SELECT = document.getElementById("author");
    const TITLE_INPUT = document.getElementById("title");
    const TAGS = [
        ...document.querySelectorAll(".tag")
    ];

    document.getElementById("search").addEventListener('click', (event) => {
        const publisher = PUBLISHER_SELECT.options[PUBLISHER_SELECT.selectedIndex].value;
        const author = AUTHOR_SELECT.options[AUTHOR_SELECT.selectedIndex].value;
        const title = TITLE_INPUT.value;

        TAGS.forEach(tag => {
            
            if(isTagVisible(tag, publisher, author, title)) {
                tag.style.display = "inherit";
            } else {
                tag.style.display = "none";
            }
            
        });

    });

});
