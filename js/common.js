const $ = document

const burgerMenu = $.getElementById('burgerMenu')
burgerMenu.addEventListener('click', myBurger)

function myBurger() {
	document.querySelector('.header__menu').classList.toggle('active');
	document.querySelector('.header__burger').classList.toggle('active');
	document.body.classList.toggle('active');
}