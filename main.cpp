
//  main.cpp
//  program
//
//  Created by Derek Allen on 23/02/23.
//

#include <iostream>
<<<<<<< HEAD
 #include <queue>
 #include <vector>
 using namespace std;


 class Solution
 {
 public:
     vector<int> findOrder(int V, int m, vector<vector<int>> prerequisites)
     {
         vector<int> adj[V];
         for (auto it : prerequisites) {
             adj[it[1]].push_back(it[0]);  //adjacency list creation
         }



         int indegree[V] = {0};
         for (int i = 0; i < V; i++) {
             for (auto it : adj[i]) {
                 indegree[it]++;
             }
         }

         queue<int> q;                       //breadth first search
         for (int i = 0; i < V; i++) {
             if (indegree[i] == 0) {
                 q.push(i);
             }
         }
         vector<int> topo;
         while (!q.empty()) {
             int node = q.front();
             q.pop();
             topo.push_back(node);
             // node is in your topo sort
             // so please remove it from the indegree

             for (auto it : adj[node]) {
                 indegree[it]--;
                 if (indegree[it] == 0) q.push(it);
             }
         }

         if (topo.size() == V) return topo;
         return {};
     }
 };


 int main() {

     int N = 4;
     int M = 3;

     vector<vector<int>> prerequisites(3);
     prerequisites[0].push_back(0);
     prerequisites[0].push_back(1);

     prerequisites[1].push_back(1);
     prerequisites[1].push_back(2);

     prerequisites[2].push_back(2);
     prerequisites[2].push_back(3);

 int main(int argc, const char * argv[]) {
     // insert code here...
     std::cout << "Hello, World!\n";
     Solution obj;
     vector<int> ans = obj.findOrder(N, M, prerequisites);
     if(ans.size() != 0){
         cout<<"The training plan will be executed in the following order\n";
     for (auto task : ans) {
         cout << task << " ";
     }
     }
     else
     cout<<"The training plan is not suitable, please reorder courses and try again\n";
     cout << endl;
     return 0;
 }
=======
#include <queue>
#include <vector>
using namespace std;

//
class Solution
{
public:
    vector<int> findOrder(int V, int m, vector<vector<int>> prerequisites)
    {
        vector<int> adj[V];
        for (auto it : prerequisites) {
            adj[it[1]].push_back(it[0]);  //adjacency list creation
        }



        int indegree[V] = {0};
        for (int i = 0; i < V; i++) {
            for (auto it : adj[i]) {
                indegree[it]++;
            }
        }

        queue<int> q;                       //breadth first search
        for (int i = 0; i < V; i++) {
            if (indegree[i] == 0) {
                q.push(i);
            }
        }
        vector<int> topo;
        while (!q.empty()) {
            int node = q.front();
            q.pop();
            topo.push_back(node);
            // node is in your topo sort
            // so please remove it from the indegree

            for (auto it : adj[node]) {
                indegree[it]--;
                if (indegree[it] == 0) q.push(it);
            }
        }

        if (topo.size() == V) return topo;
        return {};
    }
};


int main() {

    int N = 4;
    int M = 3;

    vector<vector<int>> prerequisites(3);
    prerequisites[0].push_back(0);
    prerequisites[0].push_back(1);

    prerequisites[1].push_back(1);
    prerequisites[1].push_back(2);

    prerequisites[2].push_back(2);
    prerequisites[2].push_back(3);

    Solution obj;
    vector<int> ans = obj.findOrder(N, M, prerequisites);
    if(ans.size() != 0){
        cout<<"The training plan will be executed in the following order\n";
    for (auto task : ans) {
        cout << task << " ";
    }
    }
    else
    cout<<"The training plan is not suitable, please reorder courses and try again\n";
    cout << endl;
    return 0;
}
>>>>>>> PS
