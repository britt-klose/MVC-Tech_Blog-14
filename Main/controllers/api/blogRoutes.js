const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

//CREATE new blog post
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

//UPDATE a blog post by its id
router.put('/:id', withAuth, async (req, res) => {
  Blog.update(
    {
      id:req.body.id,
      blog_name: req.body.blog_name
    },
    {
      where:{
        id:req.params.id
      }
    }
  ) .then((updatedBlog)=>{
    res.json(updatedBlog)
  })
  .catch((err) => res.json(err))
});

//CREATE a neww COMMENT on a post by its id
router.post('/:id', async (req, res) => {
  try{

  }
});

//DELETE a blog post by id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
