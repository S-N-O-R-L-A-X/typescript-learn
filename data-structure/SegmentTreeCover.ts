// node does not store l and r
// Why we need to List cover range especially is that cover can have higher speed than calculation
export {};
class SegmentNode {
	left: SegmentNode;
	right: SegmentNode;
	add: number;
	cover: boolean;
	constructor(cover = false, left: SegmentNode = null, right: SegmentNode = null) {
		this.left = left;
		this.right = right;
		this.cover = cover;
		this.add = 0; // lazy sign
		this.cover = false;
	}
};

class SegmentTreeCover {
	root: SegmentNode;
	constructor() {
		this.root = new SegmentNode();
	}

	query(l: number, r: number) {
		return this.query_inside(0, 1e9, l, r, this.root);
	}

	// use update(l: number, r: number, 1) to cover, use update(l: number, r: number, -1) to uncover
	update(l: number, r: number, v: number) {
		this.update_inside(0, 1e9, l, r, v, this.root);
	}

	query_inside(start: number, end: number, l: number, r: number, node: SegmentNode) {
		if (l <= start && end <= r) //the node is covered by the area
			return node.cover;
		const mid = (start + end) >> 1;
		this.pushDown(node);
		let v = true;
		if (l <= mid)
			v &&= this.query_inside(start, mid, l, r, node.left);
		if (r > mid)
			v &&= this.query_inside(mid + 1, end, l, r, node.right);
		return v;
	}

	update_inside(start: number, end: number, l: number, r: number, v: number, node: SegmentNode) {
		if (l <= start && end <= r) {
			node.cover = v === 1;
			node.add = v;
			return;
		}
		const mid = (start + end) >> 1;
		this.pushDown(node);
		if (l <= mid)
			this.update_inside(start, mid, l, r, v, node.left);
		if (r > mid)
			this.update_inside(mid + 1, end, l, r, v, node.right);
		this.pushup(node);
	}


	pushup(node: SegmentNode) {
		node.cover = node.left.cover && node.right.cover;
	}

	pushDown(node: SegmentNode) {
		if (!node.left)
			node.left = new SegmentNode();
		if (!node.right)
			node.right = new SegmentNode();
		if (node.add) {
			node.left.cover = node.add === 1;
			node.left.add = node.add;
			node.right.cover = node.add === 1;
			node.right.add = node.add;
			node.add = 0;
		}
	}
};