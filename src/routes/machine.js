import { Router } from 'express';
import { MachineController } from '../controllers/machine.js';

const route = Router();

route.post('/', MachineController.store);
route.get('/', MachineController.index);

export default route;