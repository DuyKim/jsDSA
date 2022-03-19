function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    push(value) {
        let node = new Node(value);
        if(!this.root) {
            this.root = node;
        } else {
            let current = this.root;
            
            while(true) {
                if(node.value < current.value) {
                    if(!current.left) {
                        current.left = node;
                        break;
                    }

                    current = current.left;
                } else if(node.value > current.value) {
                    if(!current.right) {
                        current.right = node
                    };

                    current = current.right;
                } else if(node.value == current.value) {
                    return false;
                }
            }
        }

        return this;
    }

    search(value) {
        let node = new Node(value),
            current = this.root;

        while(current) {
            if(node.value < current.value) {
                current = current.left;
            } else if(node.value > current.value) {
                current = current.right;
            } else {
                return current;
            }
        }
        
        return false;
    }

    remove(value) {

        return deleteRecursively(this.root, value);

        function deleteRecursively(root, value) {
            if(!root) return null;
            else if(value < root.value) {
                root.left = deleteRecursively(root.left, value);
            } else if(value > root.value) {
                root.right = deleteRecursively(root.right, value);
            } else {
                if(!root.left && !root.right) {
                    return null;
                } else if(!root.left) {
                    root = root.right;
                } else if(!root.right) {
                    root = root.left;
                } else {
                    let minValueNode = findMin(root.right),
                        rootLeft = root.left,
                        rootRight = root.right;

                    root = minValueNode;

                    root.right = deleteRecursively(rootRight, minValueNode.value);

                    root.left = rootLeft;
                }
            }
            
            return root;
        }

        function findMin(root) {
            while(root.left) {
                root = root.left;
            }

            return root;
        }
    }

    BFSTraversalIterative() {
        // Breath-first search - level-order traversal.
        let data = [],
            queue = [],
            node = this.root;

        queue.push(node);
        while(queue.length) {
            let tempNode = queue.shift();
            data.push(tempNode.value);

            if(tempNode.left) {
                queue.push(tempNode.left)
            }
            if(tempNode.right) {
                queue.push(tempNode.right)
            }
        }

        return data;
    }

    BFSTraversalRecursive() {
        let data = [],
            height = Height(this.root);

        for(let level = 1; level < height; level++) {
            CurrentLevel(this.root, level);
        }

        function Height(root) {
            if(!root) return 0;
            
            let lH = Height(root),
                rH = Height(root);
                
            if(lH > rH) return lH + 1
            else return rH + 1;
        }

        function CurrentLevel(root, level) {
            if(!root) return;

            if(level == 1) {
                data.push(root.data)
                return;
            };
            CurrentLevel(root.left, level - 1);
            CurrentLevel(root.right, level - 1);
        }



    }

    DFSInOrderIterative() {
        let data = [],
            done = false,
            stack = [],
            current = this.root;

        while(!done) {
            if(!current) {
                stack.push(current);
                current = current.left;
            } else {
                if(stack.length) {
                    current = stack.pop();
                    data.push(current);
                    current = current.right;
                } else {
                    done = true;
                }
            }
        }

        
    }

    DFSInOrderRecursive() {
        let data = [];
        recursive(this.root);

        return data;

        function recursive(root) {
            if(!root) return;
            recursive(root.left)
            data.push(root);
            recursive(root.right);
        }
    }

    DFSPostOrderIterative() {
        let data = [],
            stack = [];
        
        stack.push(this.root);
        while(stack.length) {
            let node = stack.pop();
            data.unshift(node);
            
            if(node.left) stack.push(node.left)
            if(node.right) stack.push(node.right)
        }

        return data;
    }

    DFSPostOrderRecusive() {
        let data = [];

        function helper(root) {
            if(!root) return;

            helper(root.left)
            helper(root.right)
            data.push(root);
        }
    }
    
    DFSPreOrderIterative() {
        let data = [],
            right = [],
            stack = [];

        stack.push(this.root);

        while(stack.length) {
            let node = stack.pop();
            data.push(node);
            
            if(node.left) {
                stack.push(node.left)
            } else {
                right.push(node.right)
            }

            if(!stack.length && !right.length) stack.push(right.pop())
        }

        return data;
    }

    DFSPreOrderRecursive() {
        let data = [];

        helper(this.root);

        return data;
        function helper(root) {
            if(!root) return;

            data.push(root)
            helper(root.left)
            helper(root.right)
        }

        return data;
    }

}

let bt = new BinaryTree();
let arr1 = [15, 10, 20, 8, 12, 16, 9, 13,11]
arr1.forEach(e => bt.push(e));
console.log(bt);
bt.remove(10);
console.log(bt);

function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype.remove = function (value) {

    if (!this._root) {
        return null
    }
    let { currentRoot, parent } = this.findNode(value);
    
    if(!currentRoot) return false;

    if (!currentRoot.left && !currentRoot.right) {
        if (value < parent.value) {
            parent.left = null;
        } else {
            parent.right = null;
        }

    } else if (!currentRoot.left) { // case 2
        currentRoot = currentRoot.right;

    } else if (!currentRoot.right) { // case 2
        currentRoot = currentRoot.left;

    } else {
        let { allterRoot, parentAllter } = findMin(currentRoot.right); // case 3

        if (value < parent.value) {
            parent.left = allterRoot;
        } else {
            parent.right = allterRoot;
        }

        allterRoot.left = currentRoot.left;

        if (parentAllter && allterRoot.right) {
            parentAllter.left = allterRoot.right;
            allterRoot.right = currentRoot.right;

        } else if (parentAllter && !allterRoot.right) {
            parentAllter.left = null;
            allterRoot.right = currentRoot.right;
        };

    }

    currentRoot.right = null;
    currentRoot.left = null;
    
    return currentRoot;

}
function findMin(root) {
    let parent = null;
    while (root.left) {
        parent = root;
        root = root.left;
    }
    return { allterRoot: root, parentAllter: parent };
}

BinarySearchTree.prototype.insert = function (value) {
    var thisNode = { left: null, right: null, value: value };
    if (!this._root) {
        //if there is no root value yet
        this._root = thisNode;
    } else {
        //loop traverse until
        var currentRoot = this._root;
        while (true) {
            if (currentRoot.value > value) {

                if (currentRoot.left != null) {
                    currentRoot = currentRoot.left;
                } else {
                    currentRoot.left = thisNode;
                    break;
                }
            } else if (currentRoot.value < value) {

                if (currentRoot.right != null) {
                    currentRoot = currentRoot.right;
                } else {
                    currentRoot.right = thisNode;
                    break;
                }
            } else {
                //case that both are the same
                break;
            }
        }
    }
}

BinarySearchTree.prototype.findNode = function (value) {
    var currentRoot = this._root,
        parent = null;
    while (currentRoot) {
        if (currentRoot.value > value) {
            parent = currentRoot;
            currentRoot = currentRoot.left;
        } else if (currentRoot.value < value) {
            parent = currentRoot;
            currentRoot = currentRoot.right;
        } else {
            //we've found the node
            found = true;
            break;
        }
    }
    return { currentRoot, parent };
}
// let bst = new BinarySearchTree();

// let arr = [15, 10, 20, 8, 12, 16, 9, 13]

// arr.forEach(e => bst.insert(e))
// let search = bst.findNode(10);

// bst.remove(10);

// console.log(search.value);
// console.log(bst);



