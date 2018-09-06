//una funcion nested son las funciones que estan dentro de otras funciones. las funciones de adentro pueden acceder a las variaables
// de la función padre, pero la funcion padre NO puede acceder a las variables de la funcón interna
//  las variables globales pueden ser accesidas desde cualquier parte.
// funciones autoejecutables: (function XXXXX(){}); función que se ejecuta por si sola cuando se ejecute el main.

'use strict'

var a = 1, b = 2, c = 3;

(function firstFunction(){
     b = 5, c = 6;
    (function secondFunction(){
         b = 8;
        (function thirdFunction(){
            var a = 7, c = 9;
            (function fourthFunction(){
                a = 1, c = 8;
            })();
        })();
    })();
})();

console.log("a: "+a+", b: "+b+", c: "+c);