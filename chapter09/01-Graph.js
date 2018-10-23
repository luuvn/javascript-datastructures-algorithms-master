let Queue = require('../chapter04/01-Queue2');
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
       
    }
    addEdge(a, b) {
        
    }
    getVertices() {
       
    }
    getAdjList() {
       
    }
    toString() {
        
    }
};

exports.breadthFirstSearch = function (graph, startVertex, callback) {
    
};

exports.BFS = function (graph, startVertex) {
    
};