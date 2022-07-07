const barraMenu = document.querySelector('.hamb');
const navList = document.querySelector('.nav-list');
const links = document.querySelector('.nav-list li');

barraMenu.addEventListener('click', function (){
	this.classList.toggle('click');
	navList.classList.toggle('open')
})
