import { Router } from 'express';
import { MaterialController } from '../controllers/Material.js';

const route = Router( );

route.post('/', MaterialController.store);
route.get('/', MaterialController.index);
export default route;