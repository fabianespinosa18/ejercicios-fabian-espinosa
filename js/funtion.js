function saludo(){
    var s;
    var r;
    var m;
    var n;
    var n1;
    var d;
 n = parseInt(prompt("igrese el valor 1"))
 n1 = parseInt(prompt("igrese el valor 2"))
 s = n + n1;
 r = n - n1;
 m = n * n1;
 d = n / n1;
alert("la suma es: " + s)
alert("la resta es: " + r)
alert("la multiplicacion es: " + m)
alert("la division es: " + d)
}
function cuadrado(){
    var n;
    var igual;
 n = parseInt(prompt("ingrese el numero"))
 igual = n * n;
alert("el cuadrado del numero es: " + igual)
}
function area(){
    var b;
    var h;
    var area;
b = parseInt(prompt("ingrese la base del triangulo"));
h = parseInt(prompt("ingrese la altura de triangulo"));
area = (b * h)/2
alert("el area del triangulo es: " + area);
}
function unidades(){
    var p;
    var c;
    var k;
    var i;
    p = parseInt(prompt("ingrese el valor en pulgadas"));
    c = p * 2.54
    k = p * (1 / 39.37) 
    i = k * (1 / 1000)
    alert("las pulgadas en centimetros es : " + c);
    alert("las pulgadas en kilometross es : " + i);
}
function año(){
    var edad;
    var año;
    var total;
    edad = parseInt(prompt("ingrese su edad"));
    año = parseInt(prompt("ingrese el año actual"));
    total = año - edad;
    alert("su año de nacimiento es el: " + total)
}
function promedio(){
    alert("Ingrese sus 7 calificaciones");
var Na;
var Nb;
var Nc;
var Nd;
var Nf;
var Ng;
var Nh;
var suma;
var promedio;

Na = parseInt(prompt("Ingrese el primer nota"));
Nb = parseInt(prompt("Ingrese el segunda nota"));
Nc = parseInt(prompt("Ingrese el tercera nota"));
Nd = parseInt(prompt("Ingrese el cuarta nota"));
Nf = parseInt(prompt("Ingrese el quinta nota"));
Ng = parseInt(prompt("Ingrese el sexta nota"));
Nh = parseInt(prompt("Ingrese el septima nota"));

suma = (Na+Nb+Nc+Nd+Nf+Ng+Nh);
promedio = suma/7;

 if (promedio<3 ) {
    alert("REPROBO, su nota es:" + promedio);}
else {
    alert("APROBO, su nota es: " + promedio);}
}
function capital(){
    var inver;
    var ano;
    var gana;
    inver = parseInt(prompt("ingrese el valor a invertir"));
    ano = parseInt(prompt("ingrese los años"));
    gana = inver * 0.008
    ano1 = ano * 12
    total1 = ano1 * gana
    total2 = total1 + inver

    alert("el valor de sus ganancias es de: " + total1 );
    alert ("el total de su inversion y sus ganacias son de: " + total2 );
}
function manzanas() {
var n;
var total;
var d1;
var t1;
n = parseInt(prompt("ingrese el kilo que compro el cliente"))
if (n<=2) {
    total = n * 4500
    alert("el descuento es de: 0 %");
    alert("el total a pagar es: " + total);
}else
if (n>=3 && n<=5) {
    total = n * 4500
    d1 = total * 0.10
    t1 = total - d1
    alert("el descuento es de: 10 % :" + d1);
    alert("el total a pagar es: " + t1);

}
if (n>=6 && n<=10) {
    total = n * 4500
    d1 = total * 0.15
    t1 = total - d1
    alert("el descuento es de: 15 % que son : " + d1);
    alert("el total a pagar es: " + t1);

}
else if (n>=10) {
    total = n * 4500
    d1 = total * 0.20
    t1 = total - d1
    alert("el descuento es de: 20 % :" + d1);
    alert("el total a pagar es: " + t1);

}
 }
function nume(){
    num = 0;
    total = 0;
    num = parseInt(prompt("ingrese numeros"))
    while (num >= 1) {
        num = num / 10
        total = total + 1

    }
    alert("los numeros ingresados fueron: " + total);

}
function obrero(){
    var hora;
    hora = parseInt(prompt("ingrese las horas que trabajo"))
    if (hora<=40){
        total=hora * 10000
        alert("su sueldo es de: " + total);

    }else{
        if (hora>40) {
            horaex=hora-40;
            total=(horaex*20000)+(40*10000);
            alert("su sueldo es de: "+ total);

    }
}

    
}