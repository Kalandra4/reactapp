const pageheader = document.getElementById("page-header");
const mainheading = document.getElementById("main-heading");

mainheading.textContent = "New DOM Layout"
pageheader.classList.add("bg-success")
pageheader.classList.remove("bg-dark")

const para1 = document.getElementById("para1");
para1.textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure."

const para2 = document.getElementById("para2");
para2.textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."

const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  const para4 = document.getElementById("para4");
  para4.textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document."
})

const red = document.getElementById("red");
red.classList.add("bg-danger") /*red*/
red.classList.remove("bg-white")

const blue = document.getElementById("blue");
blue.classList.add("bg-primary") /*blue*/
blue.classList.remove("bg-white")

const yellow = document.getElementById("yellow");
yellow.classList.add("bg-warning") /*yellow*/
yellow.classList.remove("bg-white")

const green = document.getElementById("green");
green.classList.add("bg-success") /*green*/
green.classList.remove("bg-white")

const black = document.getElementById("black");
black.classList.add("bg-dark") /*black*/
black.classList.remove("bg-white")