var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'chat'
});

connection.connect();

exports.index = function (req, res) {
    res.render('index');
};

exports.login = function (req, res) {
    connection.query('SELECT * from users WHERE username = "' + req.body.username + '" AND password = "' + req.body.password + '" LIMIT 1', function (err, rows, fields) {
        if (err) throw err;

        var user = rows[0];
        user.password = new Array(user.password.length+1).join('*');

        res.json(user);
    });
};