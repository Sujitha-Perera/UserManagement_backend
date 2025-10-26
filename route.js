import express from "express";
import { addUser, deleteUser, getUsers, updateUser } from "./controller.js";
import { Router } from "express";

const router=Router();

router.get('/users',getUsers);
router.post('/createuser',addUser);
router.put('/updateuser',updateUser);
router.delete('/deleteuser',deleteUser);

export default router;



