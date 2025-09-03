import { Router } from 'express';
import { DescarteController } from '../controllers/descarte'

const route = Router( );

Router.post('/', DescarteController.store);

export default route;