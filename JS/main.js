            //variables
 //Variables de la seccion de armado de la PC:
let procesador_marca = "No seleccionado";
let procesador_producto = "No seleccionado";
let procesador_precio = 0;
let motherboard_marca = "No seleccionado";
let motherboard_producto = "No seleccionado";
let motherboard_precio = 0;
let RAM_marca = "No seleccionado";
let RAM_producto = "No seleccionado";
let RAM_precio = 0;
let disco_marca = "No seleccionado";
let disco_producto = "No seleccionado";
let disco_precio = 0;
let grafica_marca = "No seleccionado";
let grafica_producto = "No seleccionado";
let grafica_precio = 0;
let fuente_marca = "No seleccionado";
let fuente_producto = "No seleccionado";
let fuente_precio = 0;
let cooler_marca = "No seleccionado";
let cooler_producto = "No seleccionado";
let cooler_precio = 0;
let gabinete_marca = "No seleccionado";
let gabinete_producto = "No seleccionado";
let gabinete_precio = 0;
let precioFinal = 0;
let nombreUsuario;


            //Funciones

function traerDatos(json){ //Traer datos de los Json de DataBase
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", json, true);
    xhttp.send();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let e = 0;
            localStorage.setItem("datos", datos);
            for(let item of datos){
                e = e + 1;
                $(`#objeto${e.toString()}`).prepend(`<p>Marca: ${item.marca}</p>
                                                    <p>Producto: ${item.producto}</p>
                                                    <p>Precio: ${item.precio}</p>
                                                    <p>${averiguarStock(item.stock)}</p>`);
            }
        }
    }
}
function averiguarStock(cantidad){//Busca dentro de la base de datos json si hay stock de los productos
    let devuelve;
    if(cantidad > 0){
        return devuelve = `<p class="siStock" >Hay stock disponible</p>`;
    }
    else
        return devuelve = `<p class="noStock" >No hay stock disponible</p>`;
}
function seguimientoClick(producto) { //Seguimiento de los productos seleccionados en el armado de la PC
    $("#muestra2").empty();
    switch (producto) {
        case "Procesador":
            seleccionProcesador()
            break;
        case "Motherboard":
            seleccionMother();
            break;
        case "MemoriaRAM":
            seleccionRAM();
            break;
        case "DiscoRigido":
            seleccionDisco();
            break;
        case "TargetaGrafica":
            seleccionGrafica();
            break;
        case "Fuente":
            seleccionFuente();
            break;
        case "Cooler":
            seleccionCooler();
            break;
        case "Gabinete":
            seleccionGabinete();
            break;
        case "Final":
            seleccionFinal();
            break;
        default:
            break;
    }
}
function guardarUsuario() { //Local Storage. Guardar usuario.
    let nombreUsuario = $("#nombreUsuario").val();
    let emailUsuario = $("#emailUsuario").val();
    let contraeniaUsuario = $("#contraseniaUsuario").val();
    localStorage.setItem('nombre', nombreUsuario);
    localStorage.setItem('email', emailUsuario);
    localStorage.setItem('password', contraeniaUsuario);
    console.log(nombreUsuario);
    console.log(emailUsuario);
    console.log(contraeniaUsuario);
}
function iniciarSecion() { //Inicio de seccion de los usuarios
    $("#iniciarSecion").empty();
    let usuario = localStorage.getItem("nombre");
    $("#muestraSecion").append(`<li class="nav-item dropdown menu__item">
                                    <a class="nav-link nav-item-comon dropdown-toggle">Bienvenido: ${usuario}</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><input onclick="borrarUsuario(); location.reload()" value="Cambiar usuario" type="button" class="btn text-uppercase submitButton"></button></li>
                                    </ul>
                                </li>`);
}
function borrarUsuario() { //Borra los datos de usuario guardados en el local sotrage
    localStorage.removeItem('nombre');
    localStorage.removeItem('email');
}

