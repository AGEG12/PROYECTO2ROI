const catalogoRenta = [
    {
        oferta: 'Renta',
        tipo: 'Terreno',
        ubicacion: 'Chiapas',
        precio: 3000,
        KeyWords: ['terreno','campo','tierra','rural'],
        src: 'imagenes/vent1.jpg'
    },
    {
        oferta: 'Renta',
        tipo: 'Casa',
        ubicacion: 'Oaxaca',
        precio: 4000,
        KeyWords: ['cabaña','campo','rural'],
        src: 'imagenes/vent2.jpg'
    },
    {
        oferta: 'Renta',
        tipo: 'Departamento',
        ubicacion: 'Mexico',
        precio: 11000,
        KeyWords: ['depa','ciudad','edificio','ventanas'],
        src: 'imagenes/vent3.jpg'
    },
    {
        oferta: 'Renta',
        tipo: 'Departamento',
        ubicacion: 'Jalisco',
        precio: 9000,
        KeyWords: ['depa','ciudad','edificio','gris'],
        src: 'imagenes/vent4.jpg'
    },
    {
        oferta: 'Renta',
        tipo: 'Casa',
        ubicacion: 'Chiapas',
        precio: 8000,
        KeyWords: ['playa','calor','azul','calida'],
        src: 'imagenes/rent5.jpg'
    },
    {
        oferta: 'Renta',
        tipo: 'Departamento',
        ubicacion: 'Jalisco',
        precio: 5000,
        KeyWords: ['ciudad','centro','edificio','amarrillo','altura'],
        src: 'imagenes/vent6.jpg'
    },
    {
        oferta: 'Renta',
        tipo: 'Casa',
        ubicacion: 'Oaxaca',
        precio: 12000,
        KeyWords: ['ciudad','calido','lejano','pasto','una planta'],
        src: 'imagenes/rent7.jpg'
    },
    {
        oferta: 'Renta',
        tipo: 'Departamento',
        ubicacion: 'Jalisco',
        precio: 2500,
        KeyWords: ['ciudad','Bien ubicado','centro','Barato'],
        src: 'imagenes/vent5.jpg'
    },
    {
        oferta: 'Renta',
        tipo: 'Departamento',
        ubicacion: 'Mexico',
        precio: 8000,
        KeyWords: ['ciudad','clasico','centro','colonial'],
        src: 'imagenes/rent9.jpg'
    },
    {
        oferta: 'Renta',
        tipo: 'Departamento',
        ubicacion: 'Jalisco',
        precio: 7000,
        KeyWords: ['ciudad','centro','edificio','amarrillo','planta baja'],
        src: 'imagenes/vent6.jpg'
    },
    {
        oferta: 'Renta',
        tipo: 'Casa',
        ubicacion: 'Jalisco',
        precio: 22000,
        KeyWords: ['minimalista','lejano','calido','cristal'],
        src: 'imagenes/rent11.jpg'
    },
    {
        oferta: 'Renta',
        tipo: 'Departamento',
        ubicacion: 'Mexico',
        precio: 8500,
        KeyWords: ['edificio','depa','centro'],
        src: 'imagenes/vent7.jpg'
    }
]
const rTipo = document.getElementById('tipoRenta');
const rUbicacion = document.getElementById('ubicacionRenta');
const rMin = document.getElementById('minRenta');
const rMax = document.getElementById('maxRenta');
/* const rKWord = document.getElementById('kWordRenta'); */
const rOrdenar = document.getElementById('ordenarPrecio');
const btnquitarFiltros = document.getElementById('quitarFiltros');


const filtrosBusqueda = {
    tipo: '',
    ubicacion: '',
    min: '',
    max: '',
}

document.addEventListener('DOMContentLoaded', () => {
    imprimirHTML(catalogoRenta);
}); 

rTipo.addEventListener('input',()=>{
    if (rTipo.value != "") {
        etiquetaFiltro(rTipo,rTipo.value,'tipo');
        filtrosBusqueda.tipo = rTipo.value;
        filtrarOpciones();
        rTipo.disabled = true;
    }
});
rUbicacion.addEventListener('input',()=>{
    if (rUbicacion.value != "") {
        etiquetaFiltro(rUbicacion,rUbicacion.value,'ubicacion');
        filtrosBusqueda.ubicacion = rUbicacion.value;
        filtrarOpciones();
        rUbicacion.disabled = true;
    }
});
rMin.addEventListener('change',()=>{
    if (rMin.value != "") {
        etiquetaFiltro(rMin,"$"+rMin.value,'minimo');
        filtrosBusqueda.min = rMin.value;
        filtrarOpciones();
        rMin.disabled = true;
    }
});
rMax.addEventListener('change',()=>{
    if (rMax.value != "") {
        etiquetaFiltro(rMax,"$"+rMax.value,'maximo');
        filtrosBusqueda.max = rMax.value;
        filtrarOpciones();
        rMax.disabled = true;
    }
});
rOrdenar.addEventListener('input',()=>{
    if (rTipo.value == '' & rUbicacion.value == '' && rMin.value == '' && rMax.value == '') {
    ordenarResultados(catalogoRenta,rOrdenar.value); 
    } else {
        console.log('se aplicaron filtros')
    }

})
btnquitarFiltros.addEventListener('click',()=>{
    const aplicados = document.getElementById('aplicados');
    while(aplicados.firstChild) {
        aplicados.removeChild(aplicados.firstChild);
    }
    rTipo.disabled = false;
    rUbicacion.disabled = false;
    rMin.disabled = false;
    rMax.disabled = false;

    rTipo.value = ""
    rUbicacion.value = ""
    rMin.value = ""
    rMax.value = "";

    filtrosBusqueda.tipo = '';
    filtrosBusqueda.ubicacion = '';
    filtrosBusqueda.min = '';
    filtrosBusqueda.max = '';
    
    filtrarOpciones();
    imprimirHTML(catalogoRenta);

})



