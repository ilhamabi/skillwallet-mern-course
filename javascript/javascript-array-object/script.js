//2.1 Create Arrays
const fruits = ["Pisang", "Jeruk", "Mangga"];

//2.2 Use Array Methods
fruits.push("Jambu");
fruits.unshift("Alpukat");
fruits.pop();
fruits.shift();   

console.log("Daftar buah:", fruits);
console.log("Jumlah buah:", fruits.length);

//3.1 Create Objects
const user = {
    name: "Ilham abi",
    age: 25,
    isAdmin: false
};

//3.2 Access Object Properties
user.age = 20;
user["isAdmin"] = true;

console.log("Nama pengguna:", user.name);
console.log("Umur pengguna:", user.age);
console.log("Admin:", user.isAdmin);


//4.1 Apply Array Processing Methods
const prices = [100, 200, 300, 400];

console.log("Daftar Harga Satuan:");
prices.forEach((price, index) => {
    console.log(`Item ke-${index + 1}: Rp${price}`);
});

const pricesWithTax = prices.map(price => (price * 0.11) + price);
console.log("Harga Setelah Pajak:", pricesWithTax);

const expensive = prices.filter(price => price > 250);
console.log("Item Premium (> 250):", expensive);

//4.2 Combine Objects and Arrays
const inventory = [
    { id: 1, item: "Laptop", stock: 5 },
    { id: 2, item: "Mouse", stock: 12 },
    { id: 3, item: "Keyboard", stock: 0 }
];

const inStockItems = inventory.filter(product => product.stock > 0);
console.log("Daftar barang tersedia:", inStockItems);