const express =require ('express');
const router =express.Router();
const rateLimiter=require('../middlewares/rateLimiter.middleware');
const{
    createVehicle,
    assignDriver,
    getVehicleById}=require('../controllers/vehicle.controller');

    router.post('/add',rateLimiter,createVehicle);
    router.patch('/assign-driver/:vehicleId',assignDriver);
    router.get('/:vehicleId',getVehicleById);

    module.exports=router;