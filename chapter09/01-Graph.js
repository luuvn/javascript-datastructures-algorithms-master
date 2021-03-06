let Queue = require('../chapter04/01-Queue2');
let Stack = require('../chapter03/01-StackES6');
let Dictionary = require('../chapter07/01-Dictionaries');

const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
};

const initializeColor = vertices => {
    const color = {};
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
};

exports.Graph = class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new Dictionary();
    }
    addVertex(v) {
        if (!this.vertices[v]) {
            this.vertices.push(v);
            this.adjList.set(v, []);
        }
    }
    addEdge(a, b) {
        if (!this.adjList.get(a)) {
            this.addVertex(a);
        }

        if (!this.adjList.get(b)) {
            this.addVertex(b);
        }

        this.adjList.get(a).push(b);
    }
    getVertices() {
        return this.vertices;
    }
    getAdjList() {
        return this.adjList;
    }
    toString() {
        let s = '';

        for (let pos in this.vertices) {
            s += `${this.vertices[pos]} -> `;
            let neighbors = this.adjList.get(this.vertices[pos]);
            for (let neighbor in neighbors) {
                s += `${neighbors[neighbor]}`;
            }
            s += `\n`;
        }

        return s;
    }
};

exports.breadthFirstSearch = function (graph, startVertex, callback) {
    let nodeColors = initializeColor(graph.getVertices());

    let queue = new Queue();
    queue.enqueue(startVertex);

    while (!queue.isEmpty()) {
        let visitVertice = queue.dequeue();
        let neighbors = graph.getAdjList().get(visitVertice);
        nodeColors[visitVertice] = Colors.GREY;

        for (let pos in neighbors) {
            let vertice = neighbors[pos];
            if (nodeColors[vertice] == Colors.WHITE) {
                nodeColors[vertice] = Colors.GREY;
                queue.enqueue(vertice);
            }
        }

        nodeColors[visitVertice] = Colors.BLACK;
        callback(visitVertice);
    }
};

exports.BFS = function (graph, startVertex) {
    let distances = {};
    let predecessors = {};

    let nodeColors = initializeColor(graph.getVertices());

    let queue = new Queue();
    queue.enqueue(startVertex);

    distances[startVertex] = 0;
    predecessors[startVertex] = null;

    while (!queue.isEmpty()) {
        let visitVertice = queue.dequeue();
        let neighbors = graph.getAdjList().get(visitVertice);
        nodeColors[visitVertice] = Colors.GREY;

        for (let pos in neighbors) {
            let vertice = neighbors[pos];
            if (nodeColors[vertice] == Colors.WHITE) {
                nodeColors[vertice] = Colors.GREY;
                queue.enqueue(vertice);

                distances[vertice] = distances[visitVertice] + 1;
                predecessors[vertice] = visitVertice;
            }
        }

        nodeColors[visitVertice] = Colors.BLACK;
    }

    return {
        distances: distances,
        predecessors: predecessors
    }
};

let depthFirstSearchVisit = function (vertice, adjList, verticesColors, callback) {
    verticesColors[vertice] = Colors.GREY;

    callback(vertice);

    let neighbors = adjList.get(vertice);

    for (let pos in neighbors) {
        let neighbor = neighbors[pos];
        if (verticesColors[neighbor] == Colors.WHITE) {
            depthFirstSearchVisit(neighbor, adjList, verticesColors, callback);
        }
    }

    verticesColors[vertice] = Colors.BLACK;
};

exports.depthFirstSearch = function (graph, callback) {
    let vertices = graph.getVertices();
    let adjList = graph.getAdjList();
    let verticesColors = initializeColor(vertices);

    for (let pos in vertices) {
        if (verticesColors[vertices[pos]] == Colors.WHITE) {
            depthFirstSearchVisit(vertices[pos], adjList, verticesColors, callback);
        }
    }    
};

let DFSVisit = function (vertice, adjList, verticesColors, d, f, p, time) {
    verticesColors[vertice] = Colors.GREY;

    d[vertice] = ++time.count;

    let neighbors = adjList.get(vertice);

    for (let pos in neighbors) {
        let neighbor = neighbors[pos];
        if (verticesColors[neighbor] == Colors.WHITE) {
            p[neighbor] = vertice;

            DFSVisit(neighbor, adjList, verticesColors, d, f, p, time);
        }
    }

    verticesColors[vertice] = Colors.BLACK;

    f[vertice] = ++time.count;
};

exports.DFS = function (graph) {
    let vertices = graph.getVertices();
    let adjList = graph.getAdjList();
    let verticesColors = initializeColor(vertices);

    let d = {};
    let f = {};
    let p = {};

    for (let pos in vertices) {
        d[vertices[pos]] = 0;
        f[vertices[pos]] = 0;
        p[vertices[pos]] = null;
    }
   
    let time = {count: 0};

    for (let pos in vertices) {
        if (verticesColors[vertices[pos]] == Colors.WHITE) {
            DFSVisit(vertices[pos], adjList, verticesColors, d, f, p, time);
        }
    }    

    return {
        discovery: d,
        finished: f,
        predecessors: p
    }
};