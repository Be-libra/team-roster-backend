const query=({team,player})=>{
    return Object.freeze({
        addTeam,
        getTeams,
        removeTeam,
        getPlayers,
        addPlayer,
        removePlayer,
        allTeamPlayers
    })

    async function addTeam(name){
        try {
            const result = await team.create({name:name})
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async function getTeams(){
        try{
            const teams = await team.find().populate("players")
            return teams
        }
        catch(err){
            console.log(err)
        }
    }

    async function removeTeam(teamName){
        try{
            const result = await team.deleteOne({name:teamName})
            return result
        }
        catch(err){
            console.log(err)
        }
    }

    async function getPlayers(){
        try{
            const players = await player.find()
            return players
        }
        catch(err){
            console.log(err)
        }
    }

    async function allTeamPlayers(teamId){
        try {
            const players = await player.find({team:teamId})
            return players
        } catch (error) {
            console.log(error)
        }
    }

    async function addPlayer(name,teamId){
        try {
            const Player = await player.create({name:name,team:teamId})
            return Player
        } catch (error) {
            console.log(error)
        }
    }

    async function removePlayer(playerId){
        try{
            const result = await player.deleteOne({_id:playerId})
            return result
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = query