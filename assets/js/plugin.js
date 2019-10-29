$(document).ready(function() {
    $('.tooltipped').tooltip();
    $('.sidenav').sidenav();
    $('select').formSelect();
    $('.dropdown-trigger').dropdown();
    $('.tabs').tabs();

    $("#deletebtn").click(function(){
        $("#deletediv").remove();
    });
});