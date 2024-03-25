//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 //and you have space for only two guests.
 //Start with your program from Exercise 16.
 // Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, 
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, 
//so you have an empty list. Print your list to make sure you actually have an empty 
//list at the end of your program.
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
console.log("i can invite only two people");
Guestlist.map((items)=>console.log(`i am sorry ${items} i can't invite you.`));
Guestlist.pop()
console.log(Guestlist);
Guestlist.pop();
console.log(Guestlist);
Guestlist.pop();
console.log(Guestlist);
while(Guestlist.length >2){
    let removeGuest=Guestlist.pop()
    console.log(`sorry ${removeGuest} i can't invite you to dinner`);
}
Guestlist.map((item)=>console.log(`\n${item} you are still invited to dinner!`));
Guestlist.pop()
console.log(Guestlist);
Guestlist.pop()
console.log(Guestlist);