const Post = require('../models/post');

class PostRepository {
    constructor(){

    }

    async findAll(){
        return await Post.findAll();
    }
}

module.exports = PostRepository;