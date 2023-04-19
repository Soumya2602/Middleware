//Experiment
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'ExpressApp',
        name: 'Soumya'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Soumya'
    })
})

app.get('/about/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Error 404!',
        title: 'History',
        name: 'Soumya'
    })
})

app.get('/intro', (req, res) => {
    res.render('intro', {
        errorMessage: 'This is introduction section.',
        title: 'Introduction',
        name: 'Soumya',
        content: "Hello world"
    })
})
app.get('/intro/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page you are looking for does not exist',
        title: 'Intro',
        name: 'Soumya'
    })
})

app.get('/history', (req, res) => {
    res.render('history', {
        helpText: 'History section.',
        title: 'History',
        name: 'Soumya',
        content: "Hello world"
    })
})

app.get('/history/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page you are looking for does not exist',
        title: 'History',
        name: 'Soumya'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Soumya'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help',
        name: 'Soumya',
        errorMessage: 'Help article not found!'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Help',
        name: 'Soumya',
        errorMessage: 'Page not found!'
    })
})



app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})


