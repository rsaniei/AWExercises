
//Exercise 1
//Write class Circle.
//make the property pi and method calculateArea accessible using the class name and not dot notation.



//Exercise 2
//Considering class Student, write the interface Student.

class Student implements Student {

  name: string;
  id: number;
  age: number;
  email?: string;
  private password: string;
  studentType: string;
  isRegistered: boolean;
  registrationDate: Date;

  constructor (name:string, ID: number){
    this.name = name;
    this.id = ID;
  }

  set setPassword(password: string){
    this.password = password;
  }
  get getPassword(): string{
    return this.password;
  }
  getInformation(): string {
    return `${this.name} has ${this.age} years old.`;
  }
  getRegistrationData(stype?): object{
    if (stype)
      return {"status": this.isRegistered, "Date":this.registrationDate};
    return {};
  }

}


//Exercise 3
//create a class called RequestBuilder. This class receives url, API method and Data
// and send an HTTP request. Data is optional

//let requestBuilder = new RequestBuilder("https://openweather.org", "get");
//make the class as secure as possible.




//Exercise 4
//Create an interface called Animal. This interface has 2 method signatures called "eat" and "sleep".
//eat function prints the food of the animal, and sleep prints number of hours it sleeps.
//Write class Cat which implements Animal.






//Exercise 5

//Create an interface for AW courses. Each course has title, description, instructor, start date,
//end date, and names of students.
//Then define a class called AWCourse which implements the interface


// When you mark a class' constructor as `private`, that means you can't instantiate or
//extend the class. What happens when you mark it as `protected` instead?
//Play around with this in your code editor, and see if you can figure it out.





// Exercise 6
//Extend the Factory Pattern implementation developed below to make it
// safer, at the expense of breaking the abstraction a bit.

// Update the implementation so that a consumer knows at compile time that calling
// Shoe.create('boot') returns a Boot, and Shoe.create('balletFlat') returns a
// BalletFlat (rather than both returning a Shoe). (type of returned value is known)
// Hint: Think back to [function-overloads].

type Shoe = {
  purpose: string
}

class BalletFlat implements Shoe {
  purpose = 'dancing'
}

class Boot implements Shoe {
  purpose = 'woodcutting'
}

class Sneaker implements Shoe {
  purpose = 'walking'
}

let Shoe = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
      switch (type) {
        case 'balletFlat': return new BalletFlat
        case 'boot': return new Boot
        case 'sneaker': return new Sneaker
      } }
    }

// Shoe.create('balletFlat') // BalletFlat
// Shoe.create('boot') // Boot
// Shoe.create('sneaker') // Sneaker

//Exercise 6
//Write the parent class "Shape" with a method called getArea.
//Define two child classed for it: "Rectangle" and "Circle".
//Re-write getArea for each child class
