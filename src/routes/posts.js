//Requiero el metodo Routes de express
const { Router } = require('express');

//Requiero las funciones del controller y las uso en las rutas
const {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/posts');

//Requiero las validaciones del ID de Middlewares
const {
    getRequestValidation,
    patchRequestValidation,
    deleteRequestValidation
} = require('../middlewares/posts');

//Ejecuto las rutas
const router = Router();

//Seteo que hacer con las rutas, es decir aca me van a llegar los request y aca decido que hacer con estos.
router.get('/',getAllPosts);
router.get('/:id', getRequestValidation, getPost);
router.post('/', createPost);
router.patch('/:id', patchRequestValidation, updatePost);
router.delete('/:id', deleteRequestValidation, deletePost);

module.exports = router;