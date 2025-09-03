import { Router } from 'express';
import { MaterialController } from '../controllers/material'

const route = Router( );

Router.post('/', MaterialController.store);
export default route;