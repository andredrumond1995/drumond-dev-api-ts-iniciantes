import express, { NextFunction, Request, Response } from 'express';
import { UsersController } from '../modules/users/controllers/users.controller';

const usersController = new UsersController();
const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  usersController.get(req, res, next);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  usersController.add(req, res, next);
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  usersController.delete(req, res, next);
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  usersController.update(req, res, next);
});

export default router;
