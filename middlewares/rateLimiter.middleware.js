const rateLimit=require('express-rate-limit');

module.exports=rateLimit({
    WindowMs:60 *1000,
    max:3,
    message: 'Too many  vehicle creation requests'
});