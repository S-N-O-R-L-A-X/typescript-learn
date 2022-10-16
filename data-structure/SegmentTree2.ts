export { };
class SegmentNode {
    l: number;
    r: number;
    left: SegmentNode | null;
    right: SegmentNode | null;
    v: number;
    add: number;
    constructor(l: number, r: number) {
        this.left = null;
        this.right = null;
        this.l = l;
        this.r = r;
        this.v = 0;
        this.add = 0; // lazy sign
    }
};


// for range of sum and add or minus to range, it should * the number of children nodes when updating value
// when covering range, it is unnecessary to accumulate lazy sign
// when calculating max and min values, it is unnecessary to * the number of children nodes when updating value but accumulate lazy sign
// when point update, the range is 1, so it is equivalent to * the number of children nodes or not.
// the value of node can store special value, max, min value for example. 


class SegmentTree {
    root: SegmentNode;
    constructor(l = 0, r = 1e9) {
        this.root = new SegmentNode(l, r);
    }

    update_inside(l: number, r: number, v: number, node: SegmentNode) {
        if (l > r)
            return;
        if (node.l >= l && node.r <= r) { //node is completely covered
            node.v += v;
            node.add += v;
            return;
        }
        const mid = (node.l + node.r) >> 1;
        this.pushdown(node, mid - l + 1, r - mid);

        if (l <= mid)
            this.update_inside(l, r, v, node.left);
        if (r > mid)
            this.update_inside(l, r, v, node.right);
        this.pushup(node);
    }

    update(l: number, r: number, v: number) {
        this.update_inside(l, r, v, this.root);
    }

    query_inside(l: number, r: number, node: SegmentNode) {
        if (l > r)
            return 0;
        if (node.l >= l && node.r <= r) //the node is covered by the area
            return node.v;
        const mid = (node.l + node.r) >> 1;
        this.pushdown(node, mid - l + 1, r - mid);
        let v = 0;

        if (l <= mid)
            v = this.query_inside(l, r, node.left);
        if (r > mid)
            v = Math.max(v, this.query_inside(l, r, node.right));
        return v;
    }

    query(l: number, r: number) {
        return this.query_inside(l, r, this.root);
    }

    pushup(node: SegmentNode) {
        node.v = Math.max(node.left.v, node.right.v);
    }

    pushdown(node: SegmentNode, leftNum: number, rightNum: number) {
        const mid = (node.l + node.r) >> 1;
        if (!node.left)
            node.left = new SegmentNode(node.l, mid);
        if (!node.right)
            node.right = new SegmentNode(mid + 1, node.r);
        if (node.add !== 0) {
            let left = node.left;
            let right = node.right;
            left.v += node.add;
            right.v += node.add;
            left.add += node.add;
            right.add += node.add;
            node.add = 0;
        }
    }
};