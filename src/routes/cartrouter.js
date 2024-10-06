import { Router } from 'express';

const cartRouter = Router();

const cartProducts = [];

cartRouter.get('/', (req, res) => {
    res.status(200).send({ error: null, message : 'Carrito vacío', data: cartProducts });
    
});

cartRouter.post('/', (req, res) => {
    const newCart = { id: 1 , products: []};
    cartProducts.push(newCart);
    res.status(200).send({ error: null, data: newCart });
});

cartRouter.post('/:cid/products/:pid', (req, res) => {
    const cid = parseInt(req.params.cid);
    if (cid != cartProducts.id) {
        res.status(400).send({ error: 'El carrito no existe, agréguelo primero', data: [] });
    } else {
        const pid = parseInt(req.params.pid);
        const newProduct = { id: pid, quantity: quantity };
        cartProducts.products.push(newProduct);
        if ( pid === newProduct.id) {
            newProduct.quantity++;
        }
    }
});

export default cartRouter;