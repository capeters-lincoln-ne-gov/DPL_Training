const Joi = require('joi');     //Joi is a class, so name with PascalCase
const express = require('express');
const func = require('joi/lib/types/func');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const games = [
    { id: 1, opponent: 'Minnesota', gameDate: "08/31/2023", gameTime: "06:30 PM", location: "Minneapolis", broadcast: "TBA"},
    { id: 2, opponent: 'Colorado', gameDate: "09/09/2023", gameTime: "2:30 PM", location: "Boulder", broadcast: "TBA"},
    { id: 3, opponent: 'Northern Illinois', gameDate: "09/16/2023", gameTime: "11:00 AM", location: "Lincoln", broadcast: "TBA"},
    { id: 4, opponent: 'Louisiana Tech', gameDate: "09/23/2023", gameTime: "06:30 PM", location: "Lincoln", broadcast: "TBA"},
    { id: 5, opponent: 'Michigan', gameDate: "09/30/2023", gameTime: "06:30 PM", location: "Lincoln", broadcast: "TBA"},
]
app.get('/', (req, res) => {
     res.send('Hello Big World');
});

// GET GAMES ===========================
app.get('/api/games', (req, res) =>{
    res.send(games);
});

// GET GAMES ============================
app.get('/api/games/:id',  (req, res) => {

    const game = games.find(c => c.id === parseInt(req.params.id));
    if (!game) return res.status(404).send('No game with that ID was found.'); //404 not found
    res.send(game);
 });
 
// POST ==================================     time marker 42:41
app.post('/api/games', (req, res) => {
    console.log(req.body);
    const { error } = validateGame(req.body);     //reult.error
    console.log(error);
    if (error) return res.status(400).send(error.details[0].message);
 
    const game = {
        id: games.length + 1,
        opponent: req.body.opponent,
        gameDate: req.body.gameDate,
        gameTime: req.body.gameTime,
        location: req.body.location,
        broadcast: req.body.broadcast
    }
    games.push(game);
    res.send(game);
}  ); 


// PUT ================================
app.put('/api/games/:id',  (req, res) => {
    const game = games.find(c => c.id === parseInt(req.params.id));
    if (!game) return res.status(404).send('No game with that ID was found.'); //404 not found

    const { error } = validateGame(req.body);     //reult.error
    console.log(error);
    if (error) return res.status(400).send(error.details[0].message);

    game.opponent = req.body.opponent;
    game.gameDate = req.body.gameDate;
    game.gameTime = req.body.gameTime;
    game.location = req.body.location;
    game.broadcast = req.body.broadcast;
    res.send(game);
     
 });

// ========== DELETE COURSE ============================
app.delete('/api/games/:id',  (req, res) => {

    const game = games.find(c => c.id === parseInt(req.params.id));
    if (!game) return res.status(404).send('No game with that ID was found.'); //404 not found

    const index = games.indexOf(game);
    games.splice(index,1);

    res.send(game);

 });
 
// ==== DATA VALIDATION ================================  48:00 ====
function validateGame(game){
    //const game = games.find(c => c.id === parseInt(req.params.id));
    //if (!game) res.status(404).send('No game with that ID was found.'); //404 not found

    const schema = {
        opponent: Joi.string().min(3).required(),
        gameDate: Joi.date(),
        gameTime: Joi.string().required(),
        location: Joi.string().min(3).required(),
        broadcast: Joi.string().min(3).required()
    };
    return Joi.validate(game, schema);   

 }
 
// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));
