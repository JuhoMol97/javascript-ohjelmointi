//Open t2 folder in your IDE/editor. Add HTML by using createElement() and appenChild mehtods. (2p)
// Add the following HTML code to the element with id="target"
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
// Add class my-item to the second list item

const data1 = document.createElement("li");
data1.innerHTML = "First item";
document.getElementById("target").appendChild(data1);

const data2 = document.createElement("li");
data2.innerHTML = "Second item";
document.getElementById("target").appendChild(data2);
document.getElementById('target').className = "my-item"

const data3 = document.createElement("li");
data3.innerHTML = "Third item";
document.getElementById("target").appendChild(data3);

