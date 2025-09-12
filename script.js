let buttons = document.getElementsByClassName("buttons")
let paragraphs = document.getElementsByClassName("paragraph");
let images = document.getElementsByClassName('images');


for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener('click', () => {
    if( paragraphs[i].style.display === "block") {
     paragraphs[i].style.display = "none";
     images[i].setAttribute("src", "Icons/25623.png");
    }
       else {
     paragraphs[i].style.display = "block";
     images[i].setAttribute("src", "Icons/cross-23.png")
       }
     }
   )
 }