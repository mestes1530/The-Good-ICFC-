// Binds to the ice-cream-list class, where the list items will go
var iceCreamList = document.querySelector(".ice-cream-list");
// Loops through iceCreamFlavors array in ascending order
for (var i = 0; i < iceCreamFlavors.length; i++) {
	// Creates the list item element 
    var listItem = document.createElement("LI");
    // Makes sure each list item is in the class ice-cream-flavor
    listItem.className += "ice-cream-flavor";
    // Set the list item's text to the current value of iceCreamFlavors
    var flavorText = document.createTextNode(iceCreamFlavors[i]);
    // Add the text description to the list item element
    listItem.appendChild(flavorText);
    // Add the list item to the ice-cream-list
    iceCreamList.appendChild(listItem);
}