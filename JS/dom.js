//Igresar usuario en el Index.html
nombreUsuario = localStorage.getItem('nombre');
if (nombreUsuario !== null) { //mientras haya usuario guardado en el local storage se iniciara la funcion para dar la bienvenida al usuario guardado
    iniciarSecion();
}else{
    $("#muestraComenzar").empty();
    $("#muestraComenzar").append(`<form style="display: none" id="formRegistro">
                                    <div class="container-fluid">
                                        <div class="row-fluid">
                                            <div class="row formInicio">
                                                <input id="nombreUsuario" class="formInicio--formato" type="text" name="Nombre" placeholder="Ingrese su Nombre">
                                            </div>
                                            <div class="row formInicio">
                                                <input id="emailUsuario" class="formInicio--formato" type="text" name="Email" placeholder="Ingrese su email">
                                            </div>
                                        </div>
                                        <div class="text-center submitButton-container">
                                            <input onclick="guardarUsuario(); location.reload()" value="Registrar" type="button" class="btn btn-primary text-uppercase submitButton button--color"></button>
                                        </div>
                                    </div>
                                </form>`);
    $("#formRegistro").fadeIn(1000);
}



//Procesador

function seleccionProcesador() {
    $("#muestra2").empty();
    $("#muestra2").append(`<div id="procesadoresSeleccion" class="container">
                            <div class="row">
                                <div class="col procesadores--contenedor__padding">
                                    <button class="procesadorAMD" onclick="seleccionAMD()"><h2>AMD</h2></button>
                                </div>
                                <div class="col procesadores--contenedor__padding">
                                    <button class="procesadorIntel" onclick="seleccionIntel()"><h2>Intel</h2></button>
                                </div>
                            </div>
                        </div>`);
}
function seleccionAMD() {
    $(document).ready(function(){
        $("#muestra2").empty();
        $("#muestra2").append(`<div style="display: none" id="seleccionAMD">
                                <div class="row"><!-- Fila 1-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="AMD_Athom">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Athom.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto1"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionMother('Athom', 'AMD', '8000');">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="AMD_Ryzen3">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Ryzen3.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto2"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionMother('Ryzen3', 'AMD', '12000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="AMD_Ryzen5">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Ryzen5.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto3"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionMother('Ryzen5', 'AMD', '22000')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 2-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="AMD_Ryzen7">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Ryzen7.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto4"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionMother('Ryzen7', 'AMD', '32000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">

                                    </div>
                                    <div class="col-md-4">

                                    </div>
                                </div>
                            </div>`);
        $("#seleccionAMD").fadeIn(1000);
    });
    traerDatos("../DataBase/procesadoresAMD.json");
}
    function seleccionIntel() {
    $(document).ready(function(){
        $("#muestra2").empty();
        $("#muestra2").append(`<div style="display: none" id="seleccionIntel">
                                <div class="row"><!-- Fila 1-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="intel_celeron">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Celeron.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto1"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Selecionar" onclick="seleccionMother('Celeron', 'Intel', '9300')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="intel_pentium">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Pentium.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto2"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionMother('Pentium', 'Intel', '17000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="intel_I3">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/I3.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto3"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionMother('I3', 'Intel', '252000')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 2-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="intel_I5">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/I5.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto4"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionMother('I5', 'Intel', '31000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="intel_I7">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/I7.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto5"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionMother('I7', 'Intel', '46000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="intel_I9">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/I9.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto6"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionMother('I9', 'Intel', '69000')">
                                        </div>
                                    </div>
                                </div>
                            </div>`);
        $("#seleccionIntel").fadeIn(1000);
    });
    traerDatos("../DataBase/procesadoresIntel.json");
}


//Motherboard

