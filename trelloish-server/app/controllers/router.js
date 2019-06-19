const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router();
const jsonParser = bodyParser.json();

const BoardsController = require('./boards')
const ListsController = require('./lists')
const CardsController = require('./cards')


//BOARD ROUTES
router.post('/boards', jsonParser, BoardsController.createBoard)

router.get('/boards', jsonParser, BoardsController.fetchBoards)

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

module.exports = {router}