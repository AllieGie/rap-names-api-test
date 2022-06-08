const express = require('express')
const app = express()
const cors = require('cors')
const PORT= 8000

app.use(cors())


const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'kendrick lamar': {
        'age': 34,
        'birthName': 'Kendrick Lamar Duckworth',
        'birthLocation':'Compton,California'
    },
    'jay-z': {
        'age': 52,
        'birthName': 'Shawn Corey Carter',
        'birthLocation': 'New York City'
    },
    'da baby': {
        'age': 30,
        'birthName': 'Jonathan Lyndale Kirk',
        'birthLocation': 'Cleveland, Ohio'
    },
    'big krit':{
        'age': 35,
        'birthName': 'Justin Lewis Scott',
        'birthLocation': 'Meridian, Mississippi'
    },
    'pop smoke': {
        'age': 20,
        'borthName': 'Bashar Barakah Jackson',
        'birthLocation': ' Canarsie, Brooklyn, New York'
    },
    'kevin gates': {
        'age': 36,
        'birthName': 'Kevin Jerome Gilyard',
        'birthLocation': 'New Orleans, Louisiana'
    },
    'madeintyo': {
        'age': 30,
        'birthName': 'Malcolm Jamaal Davis',
        'birthLocation': 'Honolulu, Hawaii'
    },
    'kodak black': {
        'age': 24,
        'birthName': 'Dieuson Octave',
        'birthLocation': 'Pompano Beach, Florida'
    },
    'nipsey hussle': {
        'age': 33,
        'birthName': 'Airmiess Joseph Asghedom',
        'birthLocation':'Crenshaw, Los Angeles, California'
    }, 
    'roddy ricch': {
        'age': 23,
        'birthName': 'Rodrick Wayne Moore Jr.',
        'birthLocation':'Compton, California'
    },
    'freddie gibbs': {
        'age': 39,
        'birthName': 'Fredrick Jamel Tipton',
        'birthLocation':'Gary, Indiana'
    },
    'Doechii': {
        'age': 23,
        'birthName': 'Jaylah Hickmon',
        'birthLocation':'Tampa,Florida'
    },
    'isaiah rashad': {
        'age': 31,
        'birthName': 'Isaiah Joel McClain',
        'birthLocation':'Chattanooga, Tennessee'
    },
    'noname': {
        'age': 30,
        'birthName': 'Fatimah Nyeema Warner',
        'birthLocaton':'Bronzeville, Chigago'
    },
    'goldlink': {
        'age': 29,
        'birthName':'D\'Anthony William Carlos',
        'birthLocation':'Washington, D.C.'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'  
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLocaleLowerCase()
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})
