const PostRepository = require('../repositories/postRepository');
const CategoryTypeRepository = require('../repositories/categoryTypeRepository');

const repository = new PostRepository();
const categoryTypeRepository = new CategoryTypeRepository();

const findAll = async() => {
    return await repository.findAll();
};

const findById = async(id) =>{
    return await repository.findById(id);
};

const save = async(post)=>{
    const categoryType = await categoryTypeRepository.findByDescription(post.category);
    post.categoryId = categoryType.id;
    return await repository.save(post);
};

const patch = async(id,p)=>{
    if(p.categoryType){
        const categoryType = await categoryTypeRepository.findByDescription(p.categoryType);
        p.categoryTypeId = categoryType.id;
    }
    return await repository.patch(id,p);
}

const remove = async(id)=>{
    return await repository.delete(id);
}

module.exports = {
    findAll,
    findById,
    save,
    patch,
    remove
};