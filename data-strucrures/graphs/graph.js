class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertexOne, vertexTwo) {
    if (this.adjacencyList[vertexOne] && this.adjacencyList[vertexTwo]) {
      this.adjacencyList[vertexOne].push(vertexTwo);
      this.adjacencyList[vertexTwo].push(vertexOne);
      return true;
    }

    return false;
  }

  removeEdge(vertexOne, vertexTwo) {
    if (this.adjacencyList[vertexOne] && this.adjacencyList[vertexTwo]) {
      this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
        (vertex) => vertex !== vertexTwo
      );
      this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
        (vertex) => vertex !== vertexOne
      );
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;

    while (this.adjacencyList[vertex].length) {
      const temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}

const graph = new Graph();
console.log(graph.addVertex('A'));
console.log(graph.addVertex('B'));
console.log(graph.addVertex('C'));
console.log(graph.addVertex('D'));
console.log(graph.addEdge('A', 'B'));
console.log(graph.addEdge('A', 'C'));
console.log(graph.addEdge('A', 'D'));
console.log(graph.addEdge('B', 'D'));
console.log(graph.addEdge('C', 'D'));

console.log(graph.removeVertex('D'));
console.log(graph.removeVertex('E'));

console.log(graph);
