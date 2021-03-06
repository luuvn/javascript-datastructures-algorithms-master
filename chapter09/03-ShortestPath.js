function ShortestPath(graph) {

    this.graph = graph;

    var INF = Number.MAX_SAFE_INTEGER;

    var minDistance = function (dist, visited) {
        let min = INF;
        let minIndex = null;

        for (let i = 0; i < dist.length; i++) {
            if (!visited[i] && dist[i] < min) {
                min = dist[i];
                minIndex = i;
            }
        }

        return minIndex;
    };

    this.dijkstra = function (indexBegin) {

        let dist = [],
            visited = [],
            length = this.graph.length;

        for (let i = 0; i < length; i++) {
            dist[i] = INF;
            visited[i] = false;
        }

        dist[indexBegin] = 0;

        for (let i = 0; i < length - 1; i++) {
            let u = minDistance(dist, visited);
            visited[u] = true;

            for (let v = 0; v < length; v++) {
                if (!visited[v] && this.graph[u][v] != 0 && dist[u] + this.graph[u][v] < dist[v]) {
                    dist[v] = dist[u] + this.graph[u][v];
                }
            }
        }

        return dist;
    };

    this.floydWarshall = function () {

        var dist = [],
            length = this.graph.length,
            i, j, k;

        for (i = 0; i < length; i++) {
            dist[i] = [];
            for (j = 0; j < length; j++) {
                dist[i][j] = this.graph[i][j];
            }
        }
        
        for (i = 0; i < length; i++) {
            for (j = 0; j < length; j++) {
                for (k = 0; k < length; k++) {
                    if (dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }

        return dist;
    }
}

module.exports = ShortestPath;