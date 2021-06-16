//Requiero express
const express = require('express');

//La idea es que aca solo deberiamos manejar la logica del controller y no del service.


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllPosts = (req, res) =>{
    const users = [
        {
            id:1,
            name:"Dari"
        }
    ]
    res.json(users)
};

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