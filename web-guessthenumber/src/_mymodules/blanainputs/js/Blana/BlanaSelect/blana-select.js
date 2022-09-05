import _BlanaSelect from "./_blana-select";

export default ( element ) => {
    const comp = new _BlanaSelect(element);
    comp.Build();
    return comp;
}