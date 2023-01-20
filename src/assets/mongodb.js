const express=require('express')
const MongoClient=require('mongodb').MongoClient

const app=express()

app.use(express.json())
var database

app.get('/', (req,resp) => {
    resp.send('Welcome to mongodb Api')
})

app.get('/api/posts',(req, resp) => {
    database.collection('posts').find({}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)
    })
})

app.listen(8080, () => {
    MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true}, (error, result) =>{
        if(error) throw error
        database = result.db('blog')
        console.log('Connection successful')
    })
})








//@Injectable({
 // providedIn: 'root'
//})
//export class ApiService {
//private url = 'http://localhost:8080/api';
