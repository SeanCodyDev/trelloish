const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport');
const jwt = require('jsonwebtoken');
// const config = require('../config');
const {basicStrategy, jwtStrategy} = require('./strategies');

const router = express.Router();
const jsonParser = bodyParser.json();

const BoardsController = require('./boards')
const ListsController = require('./lists')
const CardsController = require('./cards')


//BOARD ROUTES
router.get('/boards', [passport.authenticate('jwt', {session: false}), jsonParser, isLoggedIn], BoardsController.fetchBoards)
// router.get('/boards', [jsonParser], BoardsController.fetchBoards)

router.post('/boards', jsonParser, BoardsController.createBoard)

router.delete('/boards', jsonParser, BoardsController.deleteBoard)

router.put('/boards', jsonParser, BoardsController.updateBoard)


// LIST ROUTES
router.post('/lists', jsonParser, ListsController.createList)

router.get('/lists', jsonParser, ListsController.fetchLists)

router.delete('/lists', jsonParser, ListsController.deleteList)

router.put('/lists', jsonParser, ListsController.updateList)

//CARD ROUTES
router.post('/cards', jsonParser, CardsController.createCard)

router.get('/cards', jsonParser, CardsController.fetchCards)

router.delete('/cards', jsonParser, CardsController.deleteCard)

router.put('/cards', jsonParser, CardsController.updateCard)


// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

module.exports = {router, jwtStrategy, basicStrategy}