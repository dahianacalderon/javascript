opc=parseInt(prompt("Ingresa la opcion que quieras elegir 1. Area Cuadrado  2. Area Rectangulo 3. Area Triangulo 4. Suma 5. Resta. 6. Multiplicacion 7. Division 8. Cual es mayor 9. Salir "));
    switch(opc){
        case 1:
            lado= parseInt(prompt("Ingresa La base"));
            var resultado = lado*lado;
            alert ("El area es " +resultado);
                if(base != 0){
                    document.write("El resultado del area del cuadrado es :" + resultado);
                }else{
                    alert("Error, ingrese valores diferentes de cero");
                }
            break;
        case 2:
            base= parseInt(prompt("Ingresa La base"));
            altura = parseInt(prompt("Ingresa La Altura"));
            var resultado = base*altura;
            alert ("El area es " +resultado);
                if(base != 0 && altura != 0){
                    document.write("El resultado del area del rectangulo es :" + resultado);
                }else{
                    alert("Error, ingrese valores diferentes de cero");
                }
            break;
        case 3:
            base= parseInt(prompt("Ingresa La base"));
            altura = parseInt(prompt("Ingresa La Altura"));
            var resultado = base*altura/2;
            alert ("El area es " +resultado);
                if(base != 0 && altura != 0){
                    document.write("El resultado del area del triangulo es :" + resultado);
                }else{
                    alert("Error, ingrese valores diferentes de cero");
                }
            break;
        case 4:
            suma= parseInt(prompt("Ingresa el primer numero a sumar"));
            suma= parseInt(prompt("Ingresa el segundo numero a sumar"));
            var resultado= suma+suma;
            alert ("La suma es "+resultado) ;
                if(suma != 0 && suma != 0){
                    document.write ("El resultado de la suma es : " + resultado);
                }else{
                    alert("Error, ingrese valores diferentes de cero");
                }
        case 5:
            resta= parseInt(prompt("Ingresa el primer numero a restar"));
            resta= parseInt(prompt("Ingresa el segundo numero a restar"));
            var resultado= resta-resta;
            alert ("La resta es "+resultado) ;
                if(suma != 0 && suma != 0){
                    document.write ("El resultado de la resta es: " + resultado);
                }else{
                    alert("Error, ingrese valores diferentes de cero");
                }
        case 6:
            multiplicacion= parseInt(prompt("Ingresa el primer numero a multiplicar "));
            multiplicacion= parseInt(prompt("Ingresa el segundo numero a multiplicar "));
            var resultado= multiplicacion*multiplicacion;
            alert ("La multplicacion es "+resultado) ;
                if(suma != 0 && suma != 0){
                    document.write ("El resultado de la multiplicacion es : " + resultado);
                }else{
                    alert("Error, ingrese valores diferentes de cero");
                }
        case 7:
            division= parseFloat(prompt("Ingresa el primer numero a dividir "));
            division2= parseFloat(prompt("Ingresa el segundo numero a dividir "));
            var resultado= division/division2;
            alert ("La division es "+resultado) ;
                if(suma != 0 && suma != 0){
                    document.write ("El resultado de la division es : " + resultado);
                }else{
                    alert("Error, ingrese valores diferentes de cero");
                }
        case 8:
            numero1 = parseFloat(prompt("Ingresa el primer numero :"));
            numero2= parseFloat(prompt("Ingresa el segundo numero :"))
            var resultado= numero1 / numero2;
            if (numero1 > numero2) {
                document.write("El número " + numero1 + " es mayor que " + numero2);
            } else if (numero2 > numero1) {
                document.write("El número " + numero2 + " es mayor que " + numero1);
            }else{
                alert("Error, ingrese valores diferentes de cero");
            }
        case 9:
            alert("Gracias por usar la calculadora vuelva pronto");
            break;
        default:
            alert("Opcion no valida");
    }







    





