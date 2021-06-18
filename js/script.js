// Question 1

const heading3 = document.querySelector("h3");

heading3.innerHTML = "Hello";



// Question 2

const headings = document.querySelectorAll("h4");

for(let i = 0; i < headings.length; i++) {
    headings[i].style.marginBottom = "-20px";
}



// Question 3

headings[1].style.backgroundColor = "red";



// Question 4

const firstP = document.querySelector("p.one");

firstP.style.fontSize = "24px";
firstP.style.color = "blue";



// Question 5

const thirdP = document.querySelector("p.three");


thirdP.innerHTML = "<span>" + thirdP.innerHTML + "</span>"; 



// Question 6

const content = document.querySelector(".content");

content.innerHTML += "<p>New paragraph</p>"



// Question 7

const contentParagraphs = document.querySelectorAll(".content p");

for(let i = 0; i < contentParagraphs.length; i++) {
    contentParagraphs[i].classList.add("content-item");
}



// Question 8

const list = document.querySelector("#services");

list.innerHTML = "<li>New items</li>" + list.innerHTML;



// Question 9

list.classList.remove("service-list");



// Question 10

const hideElement = document.querySelector("#hide");

hideElement.style.display = "none";
