// Código Menú
const menu = document.querySelector(".header__nav");
const openMenu = document.querySelector(".open__menu");
const closeMenu = document.querySelector(".close__menu")


openMenu.addEventListener("click",()=>{
    menu.classList.add("in");
});
closeMenu.addEventListener("click",()=>{
    menu.classList.remove("in");
});


// Validacipon formulario
const mainRegister = document.getElementById('main__register');

const formRegister = document.getElementById('form__register');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('email');
const password = document.getElementById('password');
const validarTelefono = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
const validarEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// OBJETO NUEVO USUARIO
const nuevoUsuario = {
    name: '',
    lastname: '',
    cellphone: '',
    email: '',
    PASSWORD: '',
    registrationDate: ''
}

formRegister.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (nombre.value == '' || apellido.value == '' || telefono.value == '' || correo.value == '' || password.value == '') {
        mostrarAlerta('Todos los campos son obligatorios','warning');
        return;
    }
    if (nombre.value.length < 2) {
        mostrarAlerta('El nombre es obligatorio','error');
        return;
    }
    if (apellido.value.length < 2) {
        mostrarAlerta('El apellido es obligatorio','error');
        return;
    }
    if (telefono.value.length != 10) {
        mostrarAlerta('El numero de teléfono no es validado','error');
        return;
    }
    if (!validarEmail.test(correo.value)) {
        mostrarAlerta('El email no es válido','error');
        return;
    }
        mostrarAlerta('Usuario registrado con éxito','success');

        nuevoUsuario.name = nombre.value;
        nuevoUsuario.lastname = apellido.value;
        nuevoUsuario.cellphone = telefono.value;
        nuevoUsuario.email = correo.value;
        nuevoUsuario.PASSWORD = password.value;
        nuevoUsuario.registrationDate = new Date();

    guardarUsuario({...nuevoUsuario});
    reiniciarObjeto();

    formRegister.reset();
    
})



function guardarUsuario(usuario) {
    console.log(usuario);
    return usuario;
}
// module.exports.guardarUsuario = guardarUsuario();

function reiniciarObjeto() {
    nuevoUsuario.name = '';
    nuevoUsuario.lastname = '';
    nuevoUsuario.cellphone = '';
    nuevoUsuario.email = '';
    nuevoUsuario.PASSWORD = '';
    nuevoUsuario.registrationDate = '';
    }

function mostrarAlerta(mensaje,tipo) {
    const divMensaje = document.createElement('DIV');
    divMensaje.textContent = mensaje;
    divMensaje.className = 'location';

    if (tipo == 'error') {
        divMensaje.classList.add('error');
    } else if (tipo == 'warning') {
        divMensaje.classList.add('warning');
    } else {;
        divMensaje.classList.add('success')
    }
    mainRegister.appendChild(divMensaje);
    
    setTimeout(() => {
        divMensaje.remove();
    }, 3000);
}


