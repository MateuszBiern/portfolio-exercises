const sizeG = document.querySelector('.sizeUp')
const sizem = document.querySelector('.sizeDown')
const zmianaC = document.querySelector('.color')

sizeG.addEventListener('click', () => {
	const liczba = document.querySelector('.text p')
	let size = parseInt(window.getComputedStyle(liczba).fontSize)
	liczba.style.fontSize = size + 1 + 'px'
})

sizem.addEventListener('click', () => {
	const liczba = document.querySelector('.text p')
	let size = parseInt(window.getComputedStyle(liczba).fontSize)

	if (size > 32) {
		liczba.style.fontSize = size - 1 + 'px'
	} else {
	}
})

zmianaC.addEventListener('click', () => {
	const zmianaColor = document.querySelector('.text p')
	const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink']
	const randomIndex = Math.floor(Math.random() * colors.length)

	zmianaColor.style.color = colors[randomIndex]
})
