const pass = document.querySelector('#password')
const p = document.querySelector('.passinfo')
const letters = /[a-z]/i
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const minValue = 10

const showMsg = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = 'Strong Password'
		p.style.color = 'green'
	} else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
		p.textContent = 'good Password'
		p.style.color = 'gold'
	} else {
		p.textContent = 'Weak Password'
		p.style.color = 'red'
	}
}
pass.addEventListener('keyup', showMsg)
