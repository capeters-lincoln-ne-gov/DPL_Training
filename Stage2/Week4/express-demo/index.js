const Joi = require('joi');     //Joi is a class, so name with PascalCase
const express = require('express');
const func = require('joi/lib/types/func');
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

// GET COURSES ===========================
app.get('/api/courses', (req, res) =>{
    res.send(courses);
});

// GET COURSE ============================
app.get('/api/courses/:id',  (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('No course with that ID was found.'); //404 not found
    res.send(course);
 });
 
// POST ==================================     time marker 42:41
app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body);     //reult.error
    if (error) return res.status(400).send(error.details[0].message);
 
    const course = {
        id: courses.length + 1,
        name: req.body.name 
    }
    courses.push(course);
    res.send(course);
}  ); 


// PUT ================================
app.put('/api/courses/:id',  (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('No course with that ID was found.'); //404 not found

    const { error } = validateCourse(req.body);     //reult.error
    if (error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);
     
 });

// ========== DELETE COURSE ============================
app.delete('/api/courses/:id',  (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('No course with that ID was found.'); //404 not found

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);

 });
 
// ==== DATA VALIDATION ================================  48:00 ====
function validateCourse(course){
    //const course = courses.find(c => c.id === parseInt(req.params.id));
    //if (!course) res.status(404).send('No course with that ID was found.'); //404 not found

    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);   

 }
 
// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));
