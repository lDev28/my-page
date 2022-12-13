const $ = document

const burgerMenu = $.getElementById('burgerMenu')
burgerMenu.addEventListener('click', myBurger)

function myBurger() {
	$.querySelector('.header__menu').classList.toggle('active')
	$.querySelector('.header__burger').classList.toggle('active')
	$.body.classList.toggle('active')
}


const btnTop = $.querySelector('#btnTop')

btnTop.addEventListener('click', () => {
	wrapper.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})

const wrapper = $.querySelector('.wrapper')

wrapper.addEventListener('scroll', () => {
	if (wrapper.scrollTop > 100) {
		btnTop.style.display = 'block'
		btnTop.style.opacity = '100%'
	} else {
		btnTop.style.display = 'none'
	}

})
