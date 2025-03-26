import express from "express";
import productsRouter from "./routers/products";
import fileDb from "./fileDb";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors())
app.use(express.static("public"));
app.use(express.json());
app.use('/products', productsRouter);

const run = async () => {
    await fileDb.init();

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
};

run().catch((err) => console.error(err));