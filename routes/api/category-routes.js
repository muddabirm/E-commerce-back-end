const router = require('express').Router();
const { response } = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include:[{model: Product}]
    });
    res.status(200).json(categoryData)
  } catch (error) {
    res.status(500).json(error)
  }
  });
  // find all categories
  // be sure to include its associated Products

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id,{
      include: [{model: Product}]
    })
    res.status(200).json(categoryData)
  } catch (error) {
    res.status(404).json(error)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const categoryPost = await Category.findByPk(req.params.id)
    await categoryPost.create()
    res.status(200).json('Category Created')
  } catch (error) {
    res.status(404).json(error)
  }
  
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryDelete = await Category.findByPk(req.params.id)
    await categoryDelete.destroy()
    res.status(200).json('Category Deleted')
  } catch (error) {
    res.status(404).json(error)
  }
  // delete a category by its `id` value
});

module.exports = router;
