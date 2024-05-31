// Creating a function that prints the value of this

function printThis() { 
  console.log(this);
}

printThis();

 
 // Constructor Function

function Helicopter (speed) { 
  this.speed = speed;
}

const h = new Helicopter(200);
console.log(h.speed);



// 'This' with methods in Objects and classes

let rallyCar = { 
  type: 'JDM',
  power: '460hp',

 print() { 
  console.log(this);
 }
}

rallyCar.print();



//this in class function
class Aircraft {
    make = '';
    capacity = 0;

    constructor(make, capacity) {
        this.make = make;
        this.capacity = capacity;
        console.log(this);
    }

    print() {
        console.log(this);
    }
}

let boeing747 = new Aircraft('Boeing 747', 450);
boeing747.print();



// ARROW

let boeing747 = {
    make: 'Boeing 747',
    capacity: 450,

    print: () => {
        console.log(this);
    }
}

boeing747.print();
