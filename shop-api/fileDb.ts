import {promises as fs} from 'fs';
import {IProduct, TProductWithoutId} from "./type";
import {randomUUID} from "node:crypto";

const pathName = './db.json';
let data: IProduct[] = [];

const fileDb = {
    async init() {
        try {
            const fileContents = await fs.readFile(pathName);
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            console.error(e);
            data = []
        }
    },
    async getItems() {
        return data
    },
    async addItem(item: TProductWithoutId) {
        const product = {
            ...item,
            id: randomUUID(),
        }
        data.push(product);
        await this.save();
        return product.id;
    },
    async save() {
        await fs.writeFile(pathName, JSON.stringify(data));
    },
}

export default fileDb
