// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "al2eso2u9628ajsr",
  password: "n03bn9sb0988e5qp",
  database: "xdkice95y5171qmt",
  host:  "muowdopceqgxjn2b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com"
});

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