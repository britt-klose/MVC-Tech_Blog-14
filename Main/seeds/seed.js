const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  
// Test if user_id works and comments load
  // for (const comment of commentData){
  //   await Comment.create({
  //     ...comment,
  //     blog_id: blog[Math.floor(Math.random() * blogs.lenth)].id,
  //   });
  // }
  await Comment.bulkCreate(commentData);
  process.exit(0);
};

seedDatabase();
