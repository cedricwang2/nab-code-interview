const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())

app.use(bodyParser.json())

app.post('/authenticate', function (req, res) {
    console.log(JSON.stringify(req.body))
  if(req.body.username === 'error'){
    res.status(500).json({
        error: 'some error'
    })
  }else {
      res.status(200).json({
          id_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
      })
  }
})

console.log('Listen on 8000');
app.listen(8000)
