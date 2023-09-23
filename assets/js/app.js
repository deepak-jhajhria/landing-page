let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let span1 = document.querySelector(".span1")
let span2 = document.querySelector(".span2")
let span3 = document.querySelector(".span3")
let home = document.querySelector(".home")
let Aboutus = document.querySelector(".Aboutus")
let Destinations = document.querySelector(".Destinations")
let Tours = document.querySelector(".Tours")
let Blog = document.querySelector(".Blog")

menu.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
    span1.classList.toggle("span4");
    span2.classList.toggle("span5");
    span3.classList.toggle("span6");
})
home.addEventListener("click", function () {
    mobileView.classList.remove("show");
    body.classList.remove("overflow-hidden");
    span1.classList.remove("span4");
    span2.classList.remove("span5");
    span3.classList.remove("span6");
})
Aboutus.addEventListener("click", function () {
    mobileView.classList.remove("show");
    body.classList.remove("overflow-hidden");
    span1.classList.remove("span4");
    span2.classList.remove("span5");
    span3.classList.remove("span6");
})
Destinations.addEventListener("click", function () {
    mobileView.classList.remove("show");
    body.classList.remove("overflow-hidden");
    span1.classList.remove("span4");
    span2.classList.remove("span5");
    span3.classList.remove("span6");
})
Tours.addEventListener("click", function () {
    mobileView.classList.remove("show");
    body.classList.remove("overflow-hidden");
    span1.classList.remove("span4");
    span2.classList.remove("span5");
    span3.classList.remove("span6");
})
Blog.addEventListener("click", function () {
    mobileView.classList.remove("show");
    body.classList.remove("overflow-hidden");
    span1.classList.remove("span4");
    span2.classList.remove("span5");
    span3.classList.remove("span6");
})
