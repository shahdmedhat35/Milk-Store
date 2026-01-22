
const cards = [
    { id: 'card1', image: 'images/bg1.png',color: '#c27391' ,name:'Blueberry Burst' ,bg_color: '#e29eba', txt_color:'#9e4f6d'},
    { id: 'card2', image: 'images/bg2.png' ,color: '#fcaaba' ,name:'Strawberry Bliss' ,bg_color: '#fec5d0', txt_color:'#e3768c'},
    { id: 'card3', image: 'images/bg3.png' ,color: '#f8e493' ,name:'Banana Cream' ,bg_color: '#fceebf', txt_color:'#e5c64c'},
    { id: 'card4', image: 'images/bg4.png' ,color: '#b67c5a' ,name:'Chocolate Dream' ,bg_color: '#d3a88b', txt_color:'#9b694d'},
    { id: 'card5', image: 'images/bg5.png' ,color: '#dceca8' ,name:'Mint Fresh' ,bg_color: '#ebf3ca', txt_color:'#b5ca70'},
    { id: 'card6', image: 'images/bg6.png' ,color: '#f5e46a' ,name:'Passion Fruit' ,bg_color: '#fdf7aa', txt_color:'#d7c74f'}
];

cards.forEach(card => {
    const element = document.getElementById(card.id);
    const btn = element.querySelector('.btns');
    const name = element.querySelector('.name');
    const circle = element.querySelector('.circle');
        btn.style.backgroundColor = card.color;
        name.style.color = card.txt_color;
        circle.style.backgroundColor = card.color;
        element.style.backgroundColor=card.bg_color;
        name.textContent=card.name;
        element.addEventListener('mouseenter', () => {
            element.style.backgroundImage = `url('${card.image}')`;
            element.style.backgroundRepeat = 'no-repeat';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.backgroundImage = '';
        });
});