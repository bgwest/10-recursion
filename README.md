coding-assignment-10: recursion
===
[![Build Status](https://travis-ci.com/bgwest/10-recursion.svg?branch=master)](https://travis-ci.com/bgwest/10-recursion)

### Summary

* .recursive() - create recursive kth node removal function to work with a singly linked list

### Running

Example:
```
const newLinkedList = new linkedLists.make();
newLinkedList.autoPrePend(10);
const testProgram = new linkedLists.find(newLinkedList, 3).recursive();
console.log(testProgram); // head->18[next], 16[next], 14[next], 10[next], 8[next], 6[next], 4[next], 2[next], 0[next]->null
```

### Tests Performed with Jest
- creating a new node with Node class. Expecting an object.
- Instantiate new linkedList class. Expecting an object.
- Test program returns position 3 pointing to 10 instead of 12.
- Test program returns position 4 pointing to 8 instead of 10.

### Installing

To use this in your code:

- git clone repo 
- npm install 
- require('../src/lib/recursive-remove-k.js');

## Built With

* Node
* Eslint
* jest

## Contributing

Please feel free to contribute. Master branch auto merge locked for approval.

## Versioning

*n/a*

## Authors

![CF](http://i.imgur.com/7v5ASc8.png) **Benjamin West** 

## License

*none*
