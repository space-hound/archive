import _BlanaCarousel from "./_blana-carousel";

export default ( element ) => {
    let comp = new _BlanaCarousel(element);
    comp.Build();

    return comp;
}