//ARROW CAROUSEL
const arrow = document.querySelectorAll('.arrow');
const movieList = document.querySelectorAll('.movie-list');
//Toggle
const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container, .navbar-container, .movie-list-title, .sidebar, .left-menu-icon, .toggle');

carousel();
function carousel(){
    arrow.forEach((arrow, i) => {

        const itemImg = movieList[i].querySelectorAll('img').length;
        let clickCounter = 0;
    
        arrow.addEventListener('click', () =>{
            const ratio = Math.floor(window.innerWidth / 270);
            clickCounter++;
            if (itemImg - (4 + clickCounter) + (4 - ratio) >= 0) {
                movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
            }
            else{
                movieList[i].style.transform = "translateX(0)";
                clickCounter = 0;
            }
            
        });
    });
}

ballToggle();

function ballToggle(){
    ball.addEventListener('click', () => {
        items.forEach( item => {
            item.classList.toggle('active');
        });
        ball.classList.toggle('active');
    });
}
