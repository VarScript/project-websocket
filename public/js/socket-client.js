// Referencs HTLM

const lblOnline   = document.querySelector('#lblOnline');
const lblOffline  = document.querySelector('#lblOffline');
const textMessage = document.querySelector('#textMessage')
const btnSend     = document.querySelector('#btnSend')

const socket = io();



socket.on('connect', () => {
    console.log('Connected');

    lblOffline.style.display = 'none';
    lblOnline.style.display  = '';
});


socket.on('disconnect', () => {
    console.log('Disconnected of the server');

    lblOnline.style.display  = 'none';
    lblOffline.style.display = '';
});


socket.on('sent-message', ( payload ) => {
    console.log( payload );
});


btnSend.addEventListener('click', () => {
    const message = textMessage.value;
    const payload = {
        message,
        id: '@#$',
        date: new Date().getTime()
    }
    
    socket.emit('send-message', payload, ( id ) => {
        console.log('Since the server', id);
    });

});



