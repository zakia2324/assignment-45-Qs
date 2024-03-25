//more Guests: You just found a bigger dinner table, 
//so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15.
 //Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. •
 //Use append() to add one new guest to the end of your list. • Print a new set of invitation messages,
 //one for each person in your list.
 let Guestlist:string[]=["mehak","zara","rabia","zahra","komal"]
Guestlist.map((items)=>console.log(`hello ${items} you are invited to dinner`));
let CanNotAttend: string ="komal";
console.log(`${CanNotAttend} can not make it,for dinner`);
let Newguest:string="sana";
Guestlist[Guestlist.indexOf(CanNotAttend)]=Newguest;
console.log(Guestlist);
Guestlist.map((items)=>console.log(`hello ${items} you are invited to dinner`));
console.log("welcome to all we found a bigger dinner table!");
Guestlist.unshift("sonia");
console.log(Guestlist);
let middleGuest:string="aqsa"
let middleIndex=Guestlist.length/2
Guestlist.splice(middleIndex,0,middleGuest);
console.log(Guestlist);
Guestlist.push("maida");
console.log(Guestlist);
Guestlist.map((items)=>console.log(`\nDear ${items} you are invited to dinner!`));
