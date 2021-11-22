   const express = require('express');
   const app = express();
   const { Pool, Client } = require('pg')
   const connectionString = 'postgres://pratical-hopper:iFm51Le2uz^Rchqp@practical-hopper.80-211-105-166.plesk.page:5432/e2c_nodedb'
   
   app.get('/', (request, response)=> {
     res.send('Hello World');
   }) 

   app.post('/pg', (request, response)=> {
      const client = new Client({
        connectionString,
      })
      client.connect()
      client.query('SELECT * FROM test', (err, res) => {
        response.send(res.rows[0])
        client.end() 
      })
   }) 

   app.listen(8081,()=>{
    console.log("starting on 8081...");
   });