function seleccionMother(producto, marca, precio) {
    $(document).ready(function(){
        $("#muestra2").empty();
        $("#muestra2").append(`<div style="display: none" id="seleccionMother">
                                <div class="row"><!-- Fila 1-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asus_B450M-A">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASUS.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto1"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('B450M-A II Prime', 'ASUS', '9500')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="gigabyte_B450M">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Gigabyte.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto2"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('B450M AM4', 'Gigabyte', '10700')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asrock_A520M">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASRock.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto3"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('A520M PRO', 'Asrock', '10900')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 2-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asrock_B450M">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASRock.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto4"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('B450M Steel Legend', 'Asrock', '12200')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="gigabyte_B450-E">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Gigabyte.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto5"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('B450 Elite', 'Gigabyte', '13700')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asrock_B550">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASRock.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto6"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('B550 Phantom4', 'Asrock', '14800')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 3-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="gigabyte_A520">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Gigabyte.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto7"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('A520 Elite AM4', 'Gigabyte', '14800')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asus_B450-F">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASUS.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto8"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('B450-F Rog Strix II', 'ASUS', '17000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="gigabyte_B550M">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Gigabyte.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto9"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('B550M DS3H AC', 'Gigabyte', '17500')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 4-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asus_X570-Prime">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASUS.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto10"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('X570-P Prime', 'ASUS', '20500')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asus_B550M">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASUS.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto11"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('B550M PRO-P AM4', 'ASUS', '22200')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asrock_B550-S">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASRock.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto12"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('B550 Steel Legend', 'Asrock', '25500')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 5-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="gigabyte_X570">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Gigabyte.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto13"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('X570 X', 'Gigabyte', '25600')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asus_B550-A">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASUS.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto14"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('B550-A Rog Strix', 'ASUS', '27600')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="gigabyte_B550">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Gigabyte.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto15"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('B550 elite', 'Gigabyte', '28600')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 6-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asrock_B550-E">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASRock.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto16"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('B550 Extreme4', 'Asrock', '28900')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asus_X570-Plus">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASUS.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto17"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('X570-Plus', 'ASUS', '30000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asrock_B550-P">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASRock.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto18"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('B550 PG', 'Asrock', '30200')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 7-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asrock_X570-S">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASRock.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto19"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('X570 Steel', 'Asrock', '32500')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="gigabyte_X570-E">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Gigabyte.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto20"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('X570 Elite', 'Gigabyte', '33900')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asrock_X570-PG">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASRock.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto21"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('X570 PG', 'Asrock', '37900')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 8-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asus_B550-E">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASUS.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto22"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('B550-E AM4 Rog Strix', 'ASUS', '39500')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asrock_X570-T">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASRock.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto23"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('X570 Taichi', 'Asrock', '41400')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="gigabyte_B550-M">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Gigabyte.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto24"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('B550 Master 1.0', 'Gigabyte', '48100')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 9-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="gigabyte_X570-I">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Gigabyte.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto25"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('X570 I PRO Wifi', 'Gigabyte', '52200')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="asus_CROSSHAIR">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASUS.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <p id="objeto26"></p>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionRAM('CROSSHAIR VIII Hero Dark', 'ASUS', '61900')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        
                                    </div>
                                </div>
                            </div>`);
        $("#seleccionMother").fadeIn(1000);
    });
    if  ((producto != procesador_producto) && (producto != undefined) && (procesador_producto != "No seleccionado")) {
        precioFinal = precioFinal - procesador_precio;
    }
    if  (producto !== undefined) {
        $("#procesadorElegido").val(marca + " - " + producto);
        procesador_marca = marca;
        procesador_producto = producto;
        procesador_precio = parseFloat(precio);
        precioFinal = precioFinal + parseFloat(precio);
    }
    traerDatos("../DataBase/mothers.json");
    $("#carrito").val(precioFinal);
}


//Memoria RAM

