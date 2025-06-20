class SearchSuggestionSystem {
  constructor(products) {
    // Sort products lexicographically
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    let result = [];
    let prefix = "";

    for (let char of searchWord) {
      prefix += char;

      // Filter products starting with the current prefix
      let matches = this.products.filter(product => product.startsWith(prefix));

      // Limit to first 3 matches
      result.push(matches.slice(0, 3));
    }

    return result;
  }
}

// Example usage:
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const system = new SearchSuggestionSystem(products);

console.log(system.getSuggestions("mouse"));
