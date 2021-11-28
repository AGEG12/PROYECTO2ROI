const catalogoVenta = [
    {
        oferta: 'venta',
        tipo: 'Departamento',
        ubicacion: 'Chiapas',
        precio: '1300000',
        KeyWords: '',
        src: 'imagenes/rent1.jpg'
    },
    {
        oferta: 'venta',
        tipo: 'Casa',
        ubicacion: 'Jalisco',
        precio: '2250000',
        KeyWords: '',
        src: 'imagenes/rent2.jpg'
    },
    {
        oferta: 'venta',
        tipo: 'Departamento',
        ubicacion: 'Mexico',
        precio: '1800000',
        KeyWords: '',
        src: 'imagenes/rent3.jpg'
    },
    {
        oferta: 'venta',
        tipo: 'Departamento',
        ubicacion: 'Oaxaca',
        precio: '990000',
        KeyWords: '',
        src: 'imagenes/vent6.jpg'
    },
    {
        oferta: 'venta',
        tipo: 'Casa',
        ubicacion: 'Chiapas',
        precio: '2150000',
        KeyWords: '',
        src: 'imagenes/rent5.jpg'
    },
    {
        oferta: 'venta',
        tipo: 'Casa',
        ubicacion: 'Jalisco',
        precio: '4250000',
        KeyWords: '',
        src: 'imagenes/rent6.jpg'
    },
    {
        oferta: 'venta',
        tipo: 'Casa',
        ubicacion: 'Mexico',
        precio: '1600000',
        KeyWords: '',
        src: 'imagenes/rent7.jpg'
    },
    {
        oferta: 'venta',
        tipo: 'Casa',
        ubicacion: 'Oaxaca',
        precio: '1250000',
        KeyWords: '',
        src: 'imagenes/rent8.jpg'
    },
    {
        oferta: 'venta',
        tipo: 'Departamento',
        ubicacion: 'Jalisco',
        precio: '2100000',
        KeyWords: '',
        src: 'imagenes/rent9.jpg'
    },
    {
        oferta: 'venta',
        tipo: 'Departamento',
        ubicacion: 'Chiapas',
        precio: '850000',
        KeyWords: '',
        src: 'imagenes/rent10.jpg'
    },
    {
        oferta: 'venta',
        tipo: 'Casa',
        ubicacion: 'Mexico',
        precio: '5600000',
        KeyWords: '',
        src: 'imagenes/rent11.jpg'
    },
    {
        oferta: 'venta',
        tipo: 'Departamento',
        ubicacion: 'Mexico',
        precio: '3250000',
        KeyWords: '',
        src: 'imagenes/rent12.jpg'
    },
    {
        oferta: 'venta',
        tipo: 'Terreno',
        ubicacion: 'Chiapas',
        precio: '550000',
        KeyWords: '',
        src: 'imagenes/terrenoc.jpeg'
    },
    {
        oferta: 'venta',
        tipo: 'Terreno',
        ubicacion: 'Oaxaca',
        precio: '800000',
        KeyWords: '',
        src: 'imagenes/terrenoo.jpeg'
    }
]
const vTipo = document.getElementById('tipoVenta');
const vUbicacion = document.getElementById('ubicacionVenta');
const vMin = document.getElementById('minVenta');
const vMax = document.getElementById('maxVenta');
/* const rKWord = document.getElementById('kWordRenta'); */
const vOrdenar = document.getElementById('ordenarPrecio');
const btnquitarFiltros = document.getElementById('quitarFiltros');


const filtrosBusqueda = {
    tipo: '',
    ubicacion: '',
    min: '',
    max: '',
}

document.addEventListener('DOMContentLoaded', () => {
    imprimirHTML(catalogoVenta);
}); 

