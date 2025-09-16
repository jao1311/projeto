import { Router } from 'express';
import { MachineController } from '../controllers/machine.js';

const route = Router();

route.post('/', MachineController.store);

export default route;