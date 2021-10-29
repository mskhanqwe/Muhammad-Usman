import express from 'express'
const app = express()
const app = process.env.PORT || 3000
app.use((req, res, next =>{
    console.log("a request came", Date.now());
    next()
}))
app.get('/', function(req, res){
    res.send('Hello World')
})
app.get('/profile', function(req, res){
    res.send('Hello Profile')
})
app.get('/home', function(req, res){
    res.send('Hello Home')
})

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})