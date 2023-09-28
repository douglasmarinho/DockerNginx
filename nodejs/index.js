const express = require('express')
const app = express()
const port = 3000
const config ={
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'fullcycledb'
};
const mysql = require('mysql')
const connection= mysql.createConnection(config)

const sql2 = `INSERT INTO people(name) values ('Douglas')`
const sql = "CREATE TABLE IF NOT EXISTS people ( id int auto_increment primary key, name varchar(250) not null)"

connection.query(sql)
connection.query(sql2)
connection.end()

app.get('/', (req, res)=>{

    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, ()=>{
    console.log('Rodando na porta ' + port)
})

