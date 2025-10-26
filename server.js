import express from 'express';
import cors  from 'cors';
const app =express();
import mongoose, { Mongoose } from 'mongoose';
import router from './route.js';

const port=3001;
const host='localhost';

app.use(cors());
app.use(express.json());

const uri='mongodb+srv://sujithap:psrvlog@cluster0.yh2vhor.mongodb.net/?appName=Cluster0';

const connect = async()=>{
        try {
               await mongoose.connect(uri);
               console.log("connect to mongodb"); 
                
        } catch (error) {
                console.log("mongodb error: ",error);
        }
};

connect();

const srever =app.listen(port,host,()=>{
        console.log(`Node server is listening to ${srever.address().port} `)
});

app.use('/api',router);