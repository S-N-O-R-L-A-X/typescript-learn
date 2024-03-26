import PriorityQueue from "../data-structure/PriorityQueue";
const inf = 1e9 + 7;
function dijkstra1(edges: number[][], n: number, starting: number) {//n is the number of node 
    const routes = new Array<number>(n).fill(0).map(() => new Array<number>(n).fill(inf));
    edges.forEach((edge) => { //record present edge
        routes[edge[0]][edge[1]] = edge[2];
    })
    const dst = new Array<number>(n).fill(inf), used = new Array<boolean>(n).fill(false);
    dst[starting] = 0;
    for (let i = 0; i < n; i++) {
        let x = -1;
        for (let j = 0; j < n; j++) {
            if (!used[j] && (x == -1 || dst[j] < dst[x]))//find the smallest vertex
                x = j;
        }
        used[x] = true;//sign the vertex as passed
        for (let j = 0; j < n; j++)
            dst[j] = Math.min(dst[j], dst[x] + routes[x][j]);
    }
    const ret = Math.max(...dst);
    return ret == inf ? -1 : ret;//perhaps there is a vertex that cannot be reached
}

function dijkstra2(edges: [number, number, number][], n: number, starting: number): number[] {
    const routes: [number, number][][] = Array.from({ length: n }, () => []);
    for (const edge of edges) {
        // record present edge
        routes[edge[0]].push([edge[1], edge[2]]);
    }

    const dst: number[] = Array.from({ length: n }, () => Infinity);
    dst[starting] = 0;
    const pq=new PriorityQueue<[number,number]>((a,b)=>a[0]-b[0]);
    // pq stores {distance, target}
    pq.push([0, starting]);

    while (pq.isEmpty()) {
        const node: [number, number] = pq.pop();
        const dis: number = node[0], x: number = node[1];
        if (dst[x] > dis) {
            dst[x] = dis;
            for (const [neighbor, weight] of routes[x]) {
                pq.push([dis + weight, neighbor]);
            }
        }
    }

    return dst;
}
