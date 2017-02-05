const Node = require('./node');

class LinkedList {
    constructor() {
	this.length = 0;
	this._head = null;
	this._tail = null;
    }

    append(data) {
	let node = new Node(data);
		
	if(this.length){
	   this._tail.next = node;
	   node.prev = this._tail;
	   this._tail = node;
	}else {
	   this._head = node;
	   this._tail = node;
	}
		
        this.length++;
	return this;
    }

    head() {
	if(this._head != null){
	   return this._head.data;	
	}else{
	   return null;
	}
		
    }

    tail() {
	if(this._tail != null){
	   return this._tail.data;
	}else {
	   return null;
	}
		
    }

    at(index) {
	let currentNode = this._head,
	count = 0;
	while (count < index){
	   currentNode = currentNode.next;
		count++;
	}
	return currentNode.data;
    }

    insertAt(index, data) {
	let node = new Node(data)
	let currentNode = this._head,
	count = 0;
	while (count < index){
	   currentNode = currentNode.next;
		count++;
	}
		
	if(!currentNode){
	   this.append(data);
		return this;
	}
	else if(currentNode === this._head){
	   node.next = currentNode;
	   currentNode.prev = node;
	   this._head = node;
	}
	else {
	   node.prev = currentNode.prev;
	   node.next = currentNode;
	   currentNode.prev.next = node;
	   currentNode.prev = node;
	}
	this.length++;
	return this;
    }

    isEmpty() {
	return (this.length == 0)
    }

    clear() {
	this.length = 0;
	this._head = null;
	this._tail = null;
	return this;
    }

    deleteAt(index) {
	let currentNode = this._head,
	count = 0;
	while (count < index){
	   currentNode = currentNode.next;
		count++;
	}
	if(currentNode === this._head){
	   if(currentNode.next){
		   currentNode.next.prev = null;
		}else{
		   this._tail = null;
		}
	   this._head = currentNode.next;
	}
	else if(currentNode === this._tail){
		   currentNode.prev.next = null;
		   this._tail = currentNode.prev;
	}
	else {
	   currentNode.prev.next = currentNode.next;
	   currentNode.next.prev = currentNode.prev;
	}
	   this.length --;
	   return this;
    }

    reverse() {
	let currentNode = this._tail;
	while(currentNode){
	   let temp = currentNode.prev;
	   currentNode.prev = currentNode.next;
	   currentNode.next = temp;
	   currentNode = temp;
	}
	let temp = this._head;
	this._head = this._tail;
	this._tail = temp;
	return this;
    }

    indexOf(data) {
	let currentNode = this._head;
	let count = 0;
	while (currentNode){
	   if(currentNode.data === data){
		return count;
	   }
	   currentNode = currentNode.next;
		count++;
	}
	return -1;
    }
}

module.exports = LinkedList;
