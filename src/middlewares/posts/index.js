const {check , validationResult } = require('express-validator');
const AppError = require('../../errors/appError');
const postService = require('../../services/postService');

const _idExist = check('id').custom(
    async (id = '') =>{
        const pFound = await postService.findById(id);
        if (!pFound){
            throw new AppError('The id does not exist in DB', 400);
        };
    }
);

const validResult = (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        throw new AppError('Validation Errors', 400, errors.errors);        
    }   
    next();
};

const getRequestValidation = [
    _idExist,
    validResult
];

const patchRequestValidation = [
    _idExist,
    validResult
];

const deleteRequestValidation = [
    _idExist,
    validResult
];

module.exports = {
    getRequestValidation,
    patchRequestValidation,
    deleteRequestValidation
};