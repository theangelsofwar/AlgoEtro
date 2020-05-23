class Trie {
  constructor() {
      this.root = new Node();
  }
  
  insert(word) {
      const node = this.traverse(word, true);
      node.setTerminal();
  }
  
  search(word) {
      const node = this.traverse(word);
      if(!node) return false;
      return node.isTerminal;
  }
  
  startsWith(prefix) {
      const node = this.traverse(prefix);
      return !node ? false : true;
  }
  
  traverse(str, append = false) {
      let node = this.root;
      for(const letter of str) {
          if(!node.hasLetter(letter)) {
              if(!append) return null;
              node.addLetter(letter);
          }
          node = node.getLetter(letter);
      }
      
      return node;
  }
}

class Node {
  constructor(letter = null) {
      this.letter = letter;
      this.children = new Map(); 
      this.terminal = false;
  }
  
  addLetter(letter) {
      const node = new Node(letter);
      this.children.set(letter, node);
  }
  
  getLetter(letter) {
      if(!this.hasLetter(letter)) return null;
      return this.children.get(letter);
  }
  
  hasLetter(letter) {
      return this.children.has(letter);
  }
  
  get isTerminal() {
      return this.terminal;
  }
  
  setTerminal() {
      this.terminal = true;
  }
}