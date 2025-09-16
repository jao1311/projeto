import { Router } from 'express';
import { MaterialController } from '../controllers/Material.js';

const route = Router( );

route.post('/', MaterialController.store);
route.post('/', MaterialController.index);
export default route;