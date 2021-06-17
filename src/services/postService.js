const PostRepository = require('../repositories/postRepository');
const CategoryTypeRepository = require('../repositories/categoryTypeRepository');

const repository = new PostRepository();
const categoryTypeRepository = new CategoryTypeRepository();

const findAll = async() => {
    return await repository.findAll();
}

const save = async(post)=>{
    const categoryType = await categoryTypeRepository.findByDescription(post.category);
    post.categoryId = categoryType.id;
    return await repository.save(post);
}

module.exports = {
    findAll,
    save
};