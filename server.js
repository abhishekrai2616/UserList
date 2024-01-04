const dotenv=require('dotenv');
const connectDatabase=require('./config/database');
const app=require('./app');



dotenv.config({path:'./config/.env'})
connectDatabase();


app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
});