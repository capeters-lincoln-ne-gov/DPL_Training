const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course A'},
    { id: 2, name: 'course B'},
    { id: 3, name: 'course C'},
    { id: 4, name: 'course D'},
    { id: 5, name: 'course E'}
]
app.get('/', (req, res) => {
     res.send('Hello Big World');
});

app.get('/api/courses', (req, res) =>{
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body, schema);

    if (result.error){ 
        res.status(400).send(result.error);
        return;
     }
     
    const course = {
        id: courses.length + 1,
        name: req.body.name 
    }
    courses.push(course);
    res.send(course);
}  )

app.get('/api/courses/:id',  (req, res) => {

   const course = courses.find(c => c.id === parseInt(req.params.id));
   if (!course) res.status(404).send('No course with that ID was found.'); //404 not found
   res.send(course);
});
 
// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));

// app.post();
// app.put();
// app.delete();