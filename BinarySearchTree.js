class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) this.left = new BST(value);
      else this.left.insert(value);
    } else if (value > this.value) {
      if (!this.right) this.right = new BST(value);
      else this.right.insert(value);
    }
  }

  contains(value) {
    if (value === this.value) return true;
    else if (value < this.value) {
      if (!this.left) return false;
      else return this.left.contains(value);
    } else if (value > this.value) {
      if (!this.right) return false;
      else return this.right.contains(value);
    }
  }

  depthFirstTraversal(iteratorFunc, order) {
    if (order === "pre-order") iteratorFunc(this.value);
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === "in-order") iteratorFunc(this.value);
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if (order === "post-order") iteratorFunc(this.value);
  }

  breadthFirstTraversal(interatorFunc) {
    let queue = [this];
    while (queue.length) {
      let treeNode = queue.shift();
      interatorFunc(treeNode);
      if (treeNode.left) queue.push(treeNode.left);
      if (treeNode.right) queue.push(treeNode.right);
    }
  }

  getMinVal() {
    if (!this.left) return this.value;
    let arr = [];
    const pushItem = (currentNode) => {
      if (currentNode.left) pushItem(currentNode.left);
      arr.push(currentNode.value);
      if (currentNode.right) pushItem(currentNode.right);
    };

    pushItem(this);
    return Math.min.apply(Math, arr);
  }

  getMaxVal() {
    if (!this.right) return this.value;
    let arr = [];
    const pushItem = (currentNode) => {
      if (currentNode.left) pushItem(currentNode.left);
      arr.push(currentNode.value);
      if (currentNode.right) pushItem(currentNode.right);
    };

    pushItem(this);
    return Math.max.apply(Math, arr);
  }

  // O (log n) - logarithmic time
  getMinimumValueLogarithmicTime() {
    if (!this.left) return this.value;
    else return this.left.getMinimumValueLogarithmicTime();
  }

  // O (log n) - logarithmic time
  getMaximumValueLogarithmicTime() {
    if (!this.right) return this.value;
    else return this.right.getMaximumValueLogarithmicTime();
  }
}

let bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

const log = (value) => {
  console.log(value);
};
// bst.depthFirstTraversal(log, "post-order");
console.log(bst.getMinVal());
console.log(bst.getMinVal2());
console.log(bst.getMaxVal());
