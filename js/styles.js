/*=========HEADER==========*/
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("backblur" , window.scrollY > 50);
    header.classList.toggle("onscroll" , window.scrollY > window.innerHeight*0.8);
});

/*Menu Hamburger*/
const menu_hamb = document.querySelector('.hamb-menu');
const nav_hamb = document.querySelector('.header>nav');
menu_hamb.addEventListener("click", ()=>{
    menu_hamb.classList.toggle("hamb-open");
    nav_hamb.classList.toggle("menu-open");
})

const links = document.querySelectorAll('.header>nav a');
links.forEach((link)=>{
    link.addEventListener("click",()=>{
        menu_hamb.classList.remove("hamb-open");
        nav_hamb.classList.remove("menu-open");
    })
})

/*=========ANIMATION CARDS TEAM SECTION==========*/
const cards = document.querySelectorAll('.card-team');

cards.forEach((card) => {
    card.addEventListener("click",(event)=>{
        const frontCard = event.currentTarget.querySelector('.front-card');
        const backCard = event.currentTarget.querySelector('.back-card');

        zfc = window.getComputedStyle(frontCard).zIndex;
        
        if(zfc == '2'){
            backCard.classList.add('change');

            setTimeout(() => {
                frontCard.style.zIndex = '1'
                backCard.style.zIndex = '2'
                backCard.classList.remove('change');
            }, 1500);
        }
        else{
            backCard.classList.add('change-reverse');
            
            setTimeout(() => {
                backCard.style.zIndex = '1'
                frontCard.style.zIndex = '2'
                backCard.classList.remove('change-reverse');
            }, 1500);
        }
    })
})