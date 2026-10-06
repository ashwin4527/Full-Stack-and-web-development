const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a student name: ", function(name) {

    const students = ["Alice", "Bob", "Charlie"];

    console.log("\nStudent List:");

    for (let i = 0; i < students.length; i++) {
        console.log(students[i]);
    }

    rl.close();
});

