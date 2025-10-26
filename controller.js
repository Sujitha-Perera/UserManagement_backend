import { response } from "express";
import User from "./model.js";


// Get users 
// promise
const getUsers=(req,res,next ) => {
    User.find()
        .then(response=>{
            res.json({response})
        })
        .catch(error=>{
            res.json({Error:error})
        });
};

// Add user

const addUser=(req,res,next)=>{
    const user=new User({
        id: req.body.id,
        name: req.body.name,
    });
    user.save()
        .then(response=>{
            res.json({response})
        })
        .catch(error=>{
            res.json({Error:error})
        });

} 
//updat user
const updateUser=(req,res,next)=>{
    const {id,name}=req.body;
    User.updateOne({id: id },{$set:{name:name}})
        .then(response=>{
            res.json({response})
        })
        .catch(error=>{
            res.json({Error:error})
        });
}

// Delete user

const deleteUser=(req,res,next)=>{
    const id= req.body.id;
    User.deleteOne({id:id})
        .then(response=>{
            res.json({response})
        })
        .catch(error=>{
            res.json({Error:error})
        });
}

export { getUsers, addUser,updateUser,deleteUser   };

