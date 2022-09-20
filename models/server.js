const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app    =  express(); 
        this.port   =  process.env.PORT;
        this.server =  require('http').createServer( this.app );
        this.io     =  require('socket.io')(this.server);

        this.paths = {};

        // Middleware: functions that go add other functionality to my webserver
        this.middleware();

        // Routes of my application
        this.routes();
    }

    middleware() {
        // CORS
        this.app.use(cors());

        // Public directory
        this.app.use( express.static('public')); // use: is the clave word
    }

    // Routes that i wanna
    routes() {
        
        // this.app.use(this.paths.auth, require('../routes/auth.routes'));
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Server runing in the port: ', this.port);
        });
    }
}



module.exports = Server;