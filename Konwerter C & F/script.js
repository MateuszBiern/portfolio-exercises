const converter = document.querySelector('.converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
let farenheit
let celsius
const change = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
		result.textContent = ''
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
		result.textContent = ''
	}
}

const conv = () => {
	let input = document.querySelector('.converter').value

	if (one.textContent === '°C') {
		input = (input - 32) / 1.8

		result.innerHTML = input.toFixed(2) + ' °C'
		converter.value = ''
	} else {
		input = (input * 1.8) / 5 + 32

		result.innerHTML = input.toFixed(2) + ' °F'
		converter.value = ''
	}
}

const reset = () => {
	result.innerHTML = ''
	input = document.querySelector('.converter').value = ''
}

changeBtn.addEventListener('click', change)
convBtn.addEventListener('click', conv)
resetBtn.addEventListener('click', reset)
