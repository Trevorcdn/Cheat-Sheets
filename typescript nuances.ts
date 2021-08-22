// Basic Types
let id: number = 5
let company: string = 'Hello World!'
let isPublished: boolean = true
let x: any = 'Hello' //Any means that the variable can be casted to any data types

let ids: number[] = [1, 2, 3, 4, 5] //An array of just numbers
let arr: any[] = [1, true, 'Hello'] //An array that can hold different data types

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]
// Tuple Array
let employees: [number, string][] //An array where each index holds an array of number->strings
employees = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill'],
]

// Union
let pid: string | number //This means that the pid can either be a string or a number
pid = '22'

// Enum - similar to the one in c and c++
//How to call them: console.log(Direction1.Left) will console log the number 3
enum Direction1 {
  Up = 1,
  Down, //down = 2
  Left, //left = 3
  Right, //right = 4
}

//How to call them: console.log(Direction1.Left) will console log the string 'Left'
enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}


// Objects - similar to class/struct
type User = {
  id: number
  name: string
}
//How to initialize the Objects. user is of type User where id is set to 1 and name is set to 'John'
const user: User = {
  id: 1,
  name: 'John',
}

/* Type Assertion - Telling compilier that we want to treat an entity as a different type
In this case, we know cid is an any type but we tell the compilier that we should treat
cid as a number which is assigned to a var called customerId.
*/
let cid: any = 1
let customerId = cid as number //Other syntaxs: let customerId = <number>cid

// Functions - addNum takes in a number x and a number y as an argument and returns a number
// addNum(...):number means the function returns a number
// in a c++ -like syntax: number addNum(number x, number y){...}
function addNum(x: number, y: number): number {
  return x + y
}

// Void - a function that doesn't return anything
function log(message: string | number): void {
  console.log(message) //message can be either a string or a number
}

// Interfaces - a custom type/class
interface UserInterface {
  readonly id: number //After initilizing, it can no longer be re-asigned
  name: string
  age?: number //?: means the variable can be optional 
}

//Note: You CANNOT use interfaces with unions or primitives: interface Point= number | string is not allowed
const user1: UserInterface = {
  id: 1,
  name: 'John',
}

interface MathFunc {
  (x: number, y: number): number //Takes in two arguments(which are numbers) and return a number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes - data types are PUBLIC by default. You will need private or protected for securities
//Protected - data can be access in the class its called or a class that extents the parent class
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) { //runs whenever an instance of a class is created
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`; //Backticks allow you to put variables within a string
  }
}

const brad = new Person(1, 'Brad Traversy') //creating an instance of Person class 
const mike = new Person(2, 'Mike Jordan')

// Subclasses - child class(Employee) inherits from the parent class(Person)
class Employee extends Person { 
  private position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name); //Calls the constructor from the parent class
    this.position = position;
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')
console.log(emp.register()) //Should output: "Shawn is now registered"
//emp can use register() method because it inherits the method from its parent


// Generics - use to build reusuable component where T can be used as any data type
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4]) //Use function with numbers and make a number array
let strArray = getArray<string>(['brad', 'John', 'Jill']) //Use function with string and make a string array

strArray.push(1) // Throws error cause 1 is not a string