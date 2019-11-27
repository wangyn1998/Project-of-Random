var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/user', function(req, res, next) {
  res.render('User/user', { title: 'Express' });
});
router.get('/block', function(req, res, next) {
  res.render('Block/block', { title: 'Express' });
});
router.get('/block/post', function(req, res, next) {
  res.render('Block/post', { title: 'Express' });
});
router.get('/block/topic', function(req, res, next) {
  res.render('Block/topic', { title: 'Express' });
});
router.get('/score', function(req, res, next) {
  res.render('Score/score', { title: 'Express' });
});
router.get('/score/list', function(req, res, next) {
  res.render('Score/list', { title: 'Express' });
});
router.get('/score/manage', function(req, res, next) {
  res.render('Score/manage', { title: 'Express' });
});
router.get('/score/list/listIn', function(req, res, next) {
  res.render('Score/listIn', { title: 'Express' });
});
router.get('/material', function(req, res, next) {
  res.render('Material/material', { title: 'Express' });
});
router.get('/material/method', function(req, res, next) {
  res.render('Material/method', { title: 'Express' });
});
router.get('/material/spot', function(req, res, next) {
  res.render('Material/spot', { title: 'Express' });
});
router.get('/system', function(req, res, next) {
  res.render('System/system', { title: 'Express' });
});

module.exports = router;
