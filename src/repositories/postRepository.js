const Post = require('../models/post');
const CategoryType = require('../models/categoryTypes');
class PostRepository {
    constructor(){

    }

    async findAll(){
        return await Post.findAll();
    }

    async findById(id){
        return await Post.findByPk(id);
    }

    async save(p){
        return await Post.create(p, {
            include: [CategoryType]
        });
    }

    async patch(id,p){
        return await Post.update(p,{
            where:{
                id
            }
        });
    }

    async delete(id){
        return await Post.destroy({
            where: {
                id
            }
        });
    }
}

module.exports = PostRepository;