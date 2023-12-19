let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried1 = structuredClone(passportMarried);
passportMarried.married = true;

console.log(passportMarried);
console.log(passportMarried1);