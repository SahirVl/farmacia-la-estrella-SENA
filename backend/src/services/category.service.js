const { Category } = require('../models/category.model')


class CategoryService {
    async createCategory(data) {
        const product =  await Category.create(data)
        return product
    }
}
module.exports = CategoryService