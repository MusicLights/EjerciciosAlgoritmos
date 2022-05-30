// Usar promt, cosole log o alert
// 1.- Solicitar 3 números (entre el 1 al 100) y definir cual es mayor
// 2.- Solicitar 3 números (entre el 1 al 100) y definir cual es menor de tres números



let num1;
let num2;
let num3;
let res;

console.log("Elige un número");
console.log("1.- Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor");
console.log("2.- Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números");
console.log("3.- Realizar un algortimo para adivinar un número entre el 1 y el 100 en el menor número de pasos posibles");
console.log("4.- Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3");
console.log("5.- Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos");
console.log("6.- Elabora un algoritmo para leer un número y determinar si es par o impar");

let n=parseInt=(prompt("Opción:",""));
switch (n){
    case 1:
        n1=parseFloat(prompt("Introduce el primer número entre 1 y 100: ", ""));
        n2=parseFloat(prompt("Introduce el segundo número entre 1 y 100 ", ""));
        n3=parseFloat(prompt("Introduce el tercer número entre 1 y 100: ", ""));
        
        if (n1<100 && n2<100 && n3<100 && n>0 && n2>0 && n>0) {
            if (n1>n2 && n1>n3) {
                console.log("El mayor es: " + n1);
            }
            if (n2>n3 && n2>n1) {
                console.log("El mayor es: " + n2);
            }
            if (n3>n1 && n3>n2) {
                console.log("El mayor es: " + n3);
            }
            if (n3==n1 && n3==n2) {
                console.log("El mayor es: " + n3);
            }
            else{
                console.log("Ingresa un número del 1 al 100!");
            }
            break;
        }
    case 2:
        n1=parseFloat(prompt("Introduce el primer número entre 1 y 100: ", ""));
        n2=parseFloat(prompt("Introduce el segundo número entre 1 y 100 ", ""));
        n3=parseFloat(prompt("Introduce el tercer número entre 1 y 100: ", ""));

        if (n1<100 && n2<100 && n3<100 && n1>0 && n2>0 && n3>0) {
            if (n1<n2 && n1<n3) {
                console.log("El menor es: " + n1);
            }
            if (n2<n3 && n2<n1) {
                console.log("El menor es: " + n2);
            }
            if (n3<n1 && n3<n2) {
                console.log("El menor es: " + n3);
            }
            if (n3==n1 && n3==n2) {
                console.log("El menor es: " + n3);
            }
            else{
                console.log("Ingresa un número del 1 al 100!");
            }
            break;
        }
    case 3:
        
    case 4:
        n1=parseFloat(prompt("Ingresa un número entre 100 y 200: ",""));
        res=(n1%3);
        if (res!=0) {
            console.log("No es múltiplo de 3");
        }
        else if(res==0){
            console.log("Es múltiplo de 3");
        }
        break;
    case 5:
        n1=parseFloat(prompt("Introduce el primer número entre 1 y 100: ", ""));
        n2=parseFloat(prompt("Introduce el segundo número entre 1 y 100 ", ""));
        n3=parseFloat(prompt("Introduce el tercer número entre 1 y 100: ", ""));

        if (n1==n2+n3) {
            console.log(n1 + "es la suma de " + n2 + "y" + n3);
        }
        else if(n2==n1+n3){
            console.log(n2 + "es la suma de " + n1 + "y" + n3);
        }
        else if(n3==n1+n2){
            console.log(n3 + "es la suma de " + n1 + "y" + n2);
        }
        else{
            console.log("Ningún número es la suma de los otros dos");
        }
        break;
    case 6:
        n1=parseFloat(prompt("Introduce un número: ", ""));
        res=n1%2;
        if (res==0) {
            console.log("El número es par");
        }
        else{
            console.log("El número es impar");
        }
        default:
            console.log("Elige otra opción");
        break;
}

















/*switch (num1) {
    case num1>num2:
        switch (num1) {
            case num1>num2:
                alert("El número 1 es el mayor de todos");
                break;
        }
        break;
}*/















