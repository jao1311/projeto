import { Router } from 'express';
import { MachineController } from '../controllers/machine.js';

const route = Router();

route.post('/', MachineController.store);
route.get('/', MachineController.index);
route.get('/:id', MachineController.show);

export default route;