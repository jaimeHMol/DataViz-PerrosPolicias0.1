
var main = function(){


    

    // Se agrega el evento submit
    // El $ sirve para acceder al contenido que almacena el objeto
    $('form').submit(function(event){
        console.log('hizo click');
    });

    

}
$(document).ready(main);


$('#var1').slider({
	formatter: function(value) {
		return 'Valor actual: ' + value;
	}
});
$('#var2').slider({
	formatter: function(value) {
		return 'Valor actual: ' + value;
	}
});
$('#var3').slider({
	formatter: function(value) {
		return 'Valor actual: ' + value;
	}
});
$('#var4').slider({
	formatter: function(value) {
		return 'Valor actual: ' + value;
	}
});
$('#var5').slider({
	formatter: function(value) {
		return 'Valor actual: ' + value;
	}
});
$('#var6').slider({
	formatter: function(value) {
		return 'Valor actual: ' + value;
	}
});
$('#var7').slider({
	formatter: function(value) {
		return 'Valor actual: ' + value;
	}
});