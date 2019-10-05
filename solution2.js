// Binds to the ice-cream-list class, where the list items will go
var iceCreamList = document.querySelector(".ice-cream-list");
// Reverse the order since we will be popping from the top 
iceCreamFlavors.reverse();
// Loop until all items in the array have been removed
while (iceCreamFlavors.length > 0) {
	// Creates the list item element 
	var listItem = document.createElement("LI");
	// Makes sure each list item is in the class ice-cream-flavor
    listItem.className += "ice-cream-flavor";
    // Pop off the item at the top/end of iceCreamFlavors
    var flavorText = document.createTextNode(iceCreamFlavors.pop());
    // Add this popped off text to the list item element
    listItem.appendChild(flavorText);
    // Add the list item to the ice-cream-list
    iceCreamList.appendChild(listItem);
}