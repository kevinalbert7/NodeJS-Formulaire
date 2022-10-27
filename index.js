const express = require('express')
const app = express()
const engine = require('express-handlebars').engine
const port = 5000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('form')
})

app.post('/form/profil', (req, res) => {
    const { username, password } = req.body

    // Pour rediriger vers la route '/profil'
    // Avec les paramètres url
    // On démarre la séquence de paramètres avec "?"
    // parametre_name=parametre_value
    // On sépare nos paramètres avec "&"
    res.redirect(`/profil?username=${username}&password=${password}`)

    // Pour afficher directement le template avec les variables
    // res.render('profil', {
    //     username: req.body.username,
    //     password: req.body.password
    // })   
})

app.get('/profil', (req, res) => {
    const { username, password } = req.query

    res.render('profil', {
        username,
        password
    })
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})