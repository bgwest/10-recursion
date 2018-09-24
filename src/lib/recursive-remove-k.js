'use strict';

const linkedLists = {};

linkedLists.newNode = class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

linkedLists.make = class LinkedList {
  constructor() {
    this.head = null;
    this.data = {
      node: '',
      length: 0,
    };
  }

  // adds new node to start of list -- 'insert at head'
  prePend(value) {
    const node = new linkedLists.newNode(value);
    node.next = this.head;
    this.head = node;
    this.data.length = this.data.length + 1;
    return this;
  }

  autoPrePend(value) {
    for (let i = 0; i < value; i++) {
      this.prePend(i * 2);
    }
  }
};

linkedLists.find = class CountList {
  constructor(node, k) {
    this.k = k;
    this.node = node;
    this.recursiveObject = {
      position: 0,
      currentnode: this.node.head,
    };
    this.currentNode = this.node.head;
  }

  recursive() {
    if (this.k <= 0) {
      // 0 is essentially a head replacement
      this.currentNode = this.currentNode.next;
      this.recursiveObject.currentnode = this.currentNode;
      return this.recursiveObject.currentnode;
    }

    if (this.recursiveObject.position === this.k - 1) {
      this.currentNode.next = this.currentNode.next.next;
      this.currentNode = this.node.head;
      this.recursiveObject.currentnode = this.currentNode;
      return this.recursiveObject.currentnode;
    }
    this.recursiveObject.position += 1;
    this.currentNode = this.currentNode.next;
    this.recursiveObject.currentnode = this.currentNode.next;
    return this.recursive(this.recursiveObject);
  }

  removeKth() {
    let pos; let currentNode;
    // destructured assignments
    [pos, currentNode] = [0, this.node.head];

    console.log(this.k);
    console.log(currentNode);

    while (currentNode.next) {
      console.log(this.k);

      if (this.k <= 0) {
        // 0 is essentially a head replacement
        currentNode = currentNode.next;
        console.log(currentNode);
        return currentNode;
      }

      if (pos === this.k - 1) {
        currentNode.next = currentNode.next.next;
        currentNode = this.node.head;
        // currentNode.head = currentNode.next;
        console.log(currentNode);
        return currentNode;
      }

      currentNode = currentNode.next;
      console.log(currentNode);
      pos += 1;
      console.log(pos);
    }
    return undefined;
  }

  kthFromEnd() {
    // replace from the tail (null) of list
    let currentNode = this.node.head;
    this.length = 0;
    // current.next will equal null when you are at the start of the list
    while (currentNode.next !== null) {
      this.length += 1;
      currentNode = currentNode.next;
    }
    currentNode = this.node.head;
    let stop = 0;
    const here = this.length - this.k;
    // ensure you cannot give number that makes you extend the list
    if (here <= -1) {
      return 'Exception';
    }
    while (stop !== here) {
      stop += 1;
      currentNode = currentNode.next;
    } // else
    return currentNode.value;
  }
};

//! Ben - uncomment for a testing example
const newLinkedList = new linkedLists.make();
newLinkedList.autoPrePend(10);
// const test = new linkedLists.find(newLinkedList, 4).removeKth();
// console.log(test);

const recursiveTest = new linkedLists.find(newLinkedList, 3).recursive();
console.log(recursiveTest);

module.exports = linkedLists;
