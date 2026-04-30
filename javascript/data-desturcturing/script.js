// Step 2. Practice Array Destructuring
console.log("--- Step 2: Array Destructuring ---");
const colors = ["Red", "Green", "Blue"];

//Basic destructuring
const [primary, secondary] = colors;
console.log(`Basic: ${primary}, ${secondary}`);

//Skipping elements 
const [firstColor, , thirdColor] = colors;
console.log(`Skipped: ${firstColor}, ${thirdColor}`);


// Step 3. Practice Object Destructuring
console.log("\n--- Step 3: Object Destructuring ---");
const user = {
    firstName: "Alex",
    lastName: "Smith",
    age: 28
};

// extract properties from objects and assign them to variables efficiently.
const { firstName, age } = user;

console.log(`User: ${firstName} is ${age} years old.`); 



//Step 4. Use Advanced Destructuring
console.log("\n--- Step 4: Advanced Destructuring ---");

const employee = {
    id: 101,
    details: {
        department: "Engineering",
        title: "Developer"
    }
};

// Nested destructuring
const { details: { department, title } } = employee;
console.log(`Nested: Works in ${department} as a ${title}`); 

// Default values
const { role = "Unassigned" } = employee;
console.log(`Role: ${role}`); 

// Variable renaming
const { id: employeeId } = employee;
console.log(`Employee ID: ${employeeId}`); // Output: 101


//Step 5. Use Destructuring in Functions
console.log("\n--- Step 5: Destructuring in Functions ---");

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8
};


//  Destructuring directly in the parameters:
function printDetailsDestructured({ title, year, rating }) {
    console.log(`Movie: ${title} (${year}) - Rating: ${rating}/10`);
}
printDetailsDestructured(movie); 