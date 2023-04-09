import {Router} from 'express';
import { createEmployees, deleteEmployees, getEmployees,
    patchEmployees, putEmployees 
} from '../controllers/employees.controller.js';

const employeesRoutes=Router();


employeesRoutes.get('/employees',getEmployees);
employeesRoutes.post('/employees',createEmployees);
employeesRoutes.put('/employees',putEmployees);
employeesRoutes.delete('/employees',deleteEmployees);
employeesRoutes.patch('/employees',patchEmployees);

export default employeesRoutes;