// SANG PENGATUR PROGRAM

// FLOW CONTROLS
const number = 100;
console.log(number);
// Komputer menjalankan baris pertama yaitu menginisialisasi number → menjalankan baris selanjutnya mencetak nilai variabel number di console.

// ----------------------------------------------------------------------

// CONDITIONAL
// IF STATEMENT
const gajian = true;

console.log('Berjalan-jalan di mal');
if (gajian) {
  console.log('Makan di restoran mal');
}
console.log('Pulang ke rumah');

// Output: (jika true)
/* Berjalan-jalan di mal
Makan di restoran mal
Pulang ke rumah
*/
// Output: (jika false)
/* Berjalan-jalan di mal
Pulang ke rumah
*/

const score = 79;

if (score >= 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}

const score_fix = 85;

if (score_fix > 90) {
  console.log('Selamat, Anda mendapatkan nilai A!');
} else if (score_fix > 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}

    // Ternary Operator
    const price = 100000;
    const isMember = true;
    const discount = isMember ? 0.1 : 0;

    console.log(`Anda mendapatkan discount sebesar ${discount * price}`);

// SWITCH CASE
const fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('I am a banana.');
    break;
  case 'apple':
    console.log('I am an apple.');
    break;
  case 'orange':
    console.log('I am an orange.');
    break;
  case 'strawberry':
    console.log('I am a strawberry.');
    break;
  default:
    console.log('I am not a fruit. I am a programmer.');
}

    // Jika tidak menggunakan Break
    const total = 2;

    switch (total) {
    case 1:
    console.log('Ini 1');
    break;
    case 2:
    console.log('Ini 2');
    case 3:
    console.log('Ini 3');
    break;
    default:
    console.log('Ini default');
    }

// PERBEDAAN IF & SWITCH
const day_if = new Date().getDay();

if (day_if === 0) {
  console.log('Minggu');
} else if (day_if === 1) {
  console.log('Senin');
} else if (day_if === 2) {
  console.log('Selasa');
} else if (day_if === 3) {
  console.log('Rabu');
} else if (day_if === 4) {
  console.log('Kamis');
} else if (day_if === 5) {
  console.log('Jumat');
} else if (day_if === 6) {
  console.log('Sabtu');
} else {
  console.log('Hari tidak valid');
}

const day_switch = new Date().getDay();

switch (day_switch) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  default:
    console.log('Hari tidak valid');
}

// ----------------------------------------------------------------------

// LOOPING
// FOR
    // 1. For Loop
    for (let i = 0; i < 5; i++) {
        console.log(`Angka ke-${i} adalah ${i}`);
    }

    // 2. For In
    const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

    for (const property in person) {
    console.log(`${property} bernilai ${person[property]}`);
    }

    // 3. For Of
    const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

    for (const item of names) {
    console.log(item);
    }

// WHILE
let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
}

// Contoh Infinity Looping
/* let a = 0;
 *
 * while (a < 5) {
 *   console.log(`Angka ke-${a} adalah ${a}.`);
 * } 
 * 
 */

// DO-WHILE
let d = 0;

do {
  console.log(`Angka ke-${d} adalah ${d}.`);
  d++;
} while (d < 5);

// CONTROL STATEMENT
  // 1. Break
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
  
    console.log(i);
  }
  // Bisa juga digunakan di conditional (switch case)

  // 2. Continue
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
  }

// ----------------------------------------------------------------------

// ERROR HANDLING
// THROWING ERROR
/* const error = new Error('Terjadi error');
console.error(error);
 */

/* const harga = 100;
const bayar = 80;

if (bayar < harga) {
  throw new Error('Pembayaran kurang');
}
 */

// CATCHING ERROR
  // Try Catch
  try {
    console.log('Memulai program');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena tidak ada error, blok ini akan diabaikan');
  }

  try {
    console.log('Memulai program');
    throw new Error('Error: Program berhenti');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena ada error, blok ini akan dieksekusi');
  }

  // Finally
  try {
    console.log('Ini try block');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
  }

  try {
    console.log('Ini try block');
    throw new Error('Error: Program berhenti');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
  }

// ----------------------------------------------------------------------

// IMPLEMENTASI FLOW CONTROL
function checkGrades(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (typeof grades[i] !== 'number') {
      throw new Error('Invalid input. Please provide an array of numbers.');
    }

    const grade = grades[i];
    let predicate;

    if (grade >= 90) {
      predicate = 'A';
    } else if (grade >= 80) {
      predicate = 'B';
    } else if (grade >= 70) {
      predicate = 'C';
    } else if (grade >= 60) {
      predicate = 'D';
    } else {
      predicate = 'E';
    }

    console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
  }
}

try {
  const studentGrades = [95, 85, 65, 80, 70];
  checkGrades(studentGrades);
} catch (e) {
  console.error(e);
}

// ----------------------------------------------------------------------

// KUIZ
function categorizeNumber(input) {
  // Check if the input is a number
  if (typeof input !== 'number') {
    throw new Error("Input harus berupa bilangan bulat");
  }
  
  // Check for zero
  if (input === 0) {
    return "Nol";
  }
  
  // Check for negative numbers
  if (input < 0) {
    return "Negatif";
  }
  
  // Check for prime numbers
  if (isPrime(input)) {
    return "Prima";
  }
  
  // Check for even or odd
  if (input % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

// Helper function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0));  // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber(15, 12, 17, 0, -5); // This line will throw an error
} catch (error) {
  console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}
