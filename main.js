//Creo la clase para gestionar los productos
class ProductManager {
    constructor() {
        this.products = []; //elemento products que debe ser un array vacío, desde su constructor
    }

    //creo un id automático con "static" que luego se va a ir incrementando 
    //Variable estatica
    static id = 0;

    //Método que agrega un producto al arreglo de productos
    addProduct(title, description, price, thumbnail, code, stock) {
        //Verifico que no se repita el campo "code"
        const ProductExist = this.products.find((newProduct) => newProduct.code === code);

        if (ProductExist) {
            console.log(`El producto ${title} tiene un ERROR, el código ${code} esta repetido con el ${ProductExist.title}`);
            return;
        }

        //Verifico que todos los campos sean Obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log(`Todos los campos son obligatorios en el producto ${title}`);
        } else {
            const newProduct = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            };

            ProductManager.id++; //Incremento el id antes de agregar un producto

            this.products.push({id:ProductManager.id,...newProduct });

            console.log(`El producto ${newProduct.title} fue agregado correctamente`);
        }
    }

    // Método que devuelve el array con todos los productos creados hasta ese momento
    getProduct() {
        return this.products;
    }

    // Método que busca en el arreglo el producto que coincide con el id
    getProductById(id) {
        const ProductId = this.products.find((newProduct) => newProduct.id === id);

        if (!ProductId) {
            console.log(`"Not Found" El id ${id} de producto no existe`);
        } else {
            console.log(`El producto con el id ${id} fue encontrado`);
            return ProductId;
        }
    }
}

//TESTING
const newProduct = new ProductManager();

//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(newProduct.getProduct());

newProduct.addProduct("producto prueba1", "Este es un producto prueba1", 200, "Sin imagen", "abc123", 25);
console.log(newProduct.getProduct());
newProduct.addProduct("producto prueba2", "Este es un producto prueba2", 200, "Sin imagen", "abc123", 25);
newProduct.addProduct("producto prueba3", "Este es un producto prueba3", 300, "abc124", 20);
newProduct.addProduct("producto prueba4", "Este es un producto prueba4", 100, "Sin imagen", "abc125", 30);
newProduct.addProduct("producto prueba5", "Este es un producto prueba5", 500, "Sin imagen", "abc126", 20);

console.log(newProduct.getProduct());

newProduct.getProductById(1)
newProduct.getProductById(10)



