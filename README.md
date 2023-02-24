# zemoso-training
assignment 
main.cpp -> 
Course Scheduling System: 
Priya is a member from the training department of a company who has to prepare a training plan that has different courses.
Few of these courses need some prerequisite courses to be completed. 
The goal is to prepare a training plan such that all the courses are included in the correct order and the learning is on track.

1. First, we will form the adjacency list of the graph using the pairs. For example, for the pair {u, v} we will add node v as an adjacent node of u in the list.
2. Then, we will calculate the in-degree of each node and store it in the indegree array. We can iterate through the given adj list, and simply for every node u->v, we can increase the indegree of v by 1 in the indegree array. 
3. Initially, there will be always at least a single node whose indegree is 0. So, we will push the node(s) with indegree 0 into the queue.
4. Then, we will pop a node from the queue including the node in our answer array, and for all its adjacent nodes, we will decrease the indegree of that node by one. For example, if node u that has been popped out from the queue has an edge towards node v(u->v), we will decrease indegree[v] by 1.
5. After that, if for any node the indegree becomes 0, we will push that node again into the queue.
6. We will repeat steps 3 and 4 until the queue is completely empty. Now, completing the BFS we will get the linear ordering of the nodes in the answer array.
7. For the first problem(Course Schedule): We will return the answer array if the length of the ordering equals the number of tasks
