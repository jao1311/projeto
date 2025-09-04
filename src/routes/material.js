import { Router } from 'express';
import { MaterialController } from '../controllers/Material.js';

const route = Router( );

route.post('/', MaterialController.store);
export default route;