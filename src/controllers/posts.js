//Requiero express
const express = require('express');

const postService = require('../services/postService');

const Success = require('../handlers/successHandler');

//La idea es que aca solo deberiamos manejar la logica del controller y no del service.


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllPosts = async (req, res, next) =>{

    try{
        const posts = await postService.findAll();
        res.json(new Success(posts));
    }catch(err){
        next(err);
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getPost = async (req, res, next) =>{

    try{
        let { id } = req.params;
        const post = await postService.findById(id);
        res.json(new Success(post));
    }catch(err){
        next(err);
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const createPost = async (req, res, next) => {

    try{
        let p = req.body;
        p = await postService.save(p);

        res.status(201).json(new Success(p));
    }catch(err){
        next(err);
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updatePost = async (req, res, next) => {

    try{
        let { id } = req.params;
        let p = req.body;
        const pPatched = await postService.patch(id,p);
        res.json(new Success(pPatched));
    }catch(err){
        next(err);
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const deletePost = async (req, res, next) => {

    try{
        let { id } = req.params;
        const posted = await postService.remove(id);

        res.json(new Success(posted));
    }catch(err){
        next(err);
    }
}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};