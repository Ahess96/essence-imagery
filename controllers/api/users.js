const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

module.exports = {
  create, 
  login,
}

async function create(req, res){
  try {
    const user = await User.create(req.body)
    const token = createJWT(user)
    res.json(token)
  } catch (error) {
    res.status(400).json(error)
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    const check = await bcrypt.compare(req.body.password, user.password)
    if(check && user) {
      const token = createJWT(user)
      res.json(token)
    }
  } catch(error) {
    res.status(400).json(error)
  }
}


function createJWT(user){
  return jwt.sign(
    {user},
    process.env.SECRET,
    { expiresIn: '24hr'}
  )
}