// TOMAR DATOS DEL HTML
function capturar() {
    function Persona(nombre,nota) {
        this.nombre=nombre;
        this.nota=nota;
    }
    let nombreCapturar = document.getElementById("nombre").value;
    let notaCapturar = document.getElementById("nota").value;

        nuevoSujeto = new Persona(nombreCapturar,notaCapturar);
        agregar()
}

// CARGAR DATOS AL HTML
let baseDatos = [];
function agregar(){
    baseDatos.push(nuevoSujeto);
    document.getElementById("tabla").innerHTML +="<tbody><td>"+nuevoSujeto.nombre+"</td><td>"+nuevoSujeto.nota+"</td></tbody>";
    console.table(baseDatos)
};
