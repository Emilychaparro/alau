

function calcular(base,altura){

    let area ;
    let perimetro ;

    area=base*altura;
    perimetro=2*(base+altura);

    return [area,perimetro]

}

function calcularHipotenusa(a,b){

    const hipotenusa = Math.sqrt(a**2+b**2);
    return hipotenusa;
}
    function calculadora(a,b){

        document.write(a+b);
        document.write(a*b);
        document.write(a-b);
        document.write(a/b);

}

function calculadora(a,b){

}

function media(){

    let campo_x = document.getElementById("x");
    let campo_y = document.getElementById("y");
    let campo_z = document.getElementById("z");

    let x=parseInt(campo_x.value);
    let y=parseInt(campo_y.value);
    let z=parseInt(campo_z.value);

    let promedio=(x+y+z)/3

    return promedio;
}