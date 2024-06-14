let Box = {
 Reciever: 'Priya',   
 Length: 20,
 Breadth: 12,
}
// Created an Object

console.log(Box);
// Printed the Box Object

Box.Reciever = 'Shreya';
// dot notation method

Box['Length'] = 40;
// bracket method

let PlaceholderInNameOnly = 'Breadth';
Box[PlaceholderInNameOnly] = 5;

console.log(Box);
