# web-vanillaquery

<br>

*You might not need jQuery, well i tried it and my head hurts!*

<br>

> This repository is inspired by [You Don't Need jQuery](https://blog.garstasio.com/you-dont-need-jquery/), [You (Might) Don't Need jQuery](https://github.com/nefe/You-Dont-Need-jQuery) and [You Might Not Need jQuery](http://youmightnotneedjquery.com/).

<br>

When I started learning `JavaScript`, I did something quite similar, but very simplistic, unfortunately I did not knew how to use git so I lost the files. So I kinda recreated it, but more complex, trying to implement as many functionalities of [jQuery](https://jquery.com/) as I could, related to `DOM Traversal`, `DOM Manipulation`, `Attributes`, `CSS`, `Events` and other `Utilities`. And it's quite a good exercise, that can help a junior learn quite a lot about `JavaScript` and the `DOM`.

<br>

## structure

The main components of this *library* are:

 - [VanillaQueryEngine](https://github.com/space-hound/web-vanillaquery/tree/master/src/VanillaQueryEnginePartials) which is an object containing all functions and logic, split across multiple objects that in the end will be combined in one big object:
	 - [evaluators](https://github.com/space-hound/web-vanillaquery/tree/master/src/VanillaQueryEnginePartials/_evaluators), contains methods that performs certain checks.
	 - [traversal](https://github.com/space-hound/web-vanillaquery/tree/master/src/VanillaQueryEnginePartials/_traversal), contains methods concerning querying the `DOM`.
	 - [manipulation](https://github.com/space-hound/web-vanillaquery/tree/master/src/VanillaQueryEnginePartials/_manipulation), contains methods that mutate the `DOM`.
	 - [styles](https://github.com/space-hound/web-vanillaquery/tree/master/src/VanillaQueryEnginePartials/_styles), contains methods that `get` or `set` styles and other properties related to styles.
	 - [attributes](https://github.com/space-hound/web-vanillaquery/tree/master/src/VanillaQueryEnginePartials/_attributes), contains methods that `get` or `set` attributes and other things related.
	 - [events](https://github.com/space-hound/web-vanillaquery/tree/master/src/VanillaQueryEnginePartials/_events), contains methods related to events and that can access the custom [EventManager](https://github.com/space-hound/web-vanillaquery/blob/master/src/VanillaQueryEnginePartials/_events/EventManager.js) object, that keep track of the events and elements that have attached an event, and easing event delegation; and a reference to the [ReactorManager](https://github.com/space-hound/web-vanillaquery/blob/master/src/VanillaQueryEnginePartials/_events/ReactorManager.js) that implements the `publish/subscribe` pattern.
	 - [transformers](https://github.com/space-hound/web-vanillaquery/tree/master/src/VanillaQueryEnginePartials/_transformers), [variables](https://github.com/space-hound/web-vanillaquery/tree/master/src/VanillaQueryEnginePartials/_variables), [others](https://github.com/space-hound/web-vanillaquery/tree/master/src/VanillaQueryEnginePartials/_others), nothing really interesting here.
- [VanillaQueryFactory](https://github.com/space-hound/web-vanillaquery/tree/master/src/VanillaQueryFactoryPartials) that is a `class` that can create objects similar to the `jQuery` objects (on the surface). This is basically a wrapper for the [VanillaQueryEngine](https://github.com/space-hound/web-vanillaquery/tree/master/src/VanillaQueryEnginePartials).
- [VanillaQuery](https://github.com/space-hound/web-vanillaquery/blob/master/src/VanillaQuery.js) which is a wrapper function for [VanillaQueryFactory](https://github.com/space-hound/web-vanillaquery/tree/master/src/VanillaQueryFactoryPartials), just for quick creation without using the `new` keyword, and has attached all the static methods of  [VanillaQueryEngine](https://github.com/space-hound/web-vanillaquery/tree/master/src/VanillaQueryEnginePartials).

[VanillaQueryFactory](https://github.com/space-hound/web-vanillaquery/tree/master/src/VanillaQueryFactoryPartials) is not fully implemented, as is a tedious job and didn't had the time to do it, but i plan on doing it as soon as I will have time.
