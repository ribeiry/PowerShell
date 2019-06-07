//JavaScript Normal
var minhaVar = "minha variavel";
function minhaFunc(x, y) {
    return x + y;
}
//EcmanScript2015
var num = 2;
var pi = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); //EcmanScript2015
//classe
var matematica = (function () {
    function matematica() {
    }
    matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return matematica;
}());
var n1 = 'teste';
n1 = 5;
