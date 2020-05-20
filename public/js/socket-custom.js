var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar 
socket.on('disconnect', function() {
    console.log('Perdimos coneccion con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})