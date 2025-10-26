import express from 'express';
import cors  from 'cors';
import {addUser, deleteUser, getUsers, updateUser} from './controller.js';


const app =express();

// middleware 
app.use(cors());//resouce sharing unblock

// html form ekakin request body ekat data ekak send kranakot decode krla evana eka encode krnva 
app.use(
    express.urlencoded({
        extended:true,
    })
);

app.use(express.json());

// craete Rest Api
app.get('/users',(req,res) => {
   
   getUsers((req,res,next) => {
        res.send();
    })
})

// app.post('/createuser',(req,res) =>{

//     addUser(req.body,(callback) =>{
//         res.send();

//     })
// })

app.post('/createuser', (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "Request body is missing" });
  }

  addUser(req.body, (result) => {
    res.json(result);
  });
});





app.put('/updateuser',(req,res) =>{

    updateUser(req.body,(callback) =>{
        res.send(callback);

    })
})

app.delete('/deleteuser',(req,res) =>{

    deleteUser(req.body,(callback) =>{
        res.send(callback);

    })
})


export default app;


