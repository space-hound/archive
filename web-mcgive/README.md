# web-mcgive

[Live Demo Here!](https://space-hound.github.io/web-mcgive/)

> "Minecraft" content and materials are trademarks and copyrights of Mojang and its licensors. This app is not affiliated with Mojang. This app purpose is for study only.
> 
A Minecraft console `give command` generator app, made with pure JavaScript and SCSS.

Each part of the application is designed as a component (in the pure JavaScript sense) with it's template, logic and state. The command will always change depending on the user changes and selections. Each change is saved in a state object, from where, based on it's content the command will be generated or regenerated.

 - The actual logic and source files are [here](https://github.com/space-hound/web-mcgive/tree/master/src/js/mcgive).

 - It also uses some [node scripts](https://github.com/space-hound/web-mcgive/tree/master/scripts) for [copying the files](https://github.com/space-hound/web-mcgive/blob/master/scripts/CopyAssets.js) when the app it's ready for building, generating some imports, etc..

 - Te repository also contains [a crawler](https://github.com/space-hound/web-mcgive/blob/master/scripts/GetEnchantments.js) that will crawl on [this page ](https://www.digminecraft.com/lists/enchantment_list_pc.php) and search the table for all enchantments and their maximum level and id. It will save them to JavaScript object, convert their level from roman numerals to arabic. This was used to get a list with all enchantments that are available to each item.

 - The items images assets are taken from [here](https://github.com/PrismarineJS/minecraft-assets).

 - This is an example of generated command: 
 
<p align="center">
	<img src="https://i.imgur.com/n3emV6C.png" alt="command">
</p>