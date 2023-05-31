function show(){
    document.querySelector('.hamburger').classList.toggle('open') /*toggle helps to check the visibility of elements*/
    document.querySelector('.navigation').classList.toggle('active')
}

function sct() {
    window.scrollTo(0, 0); /*this helps to scroll the page to the top i.e., 0,0 coordinates*/
}