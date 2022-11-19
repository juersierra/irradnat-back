const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
require('./db/conection');
const PORT = process.env.PORT || 3001; 
const app = express();
const CatalogControllers= require('./controllers/catalogcontrollers');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(cors({
//     origin: 'http://localhost:3000'
// }));

app.get('/', async (req, res) => {
    const catalog = await CatalogControllers.findAll()
    res.json({
        catalog
    });
});

app.post('/crear', (req, res) => {
    CatalogControllers.create(req.body);
    res.json('usuario creado')
})

app.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await CatalogControllers.delete(id)
  res.json('usuario eliminado');
})

app.post('/:id', (req, res) => {
    const id = req.params.id;
    const foto = req.body;
    CatalogControllers.update(id, foto);
    res.json('usuario modificado')
})

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
})