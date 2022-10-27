const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const courses = require('./data/course.json');


app.get('/', (req, res) =>{
    res.send('Course API server is Running');
})
app.get('/courses-categories', (req, res) =>{
    res.send(courses);
})
app.get('/courses-categories/:id', (req, res) =>{
    const id = parseInt(req.params.id);

    const course = courses.find(cs => cs.id === id) || {};
    res.send(course);
})

app.listen(port, () => console.log('Server is Running on port: ', port));