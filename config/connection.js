var mysql = require("mysql");

var connection

if (process.env.CLEARDB_TEAL_URL) {
    connection = mysql.createConnection(process.env.CLEARDB_TEAL_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burger_db"
    })
};

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;