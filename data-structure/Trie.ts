class TrieNode {
    children: TrieNode[];
    end: boolean;
    constructor() {
        this.children = new Array(26);
        this.end = false;
    }
}

class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }
    insert(str: string): void {
        let cur = this.root;
        for (let i = 0; i < str.length; ++i) {
            const idx = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (!cur.children[idx]) {
                cur.children[idx] = new TrieNode();
            }
            cur = cur.children[idx];
        }
        cur.end = true;
    }

    build(dictionary: string[]) {
        dictionary.forEach((word) => this.insert(word));
    }

    search(str: string, node: TrieNode) {
        for (let i = 0; i < str.length; ++i) {
            const idx = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (node[idx] === null) {
                return false;
            }
            return true;
        }
    }
}