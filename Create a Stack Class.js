/*THEORY
Although you can use arrays to create stacks,
sometimes it is best to limit the amount of control we have with our stacks.

TASK

Write a push method that pushes an element to the top of the stack,

a pop method that removes and returns the element on the top of the stack,

a peek method that looks at the top element in the stack,

an isEmpty method that checks if the stack is empty,

and a clear method that removes all elements from the stack.

Normally stacks don't have this, but we've added a print helper method that console logs the collection.

HINT
see alternative approach with class keyword in guides
*/

function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.push = function(element) {
    collection.push(element)
  }
  this.pop = function() {
    return collection.pop();
  }
  this.peek = function() {
    return collection[collection.length - 1];
  }
  this.isEmpty = function() {
    return collection.length === 0 ? true : false;
  }
  this.clear = function() {
    collection = [];
  }
  // Only change code above this line
}

let myStack = new Stack();

myStack.push('zcsadwad');
myStack.print();//[ 'zcsadwad' ]
let a = myStack.pop()
myStack.print()//[]
console.log(a)//zcsadwad