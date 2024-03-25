"use strict";
//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//print a message indicating the number of people you are inviting to dinner.
let guestList$ = ["mehak", "zara", "rabia", "zahra", "komal"];
guestList$.map((items) => console.log(`hello ${items} you are invited to dinner`));
console.log(guestList$.length, "people are invited to dinner");
