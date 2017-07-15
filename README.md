# Emplug
An Algorithm for Traversing a Tree using Depth-first Search (DFS) <br>

<b>Basic Terminologies</b>
<b>Tree</b>
Trees are one of the most commonly used data structures in web development. This statement holds true for both developers and users. Every web developer who has written HTML and loaded it into a web browser has created a tree, which is referred to as the Document Object Model (DOM). Every user of the Internet who has, in turn, consumed information on the Internet has received it in the form of a tree—the DOM.<br>

<b>A formal definition is in order.</b> 
In computer science, a <b>tree</b> is a widely used abstract data type (ADT)—or data structure implementing this ADT—that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes. 
Each node of a tree holds its own data and pointers to other nodes.<br>

I'll compare a <b>tree</b> to an organizational chart. The chart has a top-level position (root node), such as the CEO. Directly underneath this position are other positions, such as vice president (VP) and Chief Technology Officer (CTO) that are directly reporting to the CEO or are descendants (children) of the CEO.<br>
To create more children (nodes) or relationships in our organizational chart, we just repeat this process—we have a node point to another node.<br>
The top-most node (or the node with no ‘parent’ node) is called the root. The bottom-most node(s) (or nodes with no child nodes), are called leaves. Nodes with both a parent node and any child nodes are called branches as shown below: <br>
<p align="center"><img src="http://amberley.me/wp-content/uploads/2016/05/tree_conceptualVisualization-2.png" /></p>

<b>Algorithm</b><br>

An <b>algorith</b> is a set of steps we apply to complete a particular task or computation.<br>
It is basically a procedure or formula for solving a problem, based on conducting a sequence of specified actions, and which (like a map or flowchart) will lead to the sought result if followed.

<strong>Traversal</strong><br>
<b>Traversal</b> is a process or method or strategy used to visit all the nodes of a tree and may print their values too. In a
traversal, the goal is for the algorithm to visit all the nodes in the tree in some order and perform an operation on them. The most basic traversal simply enumerates the nodes so that you can see their ordering in the traversal.
