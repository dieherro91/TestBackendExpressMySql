
import {Router} from 'express';
import { getPing } from '../controllers/index.controller.js';



const indexRoutes=Router();

indexRoutes.get('/ping',getPing);

export default indexRoutes;

