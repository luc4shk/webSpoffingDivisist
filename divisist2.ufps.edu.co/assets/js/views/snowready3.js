$(document).ready( function(){
    /*
    * @version 1 (7. Dic 2021)
    * @author William Bermón
    * */
    var host = window.location.protocol + "//" + window.location.host + "/";
    $.post(host + 'Index/navidad', {}, function (datos) {
        if (datos.carga) {
            $.fn.snow({minSize: 5, maxSize: 40, newOn: 1000, flakeColor: 'red', tipo: '&#10052;'});
            $.fn.snow({minSize: 5, maxSize: 40, newOn: 1000, flakeColor: 'red', tipo: '&#10052;'});
            $.fn.snow({minSize: 5, maxSize: 40, newOn: 1000, flakeColor: 'red', tipo: '&#9927;'});
            $.fn.snow({minSize: 5, maxSize: 40, newOn: 1000, flakeColor: 'red', tipo: '&#9927;'});
            $.fn.snow({minSize: 5, maxSize: 40, newOn: 1000, flakeColor: 'red', tipo: '&#9836;'});
            $.fn.snow({minSize: 5, maxSize: 40, newOn: 1000, flakeColor: 'red', tipo: '&#9836;'});
        }
    }, 'json');
});

