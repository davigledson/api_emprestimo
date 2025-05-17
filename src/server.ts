import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.get('/', (req,res) =>{
    res.send('Hello World')

})


app.listen(3000,()=>{
    console.log('Server rodando na porta 3000')
})


app.use('/users', userRoutes);