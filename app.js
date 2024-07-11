//funciones que carga las animaciones de las habilidades//
function cargarAnimaciones() {
    $(function() {
        $('.chart1').easyPieChart({
            size: 160,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 15, // Se corrigió el nombre de la propiedad "lineWidth"
            trackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });
        $('.chart2').easyPieChart({
            size: 160,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 15, // Se corrigió el nombre de la propiedad "lineWidth"
            trackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });
        $('.chart3').easyPieChart({
            size: 160,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 15, // Se corrigió el nombre de la propiedad "lineWidth"
            trackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });
        $('.chart4').easyPieChart({
            size: 160,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 15, // Se corrigió el nombre de la propiedad "lineWidth"
            trackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });
        $('.chart5').easyPieChart({
            size: 160,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 15, // Se corrigió el nombre de la propiedad "lineWidth"
            trackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });
        $('.chart6').easyPieChart({
            size: 160,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 15, // Se corrigió el nombre de la propiedad "lineWidth"
            trackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });

    });
}
//Funciones para filtrar las categorias de los trabajos
function verCategoria(cat){
    const items = document.getElementsByClassName("item");
    for(let i=0; i < items.length;i++){
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i<itemCat.length;i++){
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".trabajos nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
}

// Funcion que detecta cuando lanzar la animacion de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("chart");
        habilidades[0].classList.add("chart1");
        habilidades[1].classList.add("chart2");
        habilidades[2].classList.add("chart3");
        habilidades[3].classList.add("chart4");
        habilidades[4].classList.add("chart5");
        habilidades[5].classList.add("chart6");

        cargarAnimaciones();
    }
}

//detecto el scrolling para aplicar la animación de las habilidades
window.onscroll = function(){
    efectoHabilidades();
}

//función que muestra el menu responsivo
function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";

        //creamos el elemento que cierra el menu
        let span = document.createElement("span");
        span.innerHTML = "X";
        document.getElementById("nav").appendChild(span);

        //quitamos el boton eliminar cuando se hace click sobre el 
        span.onclick = function(){
            x.className = "";
            span.remove();
        }
    }else{
        x.className="";
    }
}

//Este codigo es para agregar una función a cada link del menu
//responsive
//cuando se presiona en cualquiera de los links del menu debe desaparecer el menu 

// Seleccionamos todos los enlaces del menú
const links = document.querySelectorAll("#nav a");

// Iteramos sobre cada enlace y agregamos un manejador de evento 'click'
links.forEach(link => {
    link.addEventListener('click', function() {
        // Ocultamos el menú al hacer clic en un enlace
        const nav = document.getElementById("nav");
        nav.className = "";

        // Eliminamos el botón 'span' si existe dentro del menú
        const btnEliminar = nav.querySelector("span");
        if (btnEliminar) {
            btnEliminar.remove();
        }
    });
});
