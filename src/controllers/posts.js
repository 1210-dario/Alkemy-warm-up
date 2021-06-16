//Requiero express
const express = require('express');

const postService = require('../services/postService');

//La idea es que aca solo deberiamos manejar la logica del controller y no del service.


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllPosts = async (req, res, next) =>{

    try{
        const posts = await postService.findAll();
        res.json(posts);
    }catch(err){
        next(err);
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getPost = (req, res, next) =>{

    try{

    }catch(err){
        next(err);
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const createPost = (req, res, next) => {

    try{

    }catch(err){
        next(err);
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updatePost = (req, res, next) => {

    try{

    }catch(err){
        next(err);
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const deletePost = (req, res, next) => {

    try{

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