const MOD_TEMPLATE = ({name, link, comments}, index) => {
    return `
        <div class="mod" style="display:${comments === "" ? "none" : "inherit"}">
            <h1>MOD NUMBER: #${index}</h1>
            <a class="name" href="${link}" target="_blank">${name}</a>
            <a class="open" href="${link}?tab=files" target="_blank">Open Files</a>
            <p>${comments || ""}</p>
        </div>
    `;
}

const CREATE_MODS = () => {
    const mods = MODS.map(MOD_TEMPLATE);
    document.querySelector(".container").insertAdjacentHTML('afterbegin', mods.join(""));
}

document.addEventListener('DOMContentLoaded', CREATE_MODS);