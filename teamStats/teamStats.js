// We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

const team = {
    _players : [
        {
            firstName : "steven",
             lastName : "gerrard",
             age : 37,

        },
        {
            firstName : "fernando",
            lastName : "torres",
            age : 40,  
        },
        {
            firstName : "luis",
            lastName : "suarez",
            age : 35,  
        },
    ],
    _games : [
        {
            opponent : "manU",
            teamPoints : 101,
            opponentPoints : 69,

        },
        {
            opponent : "chelski",
            teamPoints : 90,
            opponentPoints : 75,

        },
        {
            opponent : "lfc",
            teamPoints : 130,
            opponentPoints : 58,

        }

    ],
    get players(){
        return this._players;
    },
    get games(){
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
        let player = {
            firstName : newFirstName,
            lastName : newLastName,
            age : newAge, 
        };
    
    this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
        let game = {
            opponent : newOpponent,
            teamPoints : newTeamPoints,
            opponentPoints : newOpponentPoints, 
        };
    
    this._games.push(game);
    }
};

team.addPlayer("jakub", "landerka", 20)
console.log(team.players)

team.addGame("rangers", 20, 60)
console.log(team.games)