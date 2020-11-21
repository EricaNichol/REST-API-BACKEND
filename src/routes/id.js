import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// Get Unique Id
router.get('/', (req, res) => {
  const uniqueId = uuidv4();

  console.log(`GET user ID HTTP method: ${uniqueId} \n`);
  return res.send(JSON.stringify(uniqueId));
});

export default router;
