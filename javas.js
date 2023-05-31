function show(){
    document.querySelector('.hamburger').classList.toggle('open') /*toggle helps to check the visibility of elements*/
    document.querySelector('.navigation').classList.toggle('active')
    /*hamburger menu by CodeMode available at https://www.youtube.com/watch?v=vkNkeCSb13M*/
}

function sct() {
    window.scrollTo(0, 0); 
    /*this helps to scroll the page to the top i.e., 0,0 coordinates*/
}