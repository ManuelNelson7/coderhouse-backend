//Crear una función 'mostrarLetras' que reciba un string y muestre una vez por segundo cada uno de los caracteres del string.
const fin = () => console.log('terminé')
function mostrarLetras(string) {
    for (let i = 0; i < string.length; i++) {
        setTimeout(function () {
            console.log(string[i]);
        }
            , i * 1000);
    }
    fin()
}

mostrarLetras("Hola");