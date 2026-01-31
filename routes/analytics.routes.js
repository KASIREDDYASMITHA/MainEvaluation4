const express=require('express');
const router=express.Router();

const{getAnaltics}=require('../controllers/analytics.controller');

router.get('/',getAnalytics);

module.exports=router;