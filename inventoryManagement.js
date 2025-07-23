//Products Array//
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Console Log Details//
function logFirstProduct() {
  console.log(products[0]);
}

//Add a product function//
function addProduct(productName) {
  products.push(productName);
}

addProduct("Keyboard");
console.log(products);


// Update product name function//
function updateProductName(index, newName) {
  products[index] = newName;
}

updateProductName(1, "Smartphone");
console.log(products);

// Remove the last product function//
function removeLastProduct() {
  products.pop();
}

removeLastProduct();

console.log(products)


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