function seleccionRAM(producto, marca, precio) {
    $(document).ready(function(){
        $("#muestra2").empty();
        $("#muestra2").append(`<div style="display: none" id="SeleccionRAM">
                                <div class="row"><!-- Fila 1-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Crucial 4GB 2666 Mhz">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Crucial.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto1"></div>
                                                </div>
                                            </div>
                                        <input type="button" value="Seleccionar" onclick="seleccionDisco('4GB 2666 Mhz', 'Crucial', '3500')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Crucial 4GB 2666 Mhz X2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Crucial.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto2"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('4GB 2666 Mhz X2', 'Crucial', '7000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Kingston Fury 4GB 2666 Mhz">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Kingston.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto3"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Fury 4GB 2666 Mhz', 'Kingston', '3800')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 2-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Kingston Fury 4GB 2666 Mhz X2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Kingston.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto4"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Fury 4GB 2666 Mhz X2', 'Kingston', '7600')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair Value 4GB 2666 Mhz">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto5"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Value 4GB 2666 Mhz', 'Corsair', '3900')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair Value 4GB 2666 Mhz X2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto6"></div>
                                                </div>
                                                <input type="button" value="Seleccionar" onclick="seleccionDisco('Value 4GB 2666 Mhz X2', 'Corsair', '7800')">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 3-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Viper Patriot 8GB 2666 Mhz">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Viper.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto7"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Patriot 8GB 2666 Mhz', 'Viper', '5700')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Viper Patriot 8GB 2666 Mhz X2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Viper.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto8"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Patriot 8GB 2666 Mhz X2', 'Viper', '11400')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Crucial UDIMM 8GB 2666 Mhz">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Crucial.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto9"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('UDIMM 8GB 2666 Mhz', 'Crucial', '5900')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 4-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Crucial UDIMM 8GB 2666 Mhz X2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Crucial.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto10"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('UDIMM 8GB 2666 Mhz X2', 'Crucial', '11800')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair Vengence 8GB 3000 Mhz">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto11"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Vengence 8GB 3000 Mhz', 'Corsair', '6600')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair Vengence 8GB 3000 Mhz X2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto12"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Vengence 8GB 3000 Mhz X2', 'Corsair', '13200')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 5-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="HP V6 8GB 3000 Mhz">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/HP.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto13"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('V6 8GB 3000 Mhz', 'HP', '7000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="HP V6 8GB 3000 Mhz X2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/HP.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto14"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('V6 8GB 3000 Mhz X2', 'HP', '14000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Kingstone Fury 8GB 3200 Mhz">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Kingston.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto15"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Fury 8GB 3200 Mhz', ''Kingstone', '7000')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 6-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Kingstone Fury 8GB 3200 Mhz X2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Kingston.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto16"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Fury 8GB 3200 Mhz X2', ''Kingstone', '14000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Viper Patriot Steel 8GB 3200 Mhz">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Viper.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto17"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Patriot Steel 8GB 3200 Mhz', 'Viper', '7060')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Viper Patriot Steel 8GB 3200 Mhz X2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Viper.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto18"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Patriot Steel 8GB 3200 Mhz X2', 'Viper', '14120')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 7-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="HP V6 8GB 3200 Mh">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/HP.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto19"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('V6 8GB 3200 Mhz', 'HP', '7050')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="HP V6 8GB 3200 Mhz X2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/HP.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto20"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('V6 8GB 3200 Mhz X2', 'HP', '14100')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Kingstone Fury 16GB 2666Mhz">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Kingston.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto21"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Fury 16GB 2666Mhz', 'Kingstone', '11800')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 8-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Kingstone Fury 16GB 2666Mhz X2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Kingston.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto22"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Fury 16GB 2666Mhz X2', 'Kingstone', '23600')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Viper Patriot Steel 16GB 3000 Mhz">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Viper.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto23"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Patriot Steel 16GB 3000 Mhz', 'Viper', '12400')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Viper Patriot Steel 16GB 3000 Mhz X2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Viper.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto24"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Patriot Steel 16GB 3000 Mhz X2', 'Viper', '24800')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 9-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="HP V6 16GB 3200Mhz">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/HP.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto25"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('V6 16GB 3200Mhz', 'HP', '12200')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="HP V6 16GB 3200Mhz X2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/HP.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto26"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('V6 16GB 3200Mhz X2', 'HP', '24400')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Kingston Fury 16GB 3200 Mhz">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Kingston.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto27"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Fury 16GB 3200 Mhz', 'Kingston', '13200')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 10-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Kingston Fury 16GB 3200 Mhz X2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Kingston.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto28"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionDisco('Fury 16GB 3200 Mhz X2', 'Kingston', '26400')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        
                                    </div>
                                    <div class="col-md-4">
                                        
                                    </div>
                                </div>
                            </div>`);
        $("#SeleccionRAM").fadeIn(1000);
    });
    if  ((producto != motherboard_producto) && (producto != undefined)) {
        precioFinal = precioFinal - motherboard_precio;
    }
    if  (producto !== undefined) {
        $("#motherElegido").val(marca + " - " + producto);
        motherboard_marca = marca;
        motherboard_producto = producto;
        motherboard_precio = parseFloat(precio);
        precioFinal = precioFinal + parseFloat(precio);
    }
    traerDatos("../DataBase/memoriaRAM.json");
    $("#carrito").val(precioFinal);
}


