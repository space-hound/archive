# web-ageofwar

 - [Live Demo Here!](https://space-hound.github.io/web-ageofwar/index.html)
 - [Rules Here!](https://space-hound.github.io/web-ageofwar/rules.html)
 - [Credits Here!](https://space-hound.github.io/web-ageofwar/credits.html)

It's a JavaScript turn based game, where player have to conquer as many castles as they can with a set of dices.

The app was made with:
 - [jQuery](https://jquery.com/)
 - [Bootstrap](https://getbootstrap.com/)
 - [Chance.js](https://chancejs.com/)
 - [FontAwesome](https://fontawesome.com/)
 - [FileSaver.js](https://github.com/eligrey/FileSaver.js/)

<hr>

 - As it has multiple pages, it uses [a custom webpack config](https://github.com/space-hound/web-ageofwar/tree/master/webpack) that allow easy configuration for multiple entry points.
 - The app has no backend, so the pages communicate between the with a [custom object](https://github.com/space-hound/web-ageofwar/blob/master/src/scripts/abstracts/storage.js) that was build with the [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) api.
 - For reactivity it uses [a custom publish/subscribe pattern](https://github.com/space-hound/web-ageofwar/blob/master/src/scripts/abstracts/reactor.js), implemented on top of [jQuery](https://jquery.com/).
 - The game is made based on [events](https://github.com/space-hound/web-ageofwar/blob/master/src/app/aow-game/_Events.js) and [states](https://github.com/space-hound/web-ageofwar/blob/master/src/app/aow-game/_States.js) that are in a way combined with other logic to ensure the game functionalities, in [this file](https://github.com/space-hound/web-ageofwar/blob/master/src/app/aow-game/GameActions.js).
 - The [maps](https://github.com/space-hound/web-ageofwar/tree/master/src/config/maps) where build on this [page](https://space-hound.github.io/web-ageofwar/map-creator.html) and the with [FileSaver.js](https://github.com/eligrey/FileSaver.js/) were saved in `.json` format and included in the source files.
 - Most of the UI elements are implemented in a sense as [components](https://github.com/space-hound/web-ageofwar/tree/master/src/modules), as most of the has their `template`, `style` and `logic`. 
 - The [dice rolling animation](https://github.com/space-hound/web-ageofwar/blob/master/src/modules/SingleDice/index.js#L49), that looks like a slot machine animation, is made by inserting `N` images into an html element with the css prop `overflow: hidden`, and then changing their top position, over a period of time with [$.animate()](https://api.jquery.com/animate/), achieving that effect.

## Structure

 - [Root](https://github.com/space-hound/web-ageofwar/tree/master/src)
 - [Pages](https://github.com/space-hound/web-ageofwar/tree/master/src/app):
	 - [The Game](https://github.com/space-hound/web-ageofwar/tree/master/src/app/aow-game)
	 - [Game Configuration](https://github.com/space-hound/web-ageofwar/tree/master/src/app/new-game)
	 - [Map Creator](https://github.com/space-hound/web-ageofwar/tree/master/src/app/map-creator)
	 - etc.
 - [Modules(Components)](https://github.com/space-hound/web-ageofwar/tree/master/src/modules):
	 - [SingleDice](https://github.com/space-hound/web-ageofwar/tree/master/src/modules/SingleDice)
	 - [DiceGroup](https://github.com/space-hound/web-ageofwar/blob/master/src/modules/DiceGroup/index.js)
	 - [CastleSelector](https://github.com/space-hound/web-ageofwar/tree/master/src/modules/CastleSelector)
	 - [CastleEditor](https://github.com/space-hound/web-ageofwar/tree/master/src/modules/CastleEditor)
	 - [DuelModal](https://github.com/space-hound/web-ageofwar/tree/master/src/modules/DuelModal)
	 - etc.
 - [Scripts(Others)](https://github.com/space-hound/web-ageofwar/tree/master/src/scripts)
	 - [Abstracts](https://github.com/space-hound/web-ageofwar/tree/master/src/scripts/abstracts)
	 - [ImageLoaders](https://github.com/space-hound/web-ageofwar/tree/master/src/scripts/image-loaders)
 - [Styles(General)](https://github.com/space-hound/web-ageofwar/tree/master/src/styles)

<hr>

<p align="center">
	<img src="https://i.imgur.com/KbXv8Fp.png" alt="name editor">
	<img src="https://i.imgur.com/XHDndTN.png" alt="name editor expanded">
</p>

<p align="center">
	<img src="https://i.imgur.com/cezM5OT.png" alt="selector">
</p>

<p align="center">
	<img src="https://i.imgur.com/Gc3JQp1.png" alt="checkbox unchecked">
	<img src="https://i.imgur.com/k0Lgd2S.png" alt="name editor expanded">
</p>

<p align="center">
	<img src="https://i.imgur.com/O79X4Fg.png" alt="castle viewer">
</p>

<p align="center">
	<img src="https://i.imgur.com/KWac5Se.png" alt="castle viewer">
</p>