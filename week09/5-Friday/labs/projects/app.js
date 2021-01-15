const express = require('express');
const app = express();

//create new database 
//config info for database
//learnpgpromise

let config = {
    host: 'localhost',
    port: 5432,
    database:'learnpgpromise',
    user: 'postgres'
}

let pgp = require('pg-promise')();

let db = pgp(config); //database object - gives access to perform CRUD operations

console.log(db);

app.listen(3000, (req, res) => {
    
    console.log(`listening on port 3000`);
})