let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passport1 = Object.assign({}, passport);
passport1.name = 'Ivan';

console.log(passport.name);
console.log(passport1.name);