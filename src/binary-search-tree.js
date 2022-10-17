const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root () {
    return (this.rootValue) ? this.rootValue : null;
  };

  add (data) {
    this.rootValue = addW(this.rootValue, data);

    function addW (node, data) {
      if (!node) {
        let newNode = { data: data, left: null, right: null }
        return newNode
      }
      if ( data === node.data) {
        return node;
      }
      if ( data < node.data) {
        node.left = addW (node.left, data)
      } else {
        node.right = addW (node.right, data)
      }
      return node
    }
  }

  has (data) {
    return search (this.rootValue, data);
    function search (node, data) {
      if (!node) {
        return false;
      }
      if ( data === node.data) {
        return true;
      }
      return (data < node.data) ? search (node.left, data) : search (node.right, data)
    }
  }

  find (data) {
    return findNode (this.rootValue, data);
    function findNode (node, data) {
      if (!node) {
        return null;
      }
      if ( data === node.data) {
        return node;
      }
      return (data < node.data) ? findNode (node.left, data) : findNode (node.right, data)
    }
  }

  remove (data) {
    this.rootValue = removeNode(this.rootValue, data);

    function removeNode (node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode (node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode (node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }


  }

  min () {
    if ( !this.root) {
      return;
    }
    let node = this.rootValue;
    while (node.left) {
      node = node.left;
    }
    return node.data
  }
  max () {
    if (!this.rootValue) {
      return;
    }
    let node = this.rootValue;
    while (node.right) {
      node = node.right;
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};