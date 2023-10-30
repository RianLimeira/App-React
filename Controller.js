//Criar contantes
import express from 'express';
import pkg from 'body-parser';
const { urlencoded, json } = pkg;
import cors from 'cors';

let app=express();
app.use(cors());
//POST
app.use(urlencoded({ extended:false}));
//JSON
app.use(json());

let port = process.env.PORT || 3000;
app.listen(port,(req, res)=>{
    console.log('Server Rodando');
});