import express from 'express';
import fileDb from "../fileDb";
import {TProductWithoutId} from "../type";
import {imagesUpload} from "../multer";
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

productsRouter.post('/', imagesUpload.single('image') , async (req, res) => {
    if (!req.body.price || !req.body.title) {
        res.status(400).send({'error': 'Fields title | price required'});
    }

    const product: TProductWithoutId = {
        title: req.body.title,
        description: req.body.description,
        price: parseFloat(req.body.price),
        image: req.file ? 'images/' + req.file.filename : null,
    };
    const savedProduct = await fileDb.addItem(product)

    res.send(savedProduct);
});

export default productsRouter;
