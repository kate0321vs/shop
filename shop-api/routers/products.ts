import express from 'express';
import fileDb from "../fileDb";
import {TProductWithoutId} from "../type";
const productsRouter = express.Router();


productsRouter.get('/', async (req, res) => {
    const products = await fileDb.getItems();
    res.send(products);
});

productsRouter.get('/:id', async (req, res) => {
    const products = await fileDb.getItems();
    const product = products.find(item => item.id === req.params.id);

    if (!product) {
        res.sendStatus(404);
        return;
    }

    res.send(product);
});

productsRouter.post('/', async (req, res) => {
    const product: TProductWithoutId = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    };
    const savedProduct = await fileDb.addItem(product)

    res.send(savedProduct);
});

export default productsRouter;
