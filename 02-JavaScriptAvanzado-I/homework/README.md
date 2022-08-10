
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

 // Las diferencias entre una variable declarada y otra sin declarar son: 1. Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales. 

```javascript
x = 1;  // esta declarada en el global PERO EN EL CREATION FHASE NO LO REGISTRA PERO EN EL EXECUTION FASE SI LO TOMA PORQUE YA ESTA DECLARADO POR SI SIN ANTECEDERLE EL VAR POR ESO NO SE HACE EL HOISTING EN LA MEMORIA. 
var a = 5; 
var b = 10;
var c = function(a, b, c) {
   // Los argumentos a,b,c pasan a ser como variables con los siguientes valores:
   // var a = 8
   // var b = 9 *****
   // var c = 10
  var x = 10;
  console.log(x); // es 10 porque esta dentro del scope de la funcion definida dentro de var c. 
  console.log(a); // es 8 porque esta dentro del scope de la funcion. 
  var f = function(a, b, c) {
   // Los argumentos a,b,c pasan a ser como variables con los siguientes valores:
   // var a = 8
   // var b = 9
   // var c = 10
    b = a; // 8
    console.log(b);  // 8  
    b = c;  
    var x = 5;
  } // se ejecuto y se destruye ***** 
  f(a,b,c);
  console.log(b); //9 porque pasa a tomar el valor del scope de var c function (HOISTINGGGG!!!!) y porque la function f se crea se ejecuta y se destruye. Entonces toma valor del scope general de la funcion c.  
}
c(8,9,10);
console.log(b); // 10 porque esta en el scope global 
console.log(x); // 1 porque esta en el scope global
```

```javascript
console.log(bar); //undefined 
console.log(baz); // is not defined // si estaba arriba no habia problema y si se ejecutaba. 
foo(); // 
function foo() { console.log('Hola!'); } // no ejecuta hola porque no llega se ROMPE antes
var bar = 1;
baz = 2; // es global y una expresion, si se ejecuta, tb la crea pero en el creation fase cuando lo ejecuta no lo reconoce, ES DECIR EN EL CREATION PHASE NO LO RECONOCE.  
```

```javascript
var instructor = "Tony";
if(true) { // LOS IF NO CREAN UN NUEVO CONTEXTO DE EJECUCION SOLO LAS FUNCIONES
    var instructor = "Franco"; // ESTE VAR ERA UN LET, NACE Y MUERE ENTRE ESTAS LLAVES, POR ENDE EL CONSOLE. LOG DE ABAJO SERIA " TONY". 
}
console.log(instructor); // Franco 
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony 
(function() {
   if(true) { // el if no genera un nuevo contexto de ejecucion 
      var instructor = "Franco";
      console.log(instructor);// Franco 
   }
})(); // inmediatly function se declara y ejecuta en el mismo momento. 
console.log(instructor); // Tony 
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // "The Flash" 
    console.log(pm); // " Reverse Flash" 
}
console.log(instructor);// The Flash porque el ultimo var declarado es the flash y al estar declarado en un var pisa al var del contexto global donde esta parado. 
console.log(pm); // Franco 
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"  // el number va tomar lo que sea y lo va a convertir en numero, por lo tanto dara 2. 
"2" * "3" // 6 el * no esta definido para string pero se intenta castear a number para hacer la operacion 
4 + 5 + "px" // 9px la suma si esta definida para las strings pero como arranca de izquierda a derecha, y son nuemros, la suma de strings es mas fuerte que la suma de numeros. suma los numbers y despues concatena. 
"$" + 4 + 5 // suma el string $ con el 4 (siempre arranca de izq a der) y le concatena el 5. 
"4" - 2 // 2 . la resta no esta definida asique transforma en number 
"4px" - 2 // NaN , la resta no esta definida para strings entonces intenta transformala en Number a los 4 pixeles y como no puede genera un NaN y la resta de NaN con 2 es NaN. 
7 / 0 // Infinity en realidad tiende a infinito, tendria que dar error en realidad. 
{}[0] // las llaves vacias son como un scope vacio y [0] es un array con una sola posicion , por ende el resultado es [0]
parseInt("09") // 9 el PariNT PARSEA una string a un integer. tb funciona como number. 
5 && 2 // 2 al ser un operador logico && siempre las dos condiciones deben ser true como 5 es true devuelve el siguiente que es un 2. 
2 && 5 // 5 idem que el de arriba 
5 || 0  // en este caso el 5 es true, en este caso no importa ya lo que hay despues del operador logico OR || por ende directamente si se cumple la condicion true el resultado es 5. 
0 || 5  // aqui es igual que arriba peroooo 0 es false por ende debo evaluar el segundo que al ser true resuelve en 5. 
[3]+[3]-[10]   // la suma de strings es mas fuerte que la de numeros, arreglo mas arreglos no concatena arreglos. En este caso concatena el 3 mas 3 y le resta el numero 10 porque la resta no esta definida para strings. 
3>2>1 // FALSE porque ? porque 3>2 es true pero true >1 es false. 
[] == ![] // un boolean de corchetes es TRUE pero boolean de no corchetes es FALSE, por ende el resultado es TRUE. AHORAAAAA SI.. son tres === dara FALSE.. porque con el triple === evaluo tipo de dato y valor. 
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined si despues no lo entiendo reveer video de martina de 5 min antes del min 1:9.  
   console.log(foo()); // 2 

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies'; // al ser FALSE, nunca entra al if y el var = snack queda como undefined en la  memoria del hoisting. 
        // Tener en cuenta que si fuera lET snack *** no se hace el hoisting por ende ... 
        return snack;
    }
    return snack;
}

getFood(false); // undefined// si fuera TRUE el return pasa a ser FRISKIES. *** si fuera LET snack, el resultado sera Meow Mix del contexto padre porque el LET no hace hoisting. 
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // "Aurelio de Rosa " 

var test = obj.prop.getFullname;

console.log(test());// Juan Perez del global (this === windows, si lo corro en la consola del node salta como objeto vacio porque la propieda fullname no existe.)
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // 1
   setTimeout(function() { console.log(2); }, 1000); //4
   setTimeout(function() { console.log(3); }, 0); //3
   console.log(4); //2 
}

printing();
```