//Disco Rigido

function seleccionDisco(producto, marca, precio) {
    $(document).ready(function(){
        $("#muestra2").empty();
        $("#muestra2").append(`<div style="display: none" id="SeleccionDisco">
                                <div class="row"><!-- Fila 1-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Toshiba 7200RPM 1TB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Toshiba.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto1"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGrafica('7200RPM 1TB', 'Toshiba', '4900')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Seagate Barracuda 1TB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Seagate.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto2"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGrafica('Barracuda 1TB', 'Seagate', '5100')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="WD Blue 1TB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/WD.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto3"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGrafica('Blue 1TB', 'WD', '5200')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 2-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Seagate Barracuda 2TB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Seagate.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto4"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGrafica('Barracuda 2TB', 'Seagate', '6700')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="WD Blue 2TB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/WD.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto5"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGrafica('Blue 2TB', 'WD ', '7300')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="WD Purple 3TB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/WD.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto6"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGrafica('Purple 3TB', 'WD ', '12100')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 3-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Seagate Barracuda 4TB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Seagate.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto7"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGrafica('Barracuda 4TB', 'Seagate', '13000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Seagate Barracuda 6TB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Seagate.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto8"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGrafica('Barracuda 6TB', 'Seagate', '22100')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="WD Purple 6TB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/WD.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto9"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGrafica('Purple 6TB', 'WD', '22800')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 4-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Toshiba Performance 6TB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Toshiba.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto10"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGrafica('Performance 6TB', 'Toshiba', '25800')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Seagate Barracuda 8TB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Seagate.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto11"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGrafica('Barracuda 8TB', 'Seagate', '29500')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="WD Purple 8TB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/WD.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto12"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGrafica('Purple 8TB', 'WD', '34000')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 5-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="WD Purple 10TB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/WD.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto13"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGrafica('Purple 10TB', 'WD', '38000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="WD Purple 14TB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/WD.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto14"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGrafica('Purple 14TB', 'WD', '68800')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Seagate Skyhawk 18TB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Seagate.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto15"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGrafica('Skyhawk 18TB', 'Seagate', '72000')">
                                        </div>
                                    </div>
                                </div>
                            </div>`);
        $("#SeleccionDisco").fadeIn(1000);
    });
    if  ((producto != RAM_producto) && (producto != undefined)) {
        precioFinal = precioFinal - RAM_precio;
    }
    if  (producto !== undefined) {
        $("#RAMElegido").val(marca + " - " + producto);
        RAM_marca = marca;
        RAM_producto = producto;
        RAM_precio = parseFloat(precio);
        precioFinal = precioFinal + parseFloat(precio);
    }
    traerDatos("../DataBase/discoRigido.json");
    $("#carrito").val(precioFinal);
}


