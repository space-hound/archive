const table = document.querySelector("table.std_table");

const rows = ( table => {
    const rows = [...table.rows];
    rows.shift();
    return rows;
})(table);

const romanToArabic = (numeral) => {

    const lowerCaseNumeral = numeral.toLowerCase();
    
    switch(lowerCaseNumeral) {
        case "ix": return 9;
        case "viii": return 8;
        case "vii": return 7;
        case "vi": return 6;
        case "v": return 5;
        case "iv": return 4;
        case "iii": return 3;
        case "ii": return 2;
        case "i": return 1;
        default: throw new Error("WRONG NUMERAL AUGUSTUS!!!");
    }
}

const mapData = {
    name(row) {
        return row[0].querySelector("em").innerText;
    },

    maxLevel(row) {
        return romanToArabic(row[1].innerText);
    },

    id(row) {
        return row[3].innerText;
    }
}

const getPartialJson = (name, maxLevel, id) => {
    return `
            "${name}": {
                "maxLevel": ${maxLevel},
                "id": ${id}
            }`;
}

const getFinalJson = (jsonEnch) => {
    return `
        "enchantments": { 
            ${jsonEnch}
        }
    `;
}

let partialJson = "";
let finalJson = "";


rows.forEach( (element, index, array) => {

    const columns = [...element.cells];

    partialJson += getPartialJson(
        mapData.name(columns),
        mapData.maxLevel(columns),
        mapData.id(columns)
    );

    if(index < array.length - 1) {
        partialJson += `,`;
    }
    
});

finalJson = getFinalJson(partialJson);