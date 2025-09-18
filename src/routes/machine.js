import { Router } from 'express';
import { MachineController } from '../controllers/machine.js';

const route = Router();

route.post('/', MachineController.store);
route.get('/', MachineController.index);
route.get('/:id', MachineController.show);
route.delete('/:id', MachineController.delete);
route.put('/:id', MachineController.update);

export default route;