//Targeta Grafica

function seleccionGrafica(producto, marca, precio) {
    $(document).ready(function(){
        $("#muestra2").empty();
        $("#muestra2").append(`<div style="display: none" id="seleccionGrafica">
                                <div class="row"><!-- Fila 1-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Geforce GT210 1GB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/EVGA.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto1"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Geforce GT210 1GB', 'EVGA', '5200')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Geforce GT 710">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/msi.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto2"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Geforce GT 710', 'MSI', '7600')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Geforce GT 730">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/msi.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto3"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Geforce GT 730', 'MSI', '13800')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 2-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Geforce GT 1030">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Gigabyte.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto4"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Geforce GT 1030', 'Gigabyte', '25900')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Geforce GTX 1050ti">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASUS.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto5"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Geforce GTX 1050ti', 'ASUS', '48700')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Geforce GTX 1650">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/msi.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto6"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Geforce GTX 1650', 'MSI', '60600')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 3-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Geforce GTX 1660">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASUS.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto7"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Geforce GTX 1660', 'ASUS', '83000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Geforce RTX 2060">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASUS.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto8"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Geforce RTX 2060', 'ASUS', '94000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Radeon RX 570">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Gigabyte.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto9"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Radeon RX 570', 'Gigabyte', '105000')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 4-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Geforce RTX 3060">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/msi.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto10"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Geforce RTX 3060', 'MSI', '135900')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Geforce RTX 3060ti">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/msi.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto11"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Geforce RTX 3060ti', 'MSI', '150000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Geforce RTX 3070">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/EVGA.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto12"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Geforce RTX 3070', 'EVGA', '189000')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 5-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Geforce RTX 3070ti">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Gigabyte.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto13"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Geforce RTX 3070ti', 'Gigabyte', '220000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Geforce RTX 3080">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/msi.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto14"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Geforce RTX 3080', 'MSI', '225000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Radeon RX 6800">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/msi.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto15"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Radeon RX 6800', 'MSI', '243600')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 6-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Radeon RX 6900XT">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASUS.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto16"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Radeon RX 6900XT', 'ASUS', '340500')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Geforce RTX 3090">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/msi.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto17"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFuente('Geforce RTX 3090', 'MSI', '359000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        
                                    </div>
                                </div>
                            </div>`);
        $("#seleccionGrafica").fadeIn(1000);
    });
    if  ((producto != disco_producto) && (producto != undefined)) {
        precioFinal = precioFinal - disco_precio;
    }
    if  (producto !== undefined) {
        $("#discoElegido").val(marca + " - " + producto);
        disco_marca = marca;
        disco_producto = producto;
        disco_precio = parseFloat(precio);
        precioFinal = precioFinal + parseFloat(precio);
    }
    traerDatos("../DataBase/targetaGrafica.json");
    $("#carrito").val(precioFinal);
}


//Fuente

