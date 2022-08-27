/*THEORY
A Priority Queue is a special type of Queue in which items may have additional information which specifies their priority. This could be simply represented with an integer. Item priority will override placement order in determining the sequence items are dequeued. If an item with a higher priority is enqueued after items with lower priority, the higher priority item will be dequeued before all the others.

TASK
You will need to add an enqueue method for adding items with a priority, a dequeue method for removing and returning items, a size method to return the number of items in the queue, a front method to return the element at the front of the queue, and finally an isEmpty method that will return true if the queue is empty or false if it is not.

The enqueue should accept items with the format shown above (['human', 1]) where 1 represents the priority. dequeue and front should return only the item's name, not its priority.


!!!!!
SEE implementation with the heap in the guide!!!!
*/

/*To double-check:
the usual queue was with var keyword

here it was with this keyword
maybe this explains general sytax diff
*/

function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function(element) {
    this.collection.push(element)
    this.collection.sort((a, b) => a[1]- b[1]);
  }
  this.dequeue = function() {
    return this.collection.shift()[0];
  }
  this.size = function() {
    return this.collection.length;
  }
  this.front = function() {
    return this.collection[0][0];
  }
  this.isEmpty = function() {
    return !this.collection.length;
  }
  // Only change code above this line
}