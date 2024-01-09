const express = require('express')
const router = express.Router()
const userDAO = require('./userDAO')

//유저 업무와 관련된 요청이 들어왔을때 그 요청을 처리하는 역할.
//http://localhost:8000/users/signup
router.get('/signup', async (req, res, next) => {
  console.log('user router, signup......')
  userDAO.signup(null, (resp) => {
    res.send('success')
  })
})

module.exports = router