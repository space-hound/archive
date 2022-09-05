var navbar;
var sticky;


document.addEventListener('DOMContentLoaded', function(){
	navbar = document.getElementById("navbar");
	sticky = navbar.offsetTop;

	var liElements = document.getElementsByClassName("other-pages");

	for (var i = 0; i < liElements.length; i++) {
		liElements[i].addEventListener("mouseenter", function() {
			document.getElementById("current-page").classList.toggle("selected");
		});
		liElements[i].addEventListener("mouseleave", function() {
			document.getElementById("current-page").classList.toggle("selected");
		});
	}
});

window.addEventListener("scroll", function(){

	if (window.pageYOffset >= sticky) {
	    navbar.classList.add("sticky")
	} 
	else {
	    navbar.classList.remove("sticky");
	}
});