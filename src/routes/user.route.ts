import express from 'express';
import { userController } from '../controller/user.controller';

const router = express.Router();

router.post("/create-user", userController.createUser);
router.post("/", userController.getAllUser);
router.post("/:id", userController.getSingleUser);
router.post("/:id", userController.updateUser);
router.post("/:id", userController.deleteUser);

export const userRoutes = router;