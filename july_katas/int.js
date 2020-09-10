


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(value){
    this.head = {
     value:  value,
      next:  null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value){
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(4)
myLinkedList.append(2)
myLinkedList.append(-1)

console.log(myLinkedList)