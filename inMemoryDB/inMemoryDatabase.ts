import fs from "fs";

interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
}

var products: IProduct[] = JSON.parse(fs.readFileSync('./products.json').toString());

console.log(products)