function seleccionFuente(producto, marca, precio) {
    $(document).ready(function(){
        $("#muestra2").empty();
        $("#muestra2").append(`<div style="display: none" id="seleccionFuente">
                                <div class="row"><!-- Fila 1-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Thermaltake - Smart White 500W">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Thermaltake.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto1"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionCooler('Smart White 500W', 'Thermaltake', '5400')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Thermaltake - Lite Power 550W">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Thermaltake.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto2"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionCooler('Lite Power 550W', 'Thermaltake', '5900')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair - VS500 500W">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto3"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionCooler('VS500 500W', 'Corsair', '7100')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 2-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair - CV550 550W">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto4"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionCooler('CV550 550W', 'Corsair', '7200')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="EVGA - Plus White W2 500W">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/EVGA.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto5"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionCooler('Plus White W2 500W', 'EVGA', '7300')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Gigabyte - Plus Bronce 550W">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Gigabyte.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto6"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionCooler('Plus Bronce 550W', 'Gigabyte', '7500')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 3-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair - VS600 600W">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto7"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionCooler('VS600 600W', 'Corsair', '7700')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="EVGA - Plus White 600W">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/EVGA.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto8"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionCooler('Plus White 600W', 'EVGA', '8600')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Thermaltake - SmartWhite 80+ 700W">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Thermaltake.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto9"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionCooler('SmartWhite 80+ 700W', 'Thermaltake', '8700')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 4-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Gigabyte - Plus Gold 750W">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Gigabyte.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto10"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionCooler('Plus Gold 750W', 'Gigabyte', '14500')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="EVGA - 700BR 700W">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/EVGA.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto11"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionCooler('700BR 700W', 'EVGA ', '14600')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair - CX750F 750W">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto12"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionCooler('CX750F 750W', 'Corsair', '17100')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 5-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Gigabyte - P859GM 850W">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Gigabyte.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto13"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionCooler('P859GM 850W', 'Gigabyte', '17700')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        
                                    </div>
                                    <div class="col-md-4">
                                        
                                    </div>
                                </div>
                            </div>`);
        $("#seleccionFuente").fadeIn(1000);
    });
    if  ((producto != grafica_producto) && (producto != undefined)) {
        precioFinal = precioFinal - grafica_precio;
    }
    if  (producto !== undefined) {
        $("#graficaElegido").val(marca + " - " + producto);
        grafica_marca = marca;
        grafica_producto = producto;
        grafica_precio = parseFloat(precio);
        precioFinal = precioFinal + parseFloat(precio);
    }
    traerDatos("../DataBase/fuentes.json");
    $("#carrito").val(precioFinal);
}


//Cooler

function seleccionCooler(producto, marca, precio) {
    $(document).ready(function(){
        $("#muestra2").empty();
        $("#muestra2").append(`<div style="display: none" id="seleccionCooler">
                                <div class="row"><!-- Fila 1-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Aerocool - Cyclon 3 RGB">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Aerocool.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto1"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGabinete('Cyclon 3 RGB', 'Aerocool', '4800')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Coolermaster - ML120L V2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Coolermaster.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto2"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGabinete('ML120L V2', 'Coolermaster', '10500')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Aerocool - Mirage L120">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Aerocool.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto3"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGabinete('Mirage L120', 'Aerocool', '11800')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 2-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Coolermaster - ML240L V2">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Coolermaster.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto4"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGabinete('ML240L V2', 'Coolermaster', '17000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair - Hydro H60">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto5"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGabinete('Hydro H60', 'Corsair', '17500')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Coolermaster - ML120R">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Coolermaster.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto6"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGabinete('ML120R', 'Coolermaster', '21500')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 3-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="EVGA - CLC 240">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/EVGA.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto7"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGabinete('CLC 240', 'EVGA', '23500')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="ASUS - TUF LC">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASUS.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto8"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGabinete('TUF LC', 'ASUS', '24000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair - ICUE H100I">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto9"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGabinete('ICUE H100I', 'Corsair', '29000')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 4-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="EVGA - CLC 360">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/EVGA.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto10"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGabinete('CLC 360', 'EVGA', '32700')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="ASUS - ROG RYUO">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASUS.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto11"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGabinete('ROG RYUO', 'ASUS', '47700')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair - H150I">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto12"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGabinete('H150I', 'Corsair', '39300')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 5-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="ASUS - ROG RYUJIN">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/ASUS.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto13"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionGabinete('ROG RYUJIN', 'ASUS', '69800')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        
                                    </div>
                                    <div class="col-md-4">
                                        
                                    </div>
                                </div>
                            </div>`);
        $("#seleccionCooler").fadeIn(1000);
    });
    if  ((producto != fuente_producto) && (producto != undefined)) {
        precioFinal = precioFinal - fuente_precio;
    }
    if  (producto !== undefined) {
        $("#fuenteElegido").val(marca + " - " + producto);
        fuente_marca = marca;
        fuente_producto = producto;
        fuente_precio = parseFloat(precio);
        precioFinal = precioFinal + parseFloat(precio);
    }
    traerDatos("../DataBase/cooler.json");
    $("#carrito").val(precioFinal);
}


