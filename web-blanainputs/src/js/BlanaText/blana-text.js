import _BlanaText from "./_blana-text";

export default ( element ) => {
    const comp = new _BlanaText(element);
    comp.Build();
    return comp;
}