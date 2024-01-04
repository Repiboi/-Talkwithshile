const header = document.querySelector("header");
window.addEventListener("scroll",  function(){
    header.classList.toggle("sticky", this.window.scrollY > 0)
})

function View(){
    window.location.href="#view"
}
function contact(){
    window.location.href="#contact"
}

window.addEventListener('scroll', function () {
    var scrollUpContainer = document.getElementById('scroll-up-container');
    var productsSection = document.getElementById('view');
    var scrollY = window.scrollY || window.pageYOffset;

   
    var threshold = productsSection.offsetTop - window.innerHeight / 2;

    if (scrollY > threshold) {
        scrollUpContainer.style.display = 'block';
    } else {
        scrollUpContainer.style.display = 'none'; 
    }
    
});

