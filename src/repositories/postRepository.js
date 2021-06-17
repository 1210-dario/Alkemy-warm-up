const Post = require('../models/post');
const CategoryType = require('../models/categoryTypes');
class PostRepository {
    constructor(){

    }

    async findAll(){
        return await Post.findAll();
    }

    async save(p){
        return await Post.create(p, {
            include: [CategoryType]
        });
    }
}

module.exports = PostRepository;