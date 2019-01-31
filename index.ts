var tests = function () {
	function BinaryTree(){
		//Node 二叉树
		function Node (key){
			this.key = key;
			this.left = null;
			this.right = null;
		};
		// 二叉树根节点
		var root = null;
		function insertNode (node,newNode){
			if(newNode.key<node.key){
				if(node.left ===null){
					node.left = newNode;
				}else{
					insertNode(node.left,newNode)
				}
				return
			}
			if(newNode.key>=node.key){
				if(node.right ===null){
					node.right = newNode;
				}else{
					insertNode(node.right,newNode);
				}
				return
			}
		};
		this.insert = function(key){
			var newnode  = new Node(key);
			if(root===null){
				root = newnode;
			}else{
				insertNode(root,newnode);
			}
        };

        //中序遍历函数
		function inOrderTraverseNode (node,callback){
			if(node!==null){
				inOrderTraverseNode(node.left,callback);
				callback(node.key);
				inOrderTraverseNode(node.right,callback);
			}
		};
		this.inOrderTraverse = function(callback){
             //中序遍历，原理从根节点先遍历左子树，按左中右的方式进行遍历
			inOrderTraverseNode(root,callback);
		
        };  
	}
function test() {
	var nodes = [];
	var list = []
	function random (index,e) {
		for (let i = 0; i < index; i++) {
			nodes.push(Math.floor(Math.random()*e))
		}
	}
	random(10000,100000);
	var binaryTree = new BinaryTree();
	nodes.forEach(function(key){
		binaryTree.insert(key);
	}); 
		
	function callback(key){
		list.push(key);
	}
	binaryTree.inOrderTraverse(callback);
	//console.log('原始数组',nodes);
	// console.log('排序后数组',list);
}	
test()
}
function testt(){
    for (let i = 0; i < 1000; i++) {
        // console.log(i);
        tests()
    }
}
var star = new Date().getTime();
// console.log("开始",star);
testt()
var end = new Date().getTime();
// console.log("结束",end);
console.log((end-star)/1000);
// var star = new Date().getTime();
// console.log("开始",star);
// tests()
// var end = new Date().getTime();
// console.log("结束",end);
// console.log(end-star);


// module.exports.tests=tests() ;