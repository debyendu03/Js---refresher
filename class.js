class car {
  constructor() {
    this.name = "benz";
  }
}

// extends
class printN extends car {
  constructor() {
    super();
  }
  pri = (x) => {
    return x + this.name;
  };
}

let yourCar = new printN();
console.log(yourCar.pri("my car name is "));

// next generation javascript
class nam {
  name = "Ricky";
}
class extend extends nam {
  p = () => {
    return this.name;
  };
}
let names = new extend();
console.log(names.p());
