const nombres = ['Iker', 'Jaze', 'Frank', 'Floky']

let nuevoUsuario = ''

do {
    if (nuevoUsuario != '') {
        alert('El nombre de usuario ya existe, ingresee uno nuevo')
    }

    nuevoUsuario = prompt('Ingrese un nombre de usuario:')
} while (nombres.includes(nuevoUsuario));

nombres.push(nuevoUsuario)
console.log(nombres)
alert('El noombre de usuario fue creado con exito')

function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolarb = 374;
    var dolaro = 187.56;
    if (document.getElementById("uno").checked) {
        resultado = valore / dolarb;
        alert("El cambio de Pesos a Dolar Blue es de $" + resultado);
    }
    else if (document.getElementById ("dos").checked){
        resultado = valore / dolaro;
        alert("El cambio de Pesos a Dolar Oficial es de $" + resultado);

    }
    else{
        alert("tiene que completar todos los reequerimientos")
    }
}

