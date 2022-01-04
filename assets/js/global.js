
//MENU MOBILE
const btnMenu = document.querySelector('.topo__btn');
const menu = document.querySelector('.topo__menu');
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('topo__menu__active');
});

//PORTFOLIO

let portfolioList = document.querySelectorAll('.portfolio__list');
let portfolioItem = document.querySelectorAll('.portfolio__item');

for(let i = 0; i < portfolioList.length; i++){
    portfolioList[i].addEventListener('click', function(){
        for(let j = 0; j < portfolioList.length; j++){
            portfolioList[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k < portfolioItem.length; k++){
            portfolioItem[k].classList.remove('active');
            portfolioItem[k].classList.add('hide');

            if(portfolioItem[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                portfolioItem[k].classList.remove('hide');
                portfolioItem[k].classList.add('active');
            }
        }
    })
}

//