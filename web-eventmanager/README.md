# web-eventmanager

It's an object that manages and keep track of events and the elements that has them attached to.

It uses `ES6` features like [Map](http://es6-features.org/#MapDataStructure), [Symbol](http://es6-features.org/#SymbolType)

When an event is registered using `EventManager`, the element which is registered on is saved in a `Map` as a key and it's value is another `Map` having as keys the types of events registered that again have as values either a selector if it was a delegate event or a symbol if it is a direct event. It looks like this: 

```javascript
	Map(
		HTMLElement: Map(
			type(string): Map(
				selector(string): Map(
					callback: wrapperCallback
				),
				selector(string): Map(
					callback: wrapperCallback
				),
				...
				noSelector(Symbol): Map(
					callback: callback
				)
			)
		...
		)
	)
```

When a delegate event is registered, it takes the callback attached and wrap it inside a function that checks if the event was triggered on an element matching the selector given, and only if it matches than it run the original callback. This way I don't have to check every time when I want to delegate an event if when is triggered, the element triggering it matches, and allows me to easily remove the event if wanted.

```javascript
EventManager.addEvent(type, element, [selector], callback, [options]);
EventManager.remEvent(type, element, [selector], callback, [options]);
```

It also has a `ready` method, which registers callbacks to be executed when the `DOMContentLoaded` event is triggered.
