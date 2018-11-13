// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnectio({
    host: "m7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "xpiip5wroxthqsyt",
    password: "u4sfpqp1ayhq12n1",
    database: "e7q892bgj9eagv7y"
  
  });
} else {
 connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;