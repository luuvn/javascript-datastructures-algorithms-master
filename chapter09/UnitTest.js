let expect = require('chai').expect;
let Graph = require('./01-Graph.js').Graph;
let BFS = require('./01-Graph.js').BFS;
let breadthFirstSearch = require('./01-Graph.js').breadthFirstSearch;
let DFS = require('./01-Graph.js').DFS;
let depthFirstSearch = require('./01-Graph.js').depthFirstSearch;
let ShortestPath = require('./03-ShortestPath.js');

describe('Floyd-Warshall Algorithm - All-Pairs Shortest Path', () => {
    it('All-Pairs Shortest Path', () => {
        const INF = Infinity;
        const graph = [
            [0, 2, 4, INF, INF, INF],
            [INF, 0, 2, 4, 2, INF],
            [INF, INF, 0, INF, 3, INF],
            [INF, INF, INF, 0, INF, 2],
            [INF, INF, INF, 3, 0, 2],
            [INF, INF, INF, INF, INF, 0]
        ];

        for (k = 0; k < length; k++) {
            for (i = 0; i < length; i++) {
                for (j = 0; j < length; j++) {
                    if (dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }

        let shortestPath = new ShortestPath(graph);

        expect(shortestPath.floydWarshall()).to.deep.equal([
            [0, 2, 4, 6, 4, 6],
            [INF, 0, 2, 4, 2, 4],
            [INF, INF, 0, 6, 3, 5],
            [INF, INF, INF, 0, INF, 2],
            [INF, INF, INF, 3, 0, 2],
            [INF, INF, INF, INF, INF, 0]
        ]);
    });
});

describe('Dijkstra\'s Algorithm - Shortest Path', () => {

    it('Shortest Path', () => {
        const graph = [
            [0, 2, 4, 0, 0, 0],
            [0, 0, 2, 4, 2, 0],
            [0, 0, 0, 0, 3, 0],
            [0, 0, 0, 0, 0, 2],
            [0, 0, 0, 3, 0, 2],
            [0, 0, 0, 0, 0, 0]
        ];

        let shortestPath = new ShortestPath(graph);

        expect(shortestPath.dijkstra(0)).to.deep.equal([0, 2, 4, 6, 4, 6]);

    });

});

describe('Depth First Search', () => {
    let count;
    const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    const dfsCallBack = ['A', 'B', 'E', 'I', 'F', 'C', 'D', 'G', 'H'];
    let graph;

    beforeEach(() => {
        count = 0;
        graph = new Graph(true);
    });

    function assertCallback(value) {
        expect(value).to.equal(dfsCallBack[count]);
        count++;
    }

    it('depthFirstSearch', () => {
        for (let i = 0; i < vertices.length; i++) {
            graph.addVertex(vertices[i]);
        }

        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('A', 'D');
        graph.addEdge('C', 'D');
        graph.addEdge('C', 'G');
        graph.addEdge('D', 'G');
        graph.addEdge('D', 'H');
        graph.addEdge('B', 'E');
        graph.addEdge('B', 'F');
        graph.addEdge('E', 'I');

        depthFirstSearch(graph, assertCallback);
    });

    it('topological sort - DFS', () => {
        const myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
        for (let i = 0; i < myVertices.length; i++) {
            graph.addVertex(myVertices[i]);
        }
        graph.addEdge('A', 'C');
        graph.addEdge('A', 'D');
        graph.addEdge('B', 'D');
        graph.addEdge('B', 'E');
        graph.addEdge('C', 'F');
        graph.addEdge('F', 'E');

        const result = DFS(graph);

        expect(result.discovery).to.deep.equal({
            A: 1, B: 11, C: 2, D: 8, E: 4, F: 3
        });
        expect(result.finished).to.deep.equal({
            A: 10, B: 12, C: 7, D: 9, E: 5, F: 6
        });
        expect(result.predecessors).to.deep.equal({
            A: null, B: null, C: 'A', D: 'A', E: 'F', F: 'C'
        });
    });
});

describe('Breadth First Search', () => {
    let count;
    const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    let graph;

    function assertCallback(value) {
        expect(value).to.equal(vertices[count]);
        count++;
    }

    beforeEach(() => {
        count = 0;
        graph = new Graph();

        for (let i = 0; i < vertices.length; i++) {
            graph.addVertex(vertices[i]);
        }

        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('A', 'D');
        graph.addEdge('C', 'D');
        graph.addEdge('C', 'G');
        graph.addEdge('D', 'G');
        graph.addEdge('D', 'H');
        graph.addEdge('B', 'E');
        graph.addEdge('B', 'F');
        graph.addEdge('E', 'I');
    });

    it('breadthFirstSearch', () => {
        breadthFirstSearch(graph, vertices[0], assertCallback);
    });

    it('sorthest path - BFS', () => {
        const shortestPathA = BFS(graph, vertices[0]);

        expect(shortestPathA.distances).to.deep.equal({
            A: 0,
            B: 1,
            C: 1,
            D: 1,
            E: 2,
            F: 2,
            G: 2,
            H: 2,
            I: 3
        });
        expect(shortestPathA.predecessors).to.deep.equal({
            A: null,
            B: 'A',
            C: 'A',
            D: 'A',
            E: 'B',
            F: 'B',
            G: 'C',
            H: 'D',
            I: 'E'
        });
    });
});