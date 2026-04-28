const namaApp = "Rewrite ES5 to ES6";
let count = 0;

// --- STEP 3 & 5: Arrow Function & Default Parameter ---
const greeting = (name = "User") => {
  
  // --- STEP 4: Template Literals (Pakai backtick ` di kiri angka 1) ---
  console.log(`Selamat datang di ${namaApp}, ${name}!`);
};

// --- STEP 5: Spread Operator & Destructuring ---
const angka = [10, 20, 30];
const tambahAngka = (a, b, c) => a + b + c;

// Memasukkan isi array ke parameter fungsi (Spread)
const total = tambahAngka(...angka);

// --- EKSEKUSI ---
greeting("Budi"); // Output: Selamat datang di My Simple App, Budi!
greeting();        // Output: Selamat datang di My Simple App, User!


console.log(`Total hitungan: ${total}`);