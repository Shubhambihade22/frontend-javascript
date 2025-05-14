/// Dates ///


// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let specificDate = new Date(2025, 0, 25, 5, 3);

// let mmddyyDate = new Date("01-01-2025");
// let Date = new Date("2025-01-24");
// console.log(myCreatedDate.toLocaleString());
// console.log(mmddyyDate.toLocaleString());

// console.log(specificDate.toDateString());
// console.log(specificDate.toLocaleString());

// let myTimeStamp = Date.now();

// console.log(mmddyyDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));
