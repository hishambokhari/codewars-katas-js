class Node {
  constructor(data, next = null ) {
    this.data = data;
    this.next = next;
  }
}

const n1 = new Node(100);
console.log(n1);

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  //Insert last node

  //Insert at index

  // Get at index

  // Remove at index

  //Clear list

  // Print list data

}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);

console.log(ll)