function etiquetaFiltro(input,valor,eliminar) {
    const tablero = document.getElementById('aplicados');
    const labelF = document.createElement('P');
    labelF.textContent = valor + "  x";
    labelF.className = 'label__aplicados';
    labelF.onclick = ()=>{
        tablero.removeChild(labelF);
        input.value = "";
        if (eliminar == 'tipo') {
            filtrosBusqueda.tipo = "";
            let resultado = catalogoRenta.filter(filtrarUbicacion).filter(filtrarMin).filter(filtrarMax);
            imprimirHTML(resultado);
            console.log(filtrosBusqueda);
            rTipo.disabled = false;

// escucha input
        rOrdenar.addEventListener('input',()=>{
                ordenarResultados(resultado,rOrdenar.value); 
        })            
        } else if (eliminar == 'ubicacion') {
            filtrosBusqueda.ubicacion = "";
            let resultado = catalogoRenta.filter(filtrarTipo).filter(filtrarMin).filter(filtrarMax);
            imprimirHTML(resultado);
            console.log(filtrosBusqueda);
            rUbicacion.disabled = false;
// escucha input
        rOrdenar.addEventListener('input',()=>{
            ordenarResultados(resultado,rOrdenar.value); 
        })            
        } else if (eliminar == 'minimo') {
            filtrosBusqueda.min = "";
            const resultado = catalogoRenta.filter(filtrarTipo).filter(filtrarUbicacion).filter(filtrarMax);
            imprimirHTML(resultado);
            console.log(filtrosBusqueda);
            rMin.disabled = false;
// escucha input
        rOrdenar.addEventListener('input',()=>{
            ordenarResultados(resultado,rOrdenar.value); 
        })    
        } else if (eliminar == 'maximo') {
            filtrosBusqueda.max = "";
            const resultado = catalogoRenta.filter(filtrarTipo).filter(filtrarUbicacion).filter(filtrarMin);
            imprimirHTML(resultado);
            console.log(filtrosBusqueda);
            rMax.disabled = false;
// escucha input
        rOrdenar.addEventListener('input',()=>{
            ordenarResultados(resultado,rOrdenar.value); 
        })    
        }
    }
    tablero.appendChild(labelF);
}

function imprimirHTML(catalogo) {
    limpiarHTML();
    quitarSR();

    const contenedor = document.getElementById('rentaHTML');

    catalogo.forEach(item => {
        const renta = document.createElement('DIV');
        renta.innerHTML = `
            <img src=${item.src} alt="">
            <a class="btn-vm" href="#">Ver más</a>
            <div class="opcion__info">
                <p>${item.tipo} en ${item.oferta}</p>
                <p>Ubicado en ${item.ubicacion}</p>
                <p>Precio: $${item.precio}</p>
            </div>
        `;
        renta.className = 'grid__item';
        contenedor.appendChild(renta);
    })
}

function limpiarHTML() {
    const contenedor = document.getElementById('rentaHTML');
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}





// APLICAR FILTROS
function filtrarTipo(opciones) {
    if(filtrosBusqueda.tipo) {
        return opciones.tipo === filtrosBusqueda.tipo;
    }
    return opciones;
}

function filtrarUbicacion(opciones) {
    if(filtrosBusqueda.ubicacion) {
        return opciones.ubicacion === filtrosBusqueda.ubicacion;
    }
    return opciones;
}

function filtrarMin(opciones) {
    if(filtrosBusqueda.min) {
        return opciones.precio >= Number(filtrosBusqueda.min);
    }
    return opciones;
}

function filtrarMax(opciones) {
    if(filtrosBusqueda.max) {
        return opciones.precio <= Number(filtrosBusqueda.max);
    }
    return opciones;
}

function sinResultado() {
    const sinResultado = document.getElementById('sin__resultado');
    const contenedor = document.createElement('DIV');
    contenedor.className = 'sr';
    const imgSinResultado = new Image();
    const textSinResultado = document.createElement('P');
    imgSinResultado.src = 'imagenes/sinresultados.svg';
    textSinResultado.textContent = 'Sin Resultados';
    contenedor.appendChild(imgSinResultado);
    contenedor.appendChild(textSinResultado);

    sinResultado.appendChild(contenedor);
}
function quitarSR() {
    const sinResultado = document.getElementById('sin__resultado');
    while(sinResultado.firstChild) {
    sinResultado.removeChild(sinResultado.firstChild);
    }
}


function filtrarOpciones() {
    const resultado = catalogoRenta.filter(filtrarTipo).filter(filtrarUbicacion).filter(filtrarMin).filter(filtrarMax);
 
    if(resultado.length){
        quitarSR();
        imprimirHTML(resultado);
        rOrdenar.addEventListener('input',()=>{
            if (rTipo.value == '' & rUbicacion.value == '' && rMin.value == '' && rMax.value == '') {
                ordenarResultados(catalogoRenta,rOrdenar.value); 
            } else {
                ordenarResultados(resultado,rOrdenar.value); 
            }
        })
    } else {
        limpiarHTML();
        sinResultado();
    }
 }



function ordenarResultados(resultados,orden) {  
    if (orden == 'menor') {
        resultados.sort((a,b)=>{
            return a.precio - b.precio;
        }) 
    } else if (orden == 'mayor') {
        resultados.sort((a,b)=>{
            return b.precio - a.precio;
        })
    } 
    imprimirHTML(resultados);
}
