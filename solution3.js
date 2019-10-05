// Creates a list item element for the ice cream flavor it is passed
function createListItem(flavor) {
	// Binds to the ice-cream-list class, where the list items will go
	var iceCreamList = document.querySelector(".ice-cream-list");
	// Creates the list item element
	var listItem = document.createElement("LI");
	// Makes sure each list item is in the class ice-cream-flavor
	listItem.className += "ice-cream-flavor";
	// Sets the list item's text to the flavor passed to the function
	var flavorText = document.createTextNode(flavor);
	// Add this text to the list item element
	listItem.appendChild(flavorText);
	// Adds the list item to ice-cream-list
	iceCreamList.appendChild(listItem);
}
// Maps the createListItem function to be called on all iceCreamFlavors
iceCreamFlavors.map(createListItem);