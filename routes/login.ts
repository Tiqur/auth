import express, { Request, Response} from 'express';
const router = express.Router();

router.post('/', (req: Request, res: Response) => {
  res.send(200);
});

export default router;
