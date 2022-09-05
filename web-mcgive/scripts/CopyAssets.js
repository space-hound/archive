"use strict"

const fs = require('fs');
const resolve = require('path').resolve;
const args = [...process.argv];

const fileNames = [
    "sword", "axe", "pickaxe", "shovel", "fishing-rod", "bow", "trident", "boots", "helmet", "chestplate", "leggings"
];

const filePath = (path, name, ext) => path + "\\" + name + ext;

const TheCopier = ( (jsonItems, pathToAssets, pathToNewAssets) => {

    const ITEMS = [];
    
    const readAndParseFiles = () => {
        fileNames.forEach( name => {
            let strContent = fs.readFileSync(filePath(jsonItems, name, ".js"), 'utf8');
            strContent = strContent.replace("export default ", "");
            ITEMS.push(JSON.parse(strContent));
        });
    }
    
    readAndParseFiles();

    ITEMS.forEach( item => {
        if(item.materials) {
            item.materials.forEach( material => {
                const name = material + "_" + item.type;

                if(fs.existsSync(filePath(pathToAssets, name, ".png"))) {
                    fs.copyFileSync(
                        filePath(pathToAssets, name, ".png"),
                         filePath(pathToNewAssets, name, ".png"),
                     );
                }
            });
        } else {
            if(fs.existsSync(filePath(pathToAssets, item.type, ".png"))) {
                fs.copyFileSync(
                    filePath(pathToAssets, item.type, ".png"),
                    filePath(pathToNewAssets, item.type, ".png"),
                );
            }
        }
    });

})(resolve(args[2]), resolve(args[3]), resolve(args[4]));