const productsModel = require ("../models/productsModel");


async function create(productsData) {
    try {
      const product = new productsModel(productsData);
      return await product.save();
    } catch (error) {
      throw new Error('Error al crear el producto');
    }
  }


  module.exports = {
    create,
  };