const express = require('express')
const router = express.Router()
const userDAO = require('./userDAO')

//유저 업무와 관련된 요청이 들어왔을때 그 요청을 처리하는 역할.
//http://localhost:8000/users/signup
router.post('/signup', async (req, res, next) => {
  console.log('user router, signup......')
  //front 전달 데이터
  const data = req.body
  userDAO.signup(data, (resp) => {
    res.send(resp)
  })
})

module.exports = router