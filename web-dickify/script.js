const template = (word, index) => { return `<div class="dick-word" data-index="${index}">${word}</div>`; }


/*
    THANKS TO THIS GUY:
    https://techoverflow.net/2018/03/30/copying-strings-to-the-clipboard-using-pure-javascript/
*/
function copyStringToClipboard(str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str.toUpperCase();
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
}

document.addEventListener('DOMContentLoaded', function () {
    let theDick = "";
    
    document.querySelector("input").addEventListener("input", function (event) {
        const dickHolder = document.querySelector(".dick-display");
        dickHolder.innerHTML = "";
        const dickWords = this.value.split(" ");
        dickWords.forEach((word, index) => {
            dickHolder.insertAdjacentHTML("beforeend", template(word, index));
        });

    })
    document.querySelector(".dick-clear").addEventListener("click", (event) => {
        document.querySelector("input").value = "";
        document.querySelector(".dick-display").innerHTML = "";
    })
    document.querySelector(".dick-display").addEventListener("click", (event) => {
        if (!event.target.classList.contains("dick-word")) { return; }
        const index = event.target.dataset.index;
        let arr = document.querySelector("input").value.split(" ");
        arr[index] = "DICK";
        theDick = arr.join(" ");
        event.target.innerHTML = "DICK";
    })
    document.querySelector("button").addEventListener("click", (event) => {
        copyStringToClipboard(theDick);
    })
});