// Pick a penguin from Wikipedia's List of Fictional Penguins and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).
var penguin = {
    character: "captain cook",
    origin: "Mr. popper",
    author: "Richard and florence",
    notes: "Children's book",
}
// Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"
console.log("Hello, I'm a penguin and my name is" + penguin.character);
// Write another line of code that adds a new property to your penguin called canFly and set it to false. (Note: Don't modify your penguin-creation code that you wrote above! Do this step in a separate line of code.)
penguin.canFly = false;
// Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?" (Note: Again, don't modify your previous code! Do this step by writing a new line of code.)
penguin.chirp = function(){
    console.log("CHIRP CHIRP! Is this what penguins sound like?");
}
// Add another method to your penguin called sayHello that prints to the console the same message from step 20 above. But this time, be sure to use the mystical, 
//magical, all-powerful this keyword to access your penguin's name, so that way the sayHello method could potentially work for any penguin that has a name!
penguin.sayHello = function(){
    console.log("Hello, I'm a penguin and my name is" + this.character);
}
// Next, call your penguin's sayHello() method and make sure that it works! (Hint: if you need an example of what it looks like when you call a method of an object, look at console.log() -- that's how you call the log() method of the console object!)
penguin.sayHello();
// Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.
penguin.character = "Penguin McPenguinFace";
penguin.sayHello()
// Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
penguin.fly = function(){
    if (canFly){
        return console.log("I can fly");
    } 
    return console.log("I can't fly");
};
//Hint: Remember to use the very handy this keyword to access the object that your new method is currently attached to!

// Call your penguin's fly() method and make sure it works!
penguin.fly();
// Change the canFly property to true -- again, without modifying any of your previous code!
penguin.canFly = true;
// Now call your penguin's fly() method again and make sure it works as expected!
penguin.fly();
// Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)
for (prop in penguin){
    console.log(prop)
}
// Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to 
//access the values this way, instead of dot notation!)
for (prop in penguin){
    console.log(penguin[prop]..........)
}