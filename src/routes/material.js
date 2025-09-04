import { Router } from 'express';
import { MaterialController } from '../controllers/Material.js';

const route = Router( );

Router.post('/', MaterialController.store);
export default route;