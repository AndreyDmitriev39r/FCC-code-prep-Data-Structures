/*THEORY
Like stacks, queues are a collection of elements. But unlike stacks, queues follow the FIFO (First-In First-Out) principle. Elements added to a queue are pushed to the tail, or the end, of the queue, and only the element at the front of the queue is allowed to be removed.

TASK
Write an enqueue method that pushes an element to the tail of the queue, a dequeue method that removes and returns the front element, a front method that lets us see the front element, a size method that shows the length, and an isEmpty method to check if the queue is empty.
*/

function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = function(element) {
    collection.push(element);
  }
  this.dequeue = function() {
    return collection.shift()
  }
  this.front = function() {
    return collection[0];
  }
  this.size = function() {
    return collection.length;
  }
  this.isEmpty = function() {
    return !collection.length
  }
  // Only change code above this line
}
