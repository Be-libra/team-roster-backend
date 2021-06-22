const queries= require('./allQueries')

const team = require('../models/team.js')
const player = require('../models/player.js')

const dataAccess = queries({team,player})

module.exports = dataAccess
