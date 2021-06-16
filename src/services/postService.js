const PostRepository = require('../repositories/postRepository');
const repository = new PostRepository();

const findAll = async() => {
    return await repository.findAll();
}

module.exports = findAll;