'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'skyornot' };
        
        res.render('index', model);
        
    });

};
