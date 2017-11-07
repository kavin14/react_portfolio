class Node {
    constructor(data,left=null,right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(root = null){
        this.root = root
    }
    addNode(n){
        var newNode = new Node(n)
        var currentNode = null;
        if (this.root == null){
            this.root = newNode
        }else {
            currentNode = this.root;
            while(currentNode){
            if (newNode.data > currentNode.data){
                 if (currentNode.right == null){
                    currentNode.right = newNode
                    return
                }
                else{
                    currentNode = currentNode.right  
                }   
            }else {
                if (currentNode.left == null){
                    currentNode.left = newNode
                    return
                }
                else{
                    currentNode = currentNode.left  
                } 
            }
        }
        }
        
    }
    addList (lis = []){
        lis.map(e => this.addNode(e))
    }
    bstSort(n){
        if (n.left != null){
            this.bstSort(n.left)
        }
        
        
        if (n.right != null){

            this.bstSort(n.right)
        }
        console.log(n.data)
    }
}