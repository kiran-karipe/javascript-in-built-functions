// “The Document method querySelectorAll() returns a static (not live) NodeList 
// representing a list of the document's elements that match the specified group of selectors.”

Document.prototype.myQuerySelectorAll = function(selector) {
	let result = [];
  function traverse(element) {
  	if(element == null) return;
  	if (isMatch(element, selector)) {
    	result.push(element);
    }
    
    for (let child of element.children) {
    	traverse(child);
    }
  }
  traverse(this.documentElement);
  console.log(result);
}

function isMatch(element, selector) {
	if (element.matches) return element.matches(selector);
  return false;
}

document.myQuerySelectorAll('#back-image');
document.myQuerySelectorAll('div');
document.myQuerySelectorAll('.footer');