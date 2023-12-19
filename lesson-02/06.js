let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddress1 = structuredClone(passportWithAddress);
passportWithAddress1.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city);
console.log(passportWithAddress1.address.city);

