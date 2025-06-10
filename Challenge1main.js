class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
        return null;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}
 let trie = new Trie();
console.log(trie.insert("apple"));
console.log(trie.search("apple")); // Should return true
console.log(trie.search("app"));   // Should return false
console.log(trie.startsWith("app")); // Should return true
console.log(trie.insert("app"));           // → output: [null, true, false, true, null]
console.log(trie.search("app"));           // → output: [null, true, false, true, null, true]
