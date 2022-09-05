# web-cypher

 - [Live Demo Here!](https://space-hound.github.io/web-cypher/)
<br>

A simple web app, where you can encrypt/decrypt text with [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher) or a Custom one, you can also load a custom one from json like strings. With a nice [Bootstrap 4](https://getbootstrap.com/) interface.  It is implemented with:
 - [jQuery](https://jquery.com/)
 - [Bootstrap](https://getbootstrap.com/)
 
 The app, it has a [State](https://github.com/space-hound/web-cypher/blob/master/js/cypher-state/state.js) and is in a sense reactive , achieved with the [publish/subscribe pattern](https://github.com/space-hound/web-cypher/blob/master/js/cypher-reactor/reactor.js). And is made with the [classical module pattern based on IIFE's](https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6). In a sense it is also a [SPA](https://www.youtube.com/watch?v=lXO0ylemz68) as it has like 3 pages(views) that are "rendered" with a quite basic function to swap between views:
```javascript
changeView( reqV ) {

	if(reqV  !==  undefined) {
		STATE.VIEW.requestedView  =  reqV;
	}
	
	$(STATE.VIEW.currentView).css("opacity", "0");
	
	setTimeout( function ( currentV, reqV ) {
		$(STATE.VIEW.currentView).addClass("d-none");
		$(STATE.VIEW.requestedView).removeClass("d-none");
		$(STATE.VIEW.requestedView).css("opacity", "1");
		STATE.VIEW.currentView  =  STATE.VIEW.requestedView;
		STATE.VIEW.requestedView  =  "";
	}, STATE.VIEW.transitionDuration )
}
```
