import { Router } from 'express';
var bodyParser = require('body-parser')
const router = Router();

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Get All Users (For Testing)
router.get('/', (req, res) => {
  console.log('users get route');
  return res.send(JSON.stringify(req.context.users));
});

// Get User
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  // find logic
  const user = req.context.users.find(item => item.id === userId);

  console.log(`GET user ID HTTP method: ${userId} \n`);
  return res.send(JSON.stringify(userId));
});

// Create User
router.post('/', jsonParser, (req, res) => {
  const newUser = req.body;
  console.log('Request body', req.body);
  // create user to db
  // models.User.create({}) . then....
  return res.send(`POST user ID HTTP method: ${newUser} \n`);
});

export default router;
