const socketController = (socket) => {
    console.log('Client connected', socket.id );
    
    socket.on('disconnect', () => {
        console.log('Client discconected', socket.id);
    });

    socket.on('send-message', ( payload, callback ) => {
        
        const id = 123456;
        callback(id);
        
        socket.broadcast.emit('sent-message', payload );

    });
}

module.exports = { 
    socketController,
}