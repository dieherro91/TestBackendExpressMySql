import express from 'express';
import bodyParser from 'body-parser';

import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';


const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(indexRoutes);
app.use(employeesRoutes);

app.listen(4000);
console.log("Server listen port 4000");
