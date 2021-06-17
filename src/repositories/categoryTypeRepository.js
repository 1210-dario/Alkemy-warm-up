const CategoryTypes = require('../models/categoryTypes');

class CategoryTypeRepository {
    constructor(){

    }
    async findById(id){
        return await CategoryTypes.findByPk(id);
    }

    async findByDescription(description){
        return await CategoryTypes.findOne({where: {description}});
    }
}

module.exports = CategoryTypeRepository;