const app = require('express').Router();
const path = require('path');
const {enableAuth} = require('../config');

const jsonServer = require('json-server');
const router = jsonServer.router(path.join(__dirname, '..', 'db.json'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
      return res.status(200).json({});
      }
  next();
  });

app.use(require('body-parser').json());

app.use('/v1', require('./auth'));

if(enableAuth) {
  const authorize = require('./auth/authorize');
  //authorize(['news:all', 'news:read'])
  app.get('/api/v1/news(|/*)',authorize(['news:all', 'news:read']))
 //  app.get('/api/v1/notes(|/*)', authorize(['notes:all', 'notes:read']));
  // // app.get('/api/v1/notes(|/*)');
  // app.post('/api/v1/notes(|*)', authorize(['notes:all', 'notes:read']));
  // app.put('/api/v1/notes(|*)', authorize(['notes:all', 'notes:edit']));
  // app.delete('/api/v1/notes(|*)', authorize(['notes:all', 'notes:edit']));
  // // app.patch('/api/v1/notes(|*)', authorize(['notes:all', 'notes:write']));
}

app.use('/api/v1', router);

app.use((err, req, res, next) => {
  if(err) { next(); }
  console.log('err:', err);
});

module.exports = app;
