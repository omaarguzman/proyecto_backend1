import express from 'express';
import { Router } from 'express';

const router = Router();

const products = [
    { id: 1, title: 'product 1', description: 'product 1 description', code: 'p1', price: 1000, status: true, stock: 10, category: 'zapatos', thumbnails: []},
    { id: 2, title: 'product 2', description: 'product 2 description', code: 'p2', price: 1500, status: true, stock: 15, category: 'computadoras', thumbnails: []},
    { id: 3, title: 'product 3', description: 'product 3 description', code: 'p3', price: 2000, status: true, stock: 20, category: 'celulares', thumbnails: []},
    { id: 4, title: 'product 4', description: 'product 4 description', code: 'p4', price: 2500, status: true, stock: 25, category: 'televisores', thumbnails: []},
    { id: 5, title: 'product 5', description: 'product 5 description', code: 'p5', price: 3000, status: true, stock: 30, category: 'tabletas', thumbnails: []}
];

router.get('/', (req, res) => {
    res.status(200).send({ error: null, data: products });
});

router.get('/:pid', (req, res) => {
    const pid = parseInt(req.params.pid);
    const limit = parseInt(req.query.limit);
    const index = products.findIndex(element => element.id === pid);
    if (index > -1) {
        res.status(200).send({ error: null, data: products[index] });
    } else {
        res.status(404).send({ error: 'No se encuentra el producto', data: [] });
    }
});

router.post('/', (req, res) => {
    const { title, description, code, price, status, stock, category, thumbnails } = req.body;

    if (title == '' && description == '' && code == '' && price == ''  && stock == '' && category == '' && thumbnails == '') {
        const maxId = Math.max(...productos.map(element => +element.id));
        const newProduct = { id: maxId + 1, title: title, description: description, code: code, price: price, stock: stock, category: category, thumbnails: thumbnails };
        users.push(newProduct);
        res.status(200).send({ error: null, data: newProduct, file: req.file });
    } else {
        res.status(400).send({ error: 'Faltan campos obligatorios', data: [] });
    }
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(element => element.id === id);
    
    if (index > -1) {
        products[index] = req.body;
        res.status(200).send({ error: null, data: products[index] });
    } else {
        res.status(404).send({ error: 'No se encuentra el producto', data: [] });
    }
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(element => element.id === id);
    
    if (index > -1) {
        products.splice(index, 1);
        res.status(200).send({ error: null, data: 'Producto borrado' });
    } else {
        res.status(404).send({ error: 'No se encuentra el producto', data: [] });
    }
});


export default router;