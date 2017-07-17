// Given a Tree (Binary), the following program allows us to  traverse it, depth first

function Node(data) {
    this.data = data;
    this.parent = null;
    this.leftn = new Node;
    this.right = new Node;
    this.children = [];
}
 
function Tree(data) {
    var node = new Node(data);
    this._root = node;
}
 

Tree.prototype.preOrderTraversal = function () {
    if (this._root == null) {
        return null;
    } else {
        var result = new Array();
        function preOrder(nodeRef) {
            result.push(nodeRef.data);
            nodeRef.left && preOrder(nodeRef.left);
            nodeRef.right && preOrder(nodeRef.right);
        };
        preOrder(this._root);
        return result;
    };
}

Tree.prototype.traverseDF = function(callback) {
 
    // Recursively defined and invoked function
    (function walk(nodeRef) {
        // step 2
        for (var i = 0, length = nodeRef.children.length; i < length; i++) {
            // step 3
            walk(nodeRef.children[i]);
        }
 
        // step 4
        callback(nodeRef);
 
        // step 1
    })(this._root);
};
 
Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};
 
Tree.prototype.add = function(data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function(node) {
            if (node.data === toData) {
                parent = node;
            }
        };
 
    this.contains(callback, traversal);
 
    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};
 
Tree.prototype.remove = function(data, fromData, traversal) {
    var tree = this,
        parent = null,
        childToRemove = null,
        index;
 
    var callback = function(node) {
        if (node.data === fromData) {
            parent = node;
        }
    };
 
    this.contains(callback, traversal);
 
    if (parent) {
        index = findIndex(parent.children, data);
 
        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            childToRemove = parent.children.splice(index, 1);
        }
    } else {
        throw new Error('Parent does not exist.');
    }
 
    return childToRemove;
};
 
function findIndex(arr, data) {
    var index;
 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }
 
    return index;
}