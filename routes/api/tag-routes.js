const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include:[{model: Product}]
    });
    res.status(200).json(tagData)
  } catch (error) {
    res.status(500).json(error)
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id,{
      include:[{model: Product}]
    });
    res.status(200).json(tagData)
  } catch (error) {
    res.status(500).json(error)
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const tagPost = await Tag.create(req.body)
    res.status(200).json('tag Created', tagPost)
  } catch (error) {
    res.status(404).json(error)
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const tagUpdate = await Tag.update(req.body,{
      where: {
        id: req.params.id,
      }
    })
    res.status(200).json('Tag Updated', tagUpdate)
    
  } catch (error) {
    res.status(404).json(error)
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const tagDelete = await Tag.findByPk(req.params.id)
    await tagDelete.destroy()
    res.status(200).json('Tag Deleted')
  } catch (error) {
    res.status(404).json(error)
  }
  // delete on tag by its `id` value
});

module.exports = router;
