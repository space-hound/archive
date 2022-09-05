import _BlanaInterval from "./_blana-interval";

export default ( element, options ) => {
    let comp = new _BlanaInterval(element, options);
    comp.Build();

    return comp;
}