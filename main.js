class ProductManager {

    #id
    #products

    constructor() {
        this.#id = 1;
        this.#products = [];
    }

    addProduct({ title, description, price, img, code, stock }) {

        const inStock  = this.inStock('code', code);

        if (inStock) {
            return `El codigo: ${code} ingresado ya existe`
        };

        if (!title || !description || !price || !img || !code || !stock) {
            return 'Todos los campos son obligatorias'
        };

        if (!inStock) {
            this.#products.push({
                id: this.#id++,
                title,
                description,
                price,
                img,
                code,
                stock
            })
            return "El producto fue añadido correctamente"
        };
    }

    getProducts() {
        return this.#products;
    }

    getProductById(id) {
        const product = this.#products.find(product => product.id === id);

        if (!product) {
            return `ID: ${id} not found`
        };

        return product;
    }

    inStock(key, value) {
        return this.#products.find(product => product[key] === value)
    };
}

const item = {
    title: 'Camiseta Argentina 2021/22',
    description: 'Camiseta de la selección Argentina',
    price: 22000,
    img: 'Sin imagen',
    code: '783ct',
    stock: 52
};

const product = new ProductManager();
console.log(product.getProducts());
console.log(product.addProduct(item));
console.log(product.getProducts());
console.log(product.addProduct(item));
console.log(product.getProductById(1));
console.log(product.getProductById(2));