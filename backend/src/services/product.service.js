const { Product } = require('../models/product.model')
const { Category } = require('../models/category.model')



class ProductService {
    async createProduct(data) {
        const product =  await Product.create(data)
        return product
    }

    async productList() {
    const list = await Product.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "categoryId"],
      },
      include: [
        {
          model: Category,
          as: "category", // alias usado en la asociación
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });
    return list;
  }
}
module.exports = ProductService