/**  Leet 207, can finish
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
 

Constraints:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
1 <= numCourses <= 10^5
*/

/**
 * 
 * @param {number} numCourses 
 * @param {number[][]} prerequisites 
 * @return {boolean}
 */
//method # 1: DFS
 const canFinish = (numCourses, prerequisites){
  const indegree = Array(numCourses).fill(0);
  const track = {};
  const queue = [];
  for(const [course, dependentCourse] of prerequisites){
    if(track[course]){
      track[course].push(dependentCourse);
    } else {
      track[course] = [dependentCourse];
    }
    indegree[dependentCourse]++;
  }

  for(let i =0; i<indegree.length; i++){
    if(indegree[i] === 0) queue.push(i);
  }
  let count = 0;
  while(queue.length >0){
    count++;
    const current = queue.shift();
    if(track[current]){
      for(const dep of track[current]){
        indegree[dep]--;
        if(indegree[dep]===0) queue.push(dep);
      }
    }
  }
  return numCourses === count;
 };



 //method #2 detecting a cycle with two stacks , 
 //one for current path, other for complete path
//iterate over nodes, use DFS to detect cycle
/**
 * @param {number}
 * @param {number[]}
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  const graph = createGraph(numCourses, prerequisites);
  const completed = new Set();//track finished
  for(let i =0;i<numCourses; i++){
    //if the course has not been completed, and there is a cycle(prerequisite is circular to another prior requisite)
    if(!completed.has(i) && hasCycle(graph, i, completed)){
      return false;
    }
  }
  return true;
};

function hasCycle(graph, u, completed, visited=new Set()){
  if(completed.has(u)){
    //if the course has been completed, there is not a cycle
    return false;
  }
  if(visited.has(u)){
    //draw out diagram, if you have visited the node but you have not competed it, it has a redundant cycle
    return true;
  }
  //if it has not been completed and has not been completed, 
  //mark visitation
  visited.add(u);
  //iterate through the pair of key pairs of requisites at the index of the graph
  for(const v of graph[u]){
    if(hasCycle(graph, v, completed, visited)) {
      //check again once visited if pair has cycle, eg not complete, but already visited, having a cycle means that you cannot take the preq before the req
      //because they are reqs of eachother
      return true;
    }
  }
  visited.delete(u);
  completed.add(u);
  return false;
}

function createGraph(numCourses, prerequisites){
  const graph = new Array(numCourses).fill(null).map(() => []);
  //graph the possibilities
  for(const [u, v] of prerequisites){
    graph[u].push(v); //graph the pairs to tie them in a path
  }
  return graph;
}