const express = requiere('express');
const router = express.Router();
const jwt = requiere('jsonwebtoken');
const bcript = requiere('bcript');

router
  .post('/api/singup', (req, res) => {
    if (!req.body.email && !req.body.password) {
      return res.sendStatus(400).json({ error: 'error' })
    }
    User.findOne({
      user: req.body.email
    }).then(user => {
      if (user) {
        return res.sendStatus(400).json({ error: 'user exists' })
      } else {
        const newUser = {
          email: req.body.email,
          password: req.body.password,
          name: req.body.name
        }

        bcript = done();
      }
    })
  })

  .post('/api/singin', (req, res) => {
    if (req.body.email.length < 2) {
      return res.sendStatus(400).json({ error: 'invalid email address' })
    } else {
      User.findOne({ req: { body: { email } } })
        .then(user => {
          if (!user) {
            return res.sendStatus(400).json({ error: 'User not found' })
          }

          bcript.compare(req.body.password, user.password)
            .then(isMatch => {
              if (isMatch) {
                const payload = {
                  name: user.name,
                  id: user.id
                };
                jwt.sing(payload, ...rest);
              }
            })
        })
    }
  });
