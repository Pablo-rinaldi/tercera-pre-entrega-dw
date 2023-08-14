//Se crea la clase product
class Product {
  constructor(id, marca, color, precio) {
    this.id = id;
    this.marca = marca;
    this.color = color;
    this.precio = precio;
  }
}

//se instancian los productos hardcodeados
const product1 = new Product(1, "FAD", "Amarillo", 10000);
const product2 = new Product(2, "FAD", "Fluo", 12000);
const product3 = new Product(3, "FAD", "Verde", 15000);
const product4 = new Product(4, "Mercuri", "Violeta", 20000);
const product5 = new Product(5, "Ene ene", "Cromado", 10000);
const product6 = new Product(6, "FAD", "Negro", 10000);

//se crea un Array llamado products
let products = [product1, product2, product3, product4, product5, product6];
