const express = require('express');
const { users } = require('./data');
const projectRouter = require('./routes/projects');

const app = express();

app.use(express.json());
app.use(setUser);
app.use('/projects', projectRouter);

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/dashboard', (req, res) => {
  res.send('Dashboard Page');
});

app.get('/admin', (req, res) => {
  res.send('Admin Page');
});

function setUser(req, res, next) {
  const userId = req.body.userId;
  if (userId) {
    req.user = users.find((user) => user.id === userId);
  }
  next();
}

app.listen(3030, () => {
  console.log('The server listenning on port 3030');
});
