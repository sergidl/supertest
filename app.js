import express from 'express';
import usersRouter from './routers/usersRouter.js';

const app = express();


app.use(express.json());

app.use((req,res,next)=>{
    console.log('---->:app.js');
    next();
}); 


app.use("/users",usersRouter)


// app.get("/", (req, res) => {
//     res.status(200).send("Hello World!");
// });

//app.use('/user',usersRouter);

export default app;