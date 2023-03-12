class BinaryTreeNode {
    val: number
    left: BinaryTreeNode | null
    right: BinaryTreeNode | null
    constructor(val?: number, left?: BinaryTreeNode | null, right?: BinaryTreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

class BinaryTree {
    root: BinaryTreeNode | null;
    #diameter: number;
    constructor(root: BinaryTreeNode) {
        this.root = root;
    }

    get diameter(): number {
        this.diameterOfBinaryTree(this.root);
        return this.#diameter;
    }

    distanceToLeaf(root: BinaryTreeNode | null) {
        if (root) {
            return Math.max(this.distanceToLeaf(root.left), this.distanceToLeaf(root.right)) + 1;
        }
        return 0;
    }

    diameterOfBinaryTree(root: BinaryTreeNode | null): number {
        if (root) {
            const L = this.distanceToLeaf(root.left);
            const R = this.distanceToLeaf(root.right);
            this.#diameter = Math.max(this.#diameter, L + R + 1); // 计算d_node即L+R+1 并更新ans
            return Math.max(L, R) + 1; // 返回该节点为根的子树的深度
        }
        return 0;
    }
}