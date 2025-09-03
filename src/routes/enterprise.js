import { Router } from 'express';
import{EnterpriseController} from '../controllers/enterprise'

const route = Router();

route.post('/', EnterpriseController.store);

export default route;