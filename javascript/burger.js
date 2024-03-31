/* Burger Menu Interaction */
let isOpen = false

    function toggle_sidebar(){
        isOpen ? sidebar_close():sidebar_open()
    }
    function sidebar_open() {
    document.getElementById("kau_sidebar").style.display = "block";
    isOpen=true

}
    function sidebar_close() {
    document.getElementById("kau_sidebar").style.display = "none";
    isOpen=false
}