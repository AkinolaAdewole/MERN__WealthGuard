import express from 'express';
import jwt from 'jsonwebtoken';
const router= express.Router();
import { 
    signup, signin, getWallets, deleteWallet, getUserProfile,
    updateBalance, getTransactions, transfer, getDashboard } from '../controllers/UserController.js';

import { protect } from '../middleware/authMiddleware.js'

router.get("/",(req,res)=>{
    res.send(" Server is ready")
})

router.post("/signup", signup);
router.post("/signin", signin);


router.get("/dashboard/:userId",getDashboard)

router.post("/getwallets", getWallets);
router.post("/deleter", deleteWallet);

router.post("/transfer", transfer);
router.post("/updatebalance", updateBalance);
router.post("/getTransactions", getTransactions);

export default router;