//Gabinete

function seleccionGabinete(producto, marca, precio) {
    $(document).ready(function(){
        $("#muestra2").empty();
        $("#muestra2").append(`<div style="display: none" id="seleccionGabinete" >
                                <div class="row"><!-- Fila 1-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Aerocool - Split Black">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Aerocool.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto1"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('Split Black', 'Aerocool', '3300')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Thermaltake - Versa H15">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Thermaltake.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto2"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('Versa H15', 'Thermaltake', '4000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Aerocool - Prime">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Aerocool.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto3"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('Prime', 'Aerocool', '4200')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 2-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Acer - F785">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Acer.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto4"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('F785', 'Acer', '4600')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Sentey - S20">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Sentey.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto5"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('S20', 'Sentey', '4800')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Thermaltake - Versa H17">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Thermaltake.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto6"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('Versa H17', 'Thermaltake', '5000')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 3-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Acer - AX6-B">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Acer.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto7"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('AX6-B', 'Acer', '6300')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Thermaltake - Versa T25">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Thermaltake.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto8"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('Versa T25', 'Thermaltake', '6600')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair - Carbide">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto9"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('Carbide', 'Corsair', '6700')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 4-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair - Carbide 100R">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto10"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('Carbide 100R', 'Corsair', '7700')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Thermaltake - H350">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Thermaltake.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto11"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('H350', 'Thermaltake', '7900')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Sentey - T20">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Sentey.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto12"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('T20', 'Sentey', '8100')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 5-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Thermaltake - H100">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Thermaltake.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto14"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('H100', 'Corsair', '')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair - 470T">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto15"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('470T', 'Corsair', '9900')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Coolermaster - MB511">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Coolermaster.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto16"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('MB511', 'Coolermaster', '13300')">
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 6-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair - ICUE 400X">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto17"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('ICUE 400X', 'Corsair', '15300')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Coolermaster - MB530">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Coolermaster.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto18"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('MB530', 'Coolermaster', '19000')">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div id="Corsair - ICUE 5000X">
                                                <div class="articulo--img__espaciado">
                                                    <img class="img-fluid" src="../img/Corsair.png" alt="">
                                                </div>
                                                <div class="articulo--comentario">
                                                    <div id="objeto19"></div>
                                                </div>
                                            </div>
                                            <input type="button" value="Seleccionar" onclick="seleccionFinal('ICUE 5000X', 'Corsair', '24100')">
                                        </div>
                                    </div>
                                </div>
                            </div>`);
        $("#seleccionGabinete").fadeIn(1000);
    });
    if  ((producto != cooler_producto) && (producto != undefined)) {
        precioFinal = precioFinal - cooler_precio;
    }
    if  (producto !== undefined) {
        $("#coolerElegido").val(marca + " - " + producto);
        cooler_marca = marca;
        cooler_producto = producto;
        cooler_precio = parseFloat(precio);
        precioFinal = precioFinal + parseFloat(precio);
    }
    traerDatos("../DataBase/gabinete.json");
    $("#carrito").val(precioFinal);
}


//Finalizacion

