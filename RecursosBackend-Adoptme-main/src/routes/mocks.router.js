import { Router } from 'express';
import { 
    generateMockingPets, 
    generateMockingUsers, 
    generateData 
} from '../controllers/mocks.controller.js';

const router = Router();

router.get('/mockingpets', generateMockingPets);
router.get('/mockingusers', generateMockingUsers);
router.post('/generateData', generateData);

export default router;