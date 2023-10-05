const sides = document.querySelectorAll(".input-side");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateProduct(b,h){
    const product = b*h;
    return product;}

    

function calculateArea(){
const product = calculateProduct (Number(sides[0].value) ,Number( sides[1].value));

outputEl.innerText = "The area of triangle is " + product;
}




areaBtn.addEventListener("click", calculateArea)