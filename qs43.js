var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Unchanged Magicians: Start with your work from Exercise 42. 
//Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the
// original names and one array with the Great added to each magician’s name.
var magicianNames2 = ["sana", "faiza", "zakia", "hafsa"];
//making a copy
var magicianNamesCopy = __spreadArray([], magicianNames2, true);
function show_magicians(greet) {
    var withGreetings = "";
    for (var _i = 0, magicianNamesCopy_1 = magicianNamesCopy; _i < magicianNamesCopy_1.length; _i++) {
        var item = magicianNamesCopy_1[_i];
        withGreetings += "".concat(greet, " ").concat(item, "\n");
    }
    return withGreetings;
}
;
var myGreetings = show_magicians("hi");
var makeArray = myGreetings.split("\n");
console.log(makeArray);
console.log(magicianNames2);
