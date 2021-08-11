let pointer = document.querySelector('#pointer')
document.body.onscroll = function () {
    if (document.body.scrollTop > 1500) {
        pointer.style.opacity = "1"
    } else {
        pointer.style.opacity = "0"

    }
}
pointer.addEventListener('click',scroolingTop)
function scroolingTop(){
    let curent = document.body.scrollTop;
    let scroll = setInterval(function () {
        document.body.scrollTop = curent -= 100
        if (curent < 2) {
            clearInterval(scroll)
        }
    }, 2);
}

    
