// implement your posts router here
const express = require('express');

const database = require("./posts-model");

const router = express.Router();

router.get('/', (req, res) => {
    database
    .find()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "The posts information could not be retrieved" });
    });

  });
  
  router.get('/:id', (req, res) => {
    const post = req.body;
    database.findById(post.id).then((post) => {
        if(post===null){
            res.status(404)
            .json({message:'The post with the specified ID does not exist'})
        }
    }).catch((error)=>{
  res.status(500)
      .json({ message: "The post information could not be retrieved" })
    })
    
    
  });
  
  router.post('/', (req, res) => {
    const post = req.body;
    console.log(req.body);
    if (post === undefined || post.title === undefined || user.contents === undefined) {
      res
        .status(400)
        .json({ message: "Please provide title and contents for the post" });
    } else {
      database
        .insert(post)
        .then((newPost) => {
          res.status(201).json(newPost);
        })
        .catch((error) => {
          res
            .status(500)
            .json({
              message: "There was an error while saving the post to the database",
            });
        });
    }

  });
  
  router.put('/:id', (req, res) => {
    

    const post = req.body;
    if (post === undefined || post.title === undefined || post.contents === undefined) {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist" });
      }
    database.findById(post.id).then((post) => {
        if(post===null){
            res.status(400)
            .json({message:'Please provide title and contents for the post'})
        }else{
            database.update(post).then((newPost) =>{
                res.status(200).json(newPost)
            })
        }
    }).catch((error)=>{
  res.status(500)
      .json({ message: "The user information could not be modified"  })
    })


  });

  router.delete('/:id', (req, res) => {
    
    const post= req.body;
  
    database.remove(post.id).then((post) => {
        if(post===null){
            res.status(404)
            .json({message:'TThe post with the specified ID does not exist'})
        }
    }).catch((error)=>{
  res.status(500)
      .json({ message: "The post could not be removed"  })
    })


  });
  
  router.get('/:id/comments', (req, res) => {
    database
    .find()
    .then((post) => {
      res.status(201).json(post);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "The comments information could not be retrieved" });
    });
  });
  
  

  module.exports = router;