//if else
let temperature = 25;

if (temperature > 30) {
    console.log("Panas");
} else if (temperature >= 15 && temperature <= 30) {
    console.log("Dingin");
} else {
    console.log("Sangat dingin");
}

//for loop
console.log("Hitung 1 - 5:");
for (let i = 1; i <= 5; i++) {
    console.log("Angka: " + i);
}

//while loop
console.log("Hitung mundur 3 - 1:");
let count = 3;
while (count > 0) {
    console.log("Countdown: " + count);
    count--;
}

//function
function nilaiMahasiswa(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    return "C";
}

let mahasiswa1 = nilaiMahasiswa(70);
console.log("Nilai Mahasiswa 1: " + mahasiswa1);