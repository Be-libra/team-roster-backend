const express = require('express')
const router = express.Router()
const queries = require('./queries/App.js')

router
    .get('/',(_,res)=>res.send('hello'))

    .get('/allTeams',async(_,res)=>{
        try {
            const teams = await queries.getTeams()
            res.send(teams)
        } catch (error) {
            console.log(error)
        }
    })

    .post('/addTeam',async(req,res)=>{
        const teamName=req.body.name
        try{
            const success = await queries.addTeam(teamName)
            res.send(success)
        }
        catch(err){
            console.log(err)
        }
        
    })

    .delete('/removeTeam',async(req,res)=>{
        const team = req.body.team
        try {
            const result = await queries.removeTeam(team)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    })

    .get('/allplayers',async(_,res)=>{
        try {
            const players = await queries.getPlayers()
            res.send(players)
        } catch (error) {
            console.log(error)
        }
    })

    .post('/allTeamPlayers',async(req,res)=>{
        try {
            const players = await queries.allTeamPlayers(req.body.teamId)
            res.send(players)
        } catch (error) {
            console.log(error)
        }
    })

    .post('/team/:teamId/player',async(req,res)=>{
        const teamId = req.params.teamId
        const playerName = req.body.name
        try {
            const result = await queries.addPlayer(playerName,teamId)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    })

    .delete('/removePlayer',async(req,res)=>{
        const player = req.body.playerId
        try {
            const result = await queries.removePlayer(player)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    })

module.exports = router