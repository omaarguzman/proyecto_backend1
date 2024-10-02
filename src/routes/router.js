import { Router } from 'express';

const router = Router();

const productos = [
    { id: 1, nombre: 'zapatos', cantidad: 10 },
    { id: 2, nombre: 'computadoras', cantidad: 15 },
    { id: 3, nombre: 'celulares', cantidad: 20 },
    { id: 4, nombre: 'televisores', cantidad: 25 },
    { id: 5, nombre: 'tabletas', cantidad: 30 }
];

router.get('/', (req, res) => {
    res.status(200).send({ error: null, data: productos });
});

router.post('/', (req, res) => {
    const { nombre, cantidad } = req.body;

    if (firstName != '' && lastName != '') {
        const maxId = Math.max(...productos.map(element => +element.id));
        const nuevoProducto = { id: maxId + 1, nombre: nombre, cantidad: cantidad };
        users.push(nuevoProducto);
        res.status(200).send({ error: null, data: nuevoProducto, file: req.file });
    } else {
        res.status(400).send({ error: 'Faltan campos obligatorios', data: [] });
    }
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(element => element.id === id);
    
    if (index > -1) {
        productos[index] = req.body;
        res.status(200).send({ error: null, data: users[index] });
    } else {
        res.status(404).send({ error: 'No se encuentra el producto', data: [] });
    }
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(element => element.id === id);
    
    if (index > -1) {
        productos.splice(index, 1);
        res.status(200).send({ error: null, data: 'Producto borrado' });
    } else {
        res.status(404).send({ error: 'No se encuentra el producto', data: [] });
    }
});


export default router;