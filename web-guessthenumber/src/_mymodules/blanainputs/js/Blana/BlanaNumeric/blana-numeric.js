import _BlanaNumeric from "./_blana-numeric";

export default ( element , options ) => {
    const comp = new _BlanaNumeric(element, options);
    comp.Build();
    return comp;
}