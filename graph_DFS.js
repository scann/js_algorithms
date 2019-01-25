//Graphs

function createNode(key) {
    const neighbors = [];

    return {
        key,
        neighbors,
        addNeighbor(node) {
            neighbors.push(node);
        }
    }
}


function createGraph(directed = false) {
    const nodes = [];
    const edges = [];

    return {
        directed,
        nodes,
        edges,

        addNode(key) {
            nodes.push(createNode(key))
        },

        getNode(key) {
            return nodes.find(node => node.key === key);
        },

        addEdge(node1key, node2key) {
            const node1 = this.getNode(node1key);
            const node2 = this.getNode(node2key);

            node1.addNeighbor(node2);
            edges.push(`${node1key}-${node2key}`);

            if(!directed) {
                node2.addNeighbor(node2);
            }
        },

        print() {
            return nodes.map(({ key, neighbors }) => {
                let result = key;

                if(neighbors.length) {
                    result += `->${neighbors.map(neighbor => neighbor.key).join(' ')}`
                }

                return result;
            }).join('\n');
        },

        //Depth First Search

        depthFirstSearch(startingNodeKey, visitFn) {
            const startingNode = this.getNode(startingNodeKey);
            const visited = nodes.reduce((acc, node) => {
                acc[node.key] = false;
                return acc;
            }, {});
            
            (function explore(node) {
                if(visited[node.key]) {
                    return;
                }

                visitFn(node);
                visited[node.key] = true;

                node.neighbors.forEach(node => {
                    explore(node);
                });

                explore(startingNode);
            })(startingNode);
        }
    }
}
const graph = createGraph(true);
const nodes = ['a', 'b', 'c', 'd', 'e','f'];
const edges = [
    ['a', 'b'],
    ['a', 'e'],
    ['a', 'f'],
    ['b', 'd'],
    ['b', 'e'],
    ['c', 'b'],
    ['d', 'c'],
    ['d', 'e'],
];
nodes.forEach(node => {
    graph.addNode(node)
});
edges.forEach(nodes => {
    graph.addEdge(...nodes)
});

graph.depthFirstSearch('a', node => {
    console.log(node.key);
});