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
const rKWord = document.getElementById('kWordRenta');
const btnBuscarRenta = document.getElementById('buscarRenta');

const filtrosBusqueda = {
    tipo: '',
    ubicacion: '',
    min: '',
    max: '',
}

rTipo.addEventListener('input',()=>{
    if (rTipo.value != "") {
        etiquetaFiltro(rTipo,rTipo.value);
        filtrosBusqueda.tipo = rTipo.value;
    }
});
rUbicacion.addEventListener('input',()=>{
    if (rUbicacion.value != "") {
        etiquetaFiltro(rUbicacion,rUbicacion.value);
        filtrosBusqueda.ubicacion = rUbicacion.value;
    }
});
rMin.addEventListener('change',()=>{
    if (rMin.value != "") {
        etiquetaFiltro(rMin,"$"+rMin.value);
        filtrosBusqueda.min = rMin.value;
    }
});
rMax.addEventListener('change',()=>{
    if (rMax.value != "") {
        etiquetaFiltro(rMax,"$"+rMax.value);
        filtrosBusqueda.max = rMax.value;
    }
});

function etiquetaFiltro(input,valor) {
    const tablero = document.getElementById('aplicados');
    const labelF = document.createElement('P');
    labelF.textContent = valor + "  x";
    labelF.className = 'label__aplicados';
    labelF.onclick = ()=>{
        tablero.removeChild(labelF);
        input.value = "";
    }
    tablero.appendChild(labelF);
}

function imprimirHTML() {

    // Leer el elemento Resultado
    const contenedor = document.getElementById('rentaHTML');
    // Construir el HTML de los autos
    catalogoRenta.forEach(item => {
        const renta = document.createElement('DIV');
        renta.innerHTML = `
            <img src=${item.src} alt="">
            <a class="btn-vm" href="#">Ver más</a>
        `;
        renta.className = 'grid__item';
        contenedor.appendChild(renta);
    })
}
imprimirHTML();