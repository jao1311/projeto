import { Router } from 'express';
import { MaterialController } from '../controllers/Material.js';

const route = Router( );

route.post('/', MaterialController.store);
route.get('/:id', MaterialController.show);
route.delete('/:id', MaterialController.del);
route.put('/:id', MaterialController.upd);
route.get('/', MaterialController.index);
export default route;