const $ = document
const btnTop = $.querySelector('#btnTop')
const wrapper = $.querySelector('.wrapper')
let viewport = $.getElementById("sliderViewport").offsetWidth
let btnNext = $.getElementById("sliderNextBtn")
let btnPrev = $.getElementById("sliderPrevBtn")
let slider = $.querySelector(".slider__track")
let viewSliders = $.querySelectorAll(".slider__viewSlide")
let viewSlide = 0

const burgerMenu = $.getElementById('burgerMenu')
burgerMenu.addEventListener('click', myBurger)

function myBurger() {
	$.querySelector('.header__menu').classList.toggle('active')
	$.querySelector('.header__burger').classList.toggle('active')
	$.body.classList.toggle('active')

	if ($.body.classList == 'active') {
		btnTop.style.display = 'none'
	} else {
		btnTop.style.display = ''
	}
}


btnTop.addEventListener('click', () => {
	wrapper.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})


wrapper.addEventListener('scroll', () => {
	if (wrapper.scrollTop > 100) {
		btnTop.style.display = 'block'
		btnTop.style.opacity = '100%'
	} else {
		btnTop.style.display = 'none'
	}
})


viewSliders[0].style.backgroundColor = "#3bc8ff";

btnNext.addEventListener("click", nextBtnfunc)
function nextBtnfunc() {
	viewSliders[viewSlide].style.backgroundColor = "#000a11";
	if (viewSlide < 4) {
		viewSlide++;
	} else {
		viewSlide = 0;
	}
	viewSliders[viewSlide].style.backgroundColor = "#3bc8ff";
	slider.style.left = -viewSlide * viewport + "px";
}
nextBtnfunc()
setInterval(nextBtnfunc, 3500);

btnPrev.addEventListener("click", function () {
	viewSliders[viewSlide].style.backgroundColor = "#000a11";
	if (viewSlide > 0) {
		viewSlide--;
	} else {
		viewSlide = 4;
	}
	viewSliders[viewSlide].style.backgroundColor = "#3bc8ff";
	slider.style.left = -viewSlide * viewport + "px";
});




let stackViewport = $.getElementById("stackSliderViewport").offsetWidth
let stackBtnNext = $.getElementById("stackNextBtn")
let stackBtnPrev = $.getElementById("stackPrevBtn")
let stackSlider = $.querySelector(".stack__track")
let stackViewSliders = $.querySelectorAll(".stack__viewSlide")
let stackViewSlide = 0


stackViewSliders[0].style.backgroundColor = "#3bc8ff";

stackBtnNext.addEventListener("click", nextBtnStack)
function nextBtnStack() {
	stackViewSliders[stackViewSlide].style.backgroundColor = "#000a11";
	if (stackViewSlide < 4) {
		stackViewSlide++;
	} else {
		stackViewSlide = 0;
	}
	stackViewSliders[stackViewSlide].style.backgroundColor = "#3bc8ff";
	stackSlider.style.left = -stackViewSlide * stackViewport + "px";
}
nextBtnStack()
setInterval(nextBtnStack, 3500);

stackBtnPrev.addEventListener("click", function () {
	stackViewSliders[stackViewSlide].style.backgroundColor = "#000a11";
	if (stackViewSlide > 0) {
		stackViewSlide--;
	} else {
		stackViewSlide = 4;
	}
	stackViewSliders[stackViewSlide].style.backgroundColor = "#3bc8ff";
	stackSlider.style.left = -stackViewSlide * stackViewSlide + "px";
});