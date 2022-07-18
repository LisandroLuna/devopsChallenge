import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.set('views', './')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  let info
  fetch('http://backend.app-backend.svc.cluster.local:8080/Spring4-1/data/person?id=15')
  .then(response => response.json())
  .then(data => info = data); 
  res.render('index', { title: 'Demo Frontend', name: data.name, location: data.location, page: 'Datos:' })
})
app.listen(80, () => {
  console.log('listening on port 80');
});