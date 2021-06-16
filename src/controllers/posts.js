//Requiero express
const express = require('express');

const postService = require('../services/postService');

//La idea es que aca solo deberiamos manejar la logica del controller y no del service.


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllPosts = async (req, res) =>{

    try{
        const posts = await postService.findAll();
        res.json(posts);
    }catch(err){
        console.log(err);
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getPost = (req, res) =>{

}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const createPost = (req, res) => {

}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updatePost = (req, res) => {

}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const deletePost = (req, res) => {

}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};