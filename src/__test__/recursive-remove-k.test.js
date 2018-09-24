'use strict';

const linkedLists = require('../lib/recursive-remove-k');

describe('Running the recursive-remove-k.js tests.', () => {
  test('creating a new node with Node class. Expecting an object.', () => {
    expect(typeof new linkedLists.newNode(10)).toBe('object');
  });
  test('Instantiate new linkedList class. Expecting an object.', () => {
    expect(typeof new linkedLists.make()).toBe('object');
  });
  test('Test program returns position 3 pointing to 10 instead of 12.', () => {
    const newLinkedList = new linkedLists.make();
    newLinkedList.autoPrePend(10);
    const testProgram = new linkedLists.find(newLinkedList, 3).recursive();
    expect(testProgram.next.next.next.value).toEqual(10);
  });
  test('Test program returns position 4 pointing to 8 instead of 10.', () => {
    const newLinkedList = new linkedLists.make();
    newLinkedList.autoPrePend(10);
    const testProgram = new linkedLists.find(newLinkedList, 4).recursive();
    expect(testProgram.next.next.next.next.value).toEqual(8);
  });
});
