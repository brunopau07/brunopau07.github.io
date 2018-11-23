function filtrar(){
    var input, filtro, lista, a, i;
    input = document.getElementById("search");
    lista = document.getElementsByClassName("ItemJuego");
    filtro = input.value.toUpperCase();

    for(i = 0; i< lista.length; i++){
        /*a = lista[i].getElementsByTagName("a")[0];*/
        a = lista[i].getElementsByTagName("p")[0];

        if(a.innerHTML.toUpperCase().indexOf(filtro) > -1){
            lista[i].style.display = "";
        }
        else{
            lista[i].style.display = "none";
        }
    }
}