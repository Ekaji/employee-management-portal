const app = require('express')()
const PORT = 3001

app.get('/', (req, res) => {
    res.send(`<h1>hello world<h1>`)
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})