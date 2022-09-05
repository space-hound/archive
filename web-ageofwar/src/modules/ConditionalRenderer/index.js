
export default ( links, cls = "active") => {

    const getIds = ( ) => {
        const ids = [];
    
        links.each( function() {
            ids.push($(this).data("to"));
        });
    
        return ids
    }
    
    const setActive = (target, cls ) => {
    
        links.each( function( ) {
            if(this.isSameNode(target)) {
                $(this).addClass(cls);
            } else {
                $(this).removeClass(cls);
            }
        });
    
    }

    links.on("click", function( event ) {

        event.preventDefault();

        const ids = getIds();

        setActive(this, cls);

        ids.forEach(id => {
            $(`#${id}`).toggleClass("d-none");
        });
    });

}