function seleccionFinal(producto, marca, precio) {
    if  ((producto != gabinete_producto) && (producto != undefined)) {
        precioFinal = precioFinal - gabinete_precio;
    }
    if  (producto !== undefined) {
        $("#gabineteElegido").val(marca + " - " + producto);
        gabinete_marca = marca;
        gabinete_producto = producto;
        gabinete_precio = parseFloat(precio);
        precioFinal = precioFinal + parseFloat(precio);
    }
    precioFinal = (procesador_precio + motherboard_precio + RAM_precio + disco_precio + grafica_precio + fuente_precio + cooler_precio + gabinete_precio);
    $(document).ready(function(){
        $("#muestra2").empty();
        $("#muestra2").append(`<div style="display: none" id="carritoMuestra">
                                <div class="row"><!-- Fila 1-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div class="articulo--img__espaciado">
                                                <img class="img-fluid" src="../img/${procesador_producto}.png" alt="">
                                            </div>
                                            <div class="articulo--comentario">
                                                <div id="articuloProcesador">
                                                    <p>Marca: ${procesador_marca}</p>
                                                    <p>Producto: ${procesador_producto}</p>
                                                    <p>Precio: ${procesador_precio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div class="articulo--img__espaciado">
                                                <img class="img-fluid" src="../img/${motherboard_marca}.png" alt="">
                                            </div>
                                            <div class="articulo--comentario">
                                                <div id="articuloMotherboard">
                                                    <p>Marca: ${motherboard_marca}</p>
                                                    <p>Producto: ${motherboard_producto}</p>
                                                    <p>Precio: ${motherboard_precio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div class="articulo--img__espaciado">
                                                <img class="img-fluid" src="../img/${RAM_marca}.png" alt="">
                                            </div>
                                            <div class="articulo--comentario">
                                                <div id="articuloRAM">
                                                    <p>Marca: ${RAM_marca}</p>
                                                    <p>Producto: ${RAM_producto}</p>
                                                    <p>Precio: ${RAM_precio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 2-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div class="articulo--img__espaciado">
                                                <img class="img-fluid" src="../img/${disco_marca}.png" alt="">
                                            </div>
                                            <div class="articulo--comentario">
                                                <div id="articuloDisco">
                                                    <p>Marca: ${disco_marca}</p>
                                                    <p>Producto: ${disco_producto}</p>
                                                    <p>Precio: ${disco_precio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div class="articulo--img__espaciado">
                                                <img class="img-fluid" src="../img/${grafica_marca}.png" alt="">
                                            </div>
                                            <div class="articulo--comentario">
                                                <div id="articuloGrafica">
                                                    <p>Marca: ${grafica_marca}</p>
                                                    <p>Producto: ${grafica_producto}</p>
                                                    <p>Precio: ${grafica_precio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div class="articulo--img__espaciado">
                                                <img class="img-fluid" src="../img/${fuente_marca}.png" alt="">
                                            </div>
                                            <div class="articulo--comentario">
                                                <div id="articuloFuente">
                                                    <p>Marca: ${fuente_marca}</p>
                                                    <p>Producto: ${fuente_producto}</p>
                                                    <p>Precio: ${fuente_precio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><!-- Fila 3-->
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div class="articulo--img__espaciado">
                                                <img class="img-fluid" src="../img/${cooler_marca}.png" alt="">
                                            </div>
                                            <div class="articulo--comentario">
                                                <div id="articuloCooler">
                                                    <p>Marca: ${cooler_marca}</p>
                                                    <p>Producto: ${cooler_producto}</p>
                                                    <p>Precio: ${cooler_precio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="articulo--contenedor">
                                            <div class="articulo--img__espaciado">
                                                <img class="img-fluid" src="../img/${gabinete_marca}.png" alt="">
                                            </div>
                                            <div class="articulo--comentario">
                                                <div id="articuloGabinete">
                                                    <p>Marca: ${gabinete_marca}</p>
                                                    <p>Producto: ${gabinete_producto}</p>
                                                    <p>Precio: ${gabinete_precio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        
                                    </div>
                                </div>
                                <div class="row "><!-- Fila 4-->
                                    <div class="articulo--total__estilo">
                                        <p>Tolal: (${precioFinal})</p>
                                    </div>
                                </div>
                            </div>`);
        $("#carritoMuestra").fadeIn(1000);
        $("#carrito").val(precioFinal);
    });
}