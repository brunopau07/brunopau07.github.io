document.addEventListener("DOMContentLoaded", function(){
    var precio = 48.99;
    var campoCantidad = document.getElementById("unid");
    var precioSubtotal = document.getElementById("subT");
    var Efectivo = document.getElementById("efec");
    var Tarje = document.getElementById("credi");
    var CD = document.getElementById("cd");
    var digital = document.getElementById("digi");
    var campoEnvio = document.getElementById("modoCelda");
    var totalImpIncl = document.getElementById("total-imp-incl");
    document.getElementById("lugarEntrega").style.display = "none";
    document.getElementById("modoEnvio").style.display = "none";
    document.getElementById("tarjeta").style.display = "none";
    var precioActual;
    precioSubtotal.innerHTML = precio;

    


    campoCantidad.addEventListener("change", function(){
        var cantidad = parseInt(campoCantidad.value);
        precioActual = cantidad * precio;
        precioSubtotal.innerHTML = "$" + precioActual.toFixed(2);
        totalImpIncl.innerHTML = "$" + (precioActual * 1.22).toFixed(2);
    });

    CD.addEventListener("change", function(){
        if (CD.checked) {
            document.getElementById("lugarEntrega").style.display = "block";
            document.getElementById("modoEnvio").style.display = "block";
            var metodo = campoEnvio.value;
            var costoSubtotal;
            if (metodo=="normal"){
                costoTotal = precioActual * 1.005;
                precioSubtotal.innerHTML = "$" + costoTotal.toFixed(2);
                totalImpIncl.innerHTML = "$" + (costoTotal * 1.22).toFixed(2);
            }
            else if (metodo=="especial"){
                costoTotal = precioActual * 1.02;
                precioSubtotal.innerHTML = "$" + costoTotal.toFixed(2);
                totalImpIncl.innerHTML = "$" + (costoTotal * 1.22).toFixed(2);
            }
            else if (metodo=="premium"){
                costoTotal = precioActual * 1.05;
                precioSubtotal.innerHTML = "$" + costoTotal.toFixed(2);
                totalImpIncl.innerHTML = "$" + (costoTotal * 1.22).toFixed(2);
            }
            else {
                precioSubtotal.innerHTML = "$" + precioActual.toFixed(2);
                totalImpIncl.innerHTML = "$" + (costoTotal * 1.22).toFixed(2);
            }
        

        }
    });

    digital.addEventListener("change", function (){
        if (digital.checked) {
            document.getElementById("lugarEntrega").style.display = "none";
            document.getElementById("modoEnvio").style.display = "none";
            precioSubtotal.innerHTML = "$" + precioActual.toFixed(2);
        }
    })

    campoEnvio.addEventListener("change", function(){
        var metodo = campoEnvio.value;
        var costoTotal;
        if (metodo=="normal"){
            costoTotal = precioActual * 1.005;
            precioSubtotal.innerHTML = "$" + costoTotal.toFixed(2);
            totalImpIncl.innerHTML = "$" + (costoTotal * 1.22).toFixed(2);
        }
        else if (metodo=="especial"){
            costoTotal = precioActual * 1.02;
            precioSubtotal.innerHTML = "$" + costoTotal.toFixed(2);
            totalImpIncl.innerHTML = "$" + (costoTotal * 1.22).toFixed(2);
        }
        else if (metodo=="premium"){
            costoTotal = precioActual * 1.05;
            precioSubtotal.innerHTML = "$" + costoTotal.toFixed(2);
            totalImpIncl.innerHTML = "$" + (costoTotal * 1.22).toFixed(2);
        }
        else {
            precioSubtotal.innerHTML = "$" + precioActual.toFixed(2);
            totalImpIncl.innerHTML = "$" + (precioActual * 1.22).toFixed(2);
        }
    });

    Tarje.addEventListener("change", function(){
        if(Tarje.checked) {
            document.getElementById("tarjeta").style.display = "block";
        }
    })

    Efectivo.addEventListener("change", function(){
        if (Efectivo.checked) {
            document.getElementById("tarjeta").style.display = "none";
        }
    });
});