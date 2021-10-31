const header = document.createElement("h2");

header.innerHTML = "Welcome";

const list = document.getElementsByTagName("div")[0]

list.insertBefore(header, list.childNodes[0])