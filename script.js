let productos = [
    {nombre: "Arroz", precio: 200},
    {nombre: "Pan", precio: 150},
    {nombre: "Harina", precio: 100},     
]


// TOMAR DATOS DEL HTML
function capturar() {
    function Persona(producto,cantidad,subtotal) {
        this.producto=producto;
        this.cantidad=cantidad;
        this.subtotal=subtotal;
    }
    let productoCapturar = document.getElementById("producto").value;
    let cantidadCapturar = document.getElementById("cantidad").value;
    let subtotal = 0;

           if (productoCapturar == "Arroz" || productoCapturar == "Pan" || productoCapturar == "Harina") {
           switch (productoCapturar) {
                case "Arroz":
                   subtotal = (productos[0].precio*cantidadCapturar)
                   break;
                case "Pan":
                   subtotal = (productos[1].precio*cantidadCapturar)
                   break;
                case "Harina":
                    subtotal = (productos[2].precio*cantidadCapturar)
                    break;
                default:
                   break;
           }
        }
        nuevoSujeto = new Persona(productoCapturar,cantidadCapturar,subtotal);
        agregar()
}


// CARGAR DATOS AL HTML
let baseDatos = [];
function agregar(){
    baseDatos.push(nuevoSujeto);
    document.getElementById("tabla").innerHTML +="<tbody><td>"+nuevoSujeto.producto+"</td><td>"+nuevoSujeto.cantidad+"</td><td>"+nuevoSujeto.subtotal+"</td></tbody>";
    console.log(baseDatos)

    const total =  baseDatos.reduce ((acc,el) => acc + el.subtotal, 0);
    console.log (total) 
    

};






// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);
