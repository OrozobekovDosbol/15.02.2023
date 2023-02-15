for (let i = 1; i <= 10; i++) {
  console.log(i)
}

function number(a, b) {
  for (let i = a; i <= b; i++) {
    console.log(i)
  }
}

number(7, 9)



// for (let i = 0; i <= sum.length; )

let sum = [12, 42, 63, 56, 122, 17, 117, 25, 645, 722, 964, 2, 3];

for (let i = 0; i < sum.length; i++)
{
  if ((sum[i] % 2) === 0)
  {
  	console.log(sum[i]);
  }
}




let unique = [];
let example1 = [1, 2, 3, 4, 6, 6, 7, 5, 9];
let example2 = [0, 4, 3, 4, 5, 2, 7, 3, 8];

for(let i = 0; i < example1.length; i++){
  if(example2.includes(example1[i])) {
    unique.push(example1[i]);
  }
}
console.log(unique)


for(let i = 0; i < example1.length; i++){
  if(example2.includes(example1[i]) === false) {
    unique.push(example1[i]);
  }
}
console.log(unique)

let Dosbol = {
  name: "Dosbol",
  surname: "Orozobekov",
  age: 15,
  placeOfResidence: "Karakol",
  favouriteBooks: ["Gunslinger", "Harry Potter"],
}

Dosbol.name = "Bekbol";

Dosbol.SayHello = function() {
  console.log("Hello " + this.surname);
}

console.log(Dosbol.name)
Dosbol.SayHello();

let cals = {
  number: 0,
  add: function(num) {
    this.number = this.number + num;
  },

  sub: function(num) {
    this.number = this.number - num;
  },
  clear: function(num) {
    this.number = 0;
  },
  togglePositive: function() {
    this.number = -this.number;
  },
  show: function() {
    console.log(this.number);
  }
}

cals.sub(70);
console.log(cals.number);
cals.togglePositive(20);
console.log(cals.number);

cals.show();
cals.show();
cals.show();

// cals.add(5);
// console.log(cals.number);
// cals.add(10);

// console.log(cals.number);
// cals.add(20);
// console.log(cals.number);
// cals.add(5);
// console.log(cals.number);
// cals.add(15);
// console.log(cals.number);
