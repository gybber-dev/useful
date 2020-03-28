const {Router} = require('express');
const Todo = require('../models/Todo.js');

const router = Router();
const url = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations'

router.get(url, async(req, res)=>{
  console.log(url)
  res.render('api', {
    title: 'API Item',
    isCreate: true
  })
})

router.get('/', async (req, res)=>{
  const todos = await Todo.find({}).lean();
  console.log('todos', todos);
  res.render('index', {
    title: 'some list',
    isMain: true,
    todos
  })
})

router.get('/create', (req, res)=>{
  res.render('create', {
    title: 'Create Item',
    isCreate: true
  })
})

router.post('/create', async(req, res)=>{
  const todo = new Todo({
    title: req.body.title
  })
  await todo.save();
  res.redirect('/')
});

router.post('/complete', async (req, res)=>{
  const todo = await Todo.findById(req.body.id)

  todo.completed = !!req.body.completed;
  // console.log(req.body.completed);
  // todo.completed = true;
  await todo.save();

  res.redirect('/')
})
module.exports = router
