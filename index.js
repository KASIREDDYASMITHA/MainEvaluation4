const express = require('express');
const dotenv = require('dotenv');
 //load environment variables
dotenv.config();

//import middlewares
const loggerMiddleware = require('./middlewares/logger.middleware');
const notFoundMiddleware = require('./middlewares/notFound.middleware');

//import routes
const userRoutes = require('./routes/user.routes');
const vehicleRoutes = require('./routes/vehicle.routes');
const tripRoutes = require('./routes/trip.routes');
const analyticsRoutes = require('./routes/analytics.routes');

//initialize app
const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.use('/users', userRoutes);
app.use('/vehicles', vehicleRoutes);
app.use('/trips', tripRoutes);
app.use('/analytics', analyticsRoutes);

app.get('/', (req, res) => {
    res.status(200).json({message:'Fleet Management API is running'});
});

app.use(notFoundMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);
