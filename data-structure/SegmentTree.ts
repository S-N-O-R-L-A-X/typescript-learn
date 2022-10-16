// node does not store l and r

class SegmentNode {
    left: SegmentNode;
    right: SegmentNode;
    add: number;
    val: number
    constructor(val = 0, left: SegmentNode = null, right: SegmentNode = null) {
        this.left = left;
        this.right = right;
        this.val = val;
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
    constructor() {
        this.root = new SegmentNode();
    }

    query(l: number, r: number) {
        return this.query_inside(0, 1e9, l, r, this.root);
    }

    update(l: number, r: number, v: number) {
        this.update_inside(0, 1e9, l, r, v, this.root);
    }

    query_inside(start: number, end: number, l: number, r: number, node: SegmentNode) {
        if (l <= start && end <= r) //the node is covered by the area
            return node.val;
        const mid = (start + end) >> 1;
        this.pushDown(node, mid - start + 1, end - mid);
        let v = 0;
        if (l <= mid)
            v += this.query_inside(start, mid, l, r, node.left);
        if (r > mid)
            v += this.query_inside(mid + 1, end, l, r, node.right);
        return v;
    }

    update_inside(start: number, end: number, l: number, r: number, v: number, node: SegmentNode) {
        if (l <= start && end <= r) {
            node.val += (end - start + 1) * v;
            node.add += v;
            return;
        }
        const mid = (start + end) >> 1;
        this.pushDown(node, mid - start + 1, end - mid);
        if (l <= mid)
            this.update_inside(start, mid, l, r, v, node.left);
        if (r > mid)
            this.update_inside(mid + 1, end, l, r, v, node.right);
        this.pushup(node);
    }


    pushup(node: SegmentNode) {
        node.val = node.left.val + node.right.val;
    }

    pushDown(node: SegmentNode, leftNum: number, rightNum: number) {
        if (!node.left)
            node.left = new SegmentNode();
        if (!node.right)
            node.right = new SegmentNode();
        if (node.add) {
            node.left.val += node.add * leftNum;
            node.left.add += node.add;
            node.right.val += node.add * rightNum;
            node.right.add += node.add;
            node.add = 0;
        }
    }
};