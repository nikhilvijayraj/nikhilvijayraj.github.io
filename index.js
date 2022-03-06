let person = {
name_ : "Person",
age: 24,
greet: function(){

console.log(this.name_+ " of age " + this.age + " is saying hello!");

}
};

function greetMe(person)
{

person.greet();

}

person.name_="Nikhil";

greetMe(person);