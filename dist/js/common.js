function bgSlide1() {
    var div = document.getElementById("comfort");
    div.setAttribute("style", "background: url(img/1.jpg); background-size: cover;");
    setTimeout(bgSlide2, 5000);
}
function bgSlide2() {
    var div = document.getElementById("comfort");
    div.setAttribute("style", "background: url(img/2.jpg); background-size: cover;");
    setTimeout(bgSlide3, 5000);
}
function bgSlide3() {
    var div = document.getElementById("comfort");
    div.setAttribute("style", "background: url(img/3.jpg); background-size: cover;");
    setTimeout(bgSlide4, 5000);

}
function bgSlide4() {
    var div = document.getElementById("comfort");
    div.setAttribute("style", "background: url(img/4.jpg); background-size: cover;");
    setTimeout(bgSlide1, 5000);
}

setTimeout(bgSlide1, 5000);

function bgSlideOffice1() {
    var div = document.getElementById("select-office");
    div.setAttribute("style", "background: url(img/office.jpg); background-size: cover;");
    setTimeout(bgSlideOffice2, 5000);
}
function bgSlideOffice2() {
    var div = document.getElementById("select-office");
    div.setAttribute("style", "background: url(img/office1.jpg); background-size: cover;");
    setTimeout(bgSlideOffice3, 5000);
}
function bgSlideOffice3() {
    var div = document.getElementById("select-office");
    div.setAttribute("style", "background: url(img/office2.jpg); background-size: cover;");
    setTimeout(bgSlideOffice1, 5000);
}

setTimeout(bgSlideOffice1, 5000); 

  

