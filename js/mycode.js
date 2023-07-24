function readMore() {
    if (document.getElementById("readmore-btn").innerText == "Read More") {
        document.getElementsByClassName("about-content").css(display, "none");
        document.getElementById("readmore-btn").innerHTML = 'Read Less';
    }else{
        document.getElementsByClassName("about-content").before(document.getElementsByClassName("about-content").lastChild).css(display, "none");
        document.getElementById("readmore-btn").innerHTML = 'Read More';
    }
}
