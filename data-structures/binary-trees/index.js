class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Método para inserir um novo nó na árvore
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Método auxiliar para inserir um nó na posição correta
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Métodos de travessia da árvore (in-order, pre-order, post-order)
  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  preOrder(node = this.root) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node = this.root) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

  // Método para buscar um nó na árvore
  search(node = this.root, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }
}

const tree = new BinaryTree();

// Inserindo nós na árvore
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(4);
tree.insert(7);
tree.insert(14);
tree.insert(13);

// Travessia in-order
console.log('In-order traversal:');
tree.inOrder();

// Travessia pre-order
console.log('Pre-order traversal:');
tree.preOrder();

// Travessia post-order
console.log('Post-order traversal:');
tree.postOrder();

// Buscando um nó
const foundNode = tree.search(tree.root, 6);
if (foundNode !== null) {
  console.log(`Node with data ${foundNode.data} found`);
} else {
  console.log('Node not found');
}
