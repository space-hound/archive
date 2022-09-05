import "./temp.scss";

import BlanaText from "./js/BlanaText/blana-text";
import BlanaNumeric from "./js/BlanaNumeric/blana-numeric";
import BlanaInterval from "./js/blanaInterval/blana-interval";
import BlanaCarousel from "./js/BlanaCarousel/blana-carousel";
import BlanaSelect from "./js/BlanaSelect/blana-select";

document.addEventListener("DOMContentLoaded", function() {
    let blanaText = BlanaText(document.querySelector(".temp-blana-text"));
    let blanaNumeric = BlanaNumeric(document.querySelector(".temp-blana-numeric"));
    let blanaInterval = BlanaInterval(document.querySelector(".temp-blana-interval"));
    let blanaCarousel = BlanaCarousel(document.querySelector(".temp-blana-carousel"));
    let blanaSelect = BlanaSelect(document.querySelector(".temp-blana-select"));

    console.log(blanaText);
    console.log("\n");
    console.log(blanaNumeric);
    console.log("\n");
    console.log(blanaInterval);
    console.log("\n");
    console.log(blanaCarousel);
    console.log("\n");
    console.log(blanaSelect);
})