vTipo.addEventListener('input',()=>{
    if (vTipo.value != "") {
        etiquetaFiltro(vTipo,vTipo.value,'tipo');
        filtrosBusqueda.tipo = vTipo.value;
        filtrarOpciones();
        vTipo.disabled = true;
    }
});
vUbicacion.addEventListener('input',()=>{
    if (vUbicacion.value != "") {
        etiquetaFiltro(vUbicacion,vUbicacion.value,'ubicacion');
        filtrosBusqueda.ubicacion = vUbicacion.value;
        filtrarOpciones();
        vUbicacion.disabled = true;
    }
});
vMin.addEventListener('change',()=>{
    if (vMin.value != "") {
        etiquetaFiltro(vMin,"$"+vMin.value,'minimo');
        filtrosBusqueda.min = vMin.value;
        filtrarOpciones();
        vMin.disabled = true;
    }
});
vMax.addEventListener('change',()=>{
    if (vMax.value != "") {
        etiquetaFiltro(vMax,"$"+vMax.value,'maximo');
        filtrosBusqueda.max = vMax.value;
        filtrarOpciones();
        vMax.disabled = true;
    }
});
vOrdenar.addEventListener('input',()=>{
    if (vTipo.value == '' && vUbicacion.value == '' && vMin.value == '' && vMax.value == '') {
    ordenarResultados(catalogoVenta,vOrdenar.value); 
    } else {
        console.log('se aplicaron filtros')
    }

})
btnquitarFiltros.addEventListener('click',()=>{
    const aplicados = document.getElementById('aplicados');
    while(aplicados.firstChild) {
        aplicados.removeChild(aplicados.firstChild);
    }
    vTipo.disabled = false;
    vUbicacion.disabled = false;
    vMin.disabled = false;
    vMax.disabled = false;

    vTipo.value = ""
    vUbicacion.value = ""
    vMin.value = ""
    vMax.value = "";

    filtrosBusqueda.tipo = '';
    filtrosBusqueda.ubicacion = '';
    filtrosBusqueda.min = '';
    filtrosBusqueda.max = '';
    
    filtrarOpciones();
    imprimirHTML(catalogoVenta);

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
            let resultado = catalogoVenta.filter(filtrarUbicacion).filter(filtrarMin).filter(filtrarMax);
            imprimirHTML(resultado);
            console.log(filtrosBusqueda);
            vTipo.disabled = false;

// escucha input
        vOrdenar.addEventListener('input',()=>{
                ordenarResultados(resultado,vOrdenar.value); 
        })            
        } else if (eliminar == 'ubicacion') {
            filtrosBusqueda.ubicacion = "";
            let resultado = catalogoVenta.filter(filtrarTipo).filter(filtrarMin).filter(filtrarMax);
            imprimirHTML(resultado);
            console.log(filtrosBusqueda);
            vUbicacion.disabled = false;
// escucha input
        vOrdenar.addEventListener('input',()=>{
            ordenarResultados(resultado,vOrdenar.value); 
        })            
        } else if (eliminar == 'minimo') {
            filtrosBusqueda.min = "";
            const resultado = catalogoVenta.filter(filtrarTipo).filter(filtrarUbicacion).filter(filtrarMax);
            imprimirHTML(resultado);
            console.log(filtrosBusqueda);
            vMin.disabled = false;
// escucha input
        vOrdenar.addEventListener('input',()=>{
            ordenarResultados(resultado,vOrdenar.value); 
        })    
        } else if (eliminar == 'maximo') {
            filtrosBusqueda.max = "";
            const resultado = catalogoVenta.filter(filtrarTipo).filter(filtrarUbicacion).filter(filtrarMin);
            imprimirHTML(resultado);
            console.log(filtrosBusqueda);
            vMax.disabled = false;
// escucha input
        vOrdenar.addEventListener('input',()=>{
            ordenarResultados(resultado,vOrdenar.value); 
        })    
        }
    }
    tablero.appendChild(labelF);
}

function imprimirHTML(catalogo) {
    limpiarHTML();
    quitarSR();

    const contenedor = document.getElementById('ventaHTML');

    catalogo.forEach(item => {
        const venta = document.createElement('DIV');
        venta.innerHTML = `
            <img src=${item.src} alt="">
            <a class="btn-vm" href="#">Ver más</a>
            <div class="opcion__info">
                <p>${item.tipo} en ${item.oferta}</p>
                <p>Ubicado en ${item.ubicacion}</p>
                <p>Precio: $${item.precio}</p>
            </div>
        `;
        venta.className = 'grid__item';
        contenedor.appendChild(venta);
    })
}

function limpiarHTML() {
    const contenedor = document.getElementById('ventaHTML');
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
    const resultado = catalogoVenta.filter(filtrarTipo).filter(filtrarUbicacion).filter(filtrarMin).filter(filtrarMax);
 
    if(resultado.length){
        quitarSR();
        imprimirHTML(resultado);
        vOrdenar.addEventListener('input',()=>{
            if (vTipo.value == '' && vUbicacion.value == '' && vMin.value == '' && vMax.value == '') {
                ordenarResultados(catalogoVenta,vOrdenar.value); 
            } else {
                ordenarResultados(resultado,vOrdenar.value); 
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
