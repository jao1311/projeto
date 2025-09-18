import { Router } from 'express';
import { EnterpriseController } from '../controllers/enterprise.js';

const route = Router();

route.post('/', EnterpriseController.store);
route.get('/:id', EnterpriseController.show);
route.delete('/:id', EnterpriseController.del);
route.get('/', EnterpriseController.index);


export default route;