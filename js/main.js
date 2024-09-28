document.addEventListener('DOMContentLoaded', function () {
	function toggleCountry(countryClass) {
		const toggleBtn = document.querySelector('.toggle-' + countryClass)
		const flags = document.querySelectorAll('.' + countryClass)

		toggleBtn.addEventListener('click', function () {
			toggleBtn.querySelector('img').classList.toggle('toggle-img-active')
			flags.forEach(flag => {
				flag.classList.toggle('flag-visible')
			})
		})
	}

	const countryClasses = [
		'canada',
		'czech',
		'finland',
		'russia',
		'slovakia',
		'sweden',
		'switzerland',
		'usa',
	]
	countryClasses.forEach(countryClass => toggleCountry(countryClass))

	const toggleCountryBtn = document.querySelector('.btn-toggle-country')
	const flagWrappers = document.querySelectorAll('.flag-wrapper img')

	toggleCountryBtn.addEventListener('click', function () {
		flagWrappers.forEach(flag => {
			flag.classList.toggle('hide-flag')
		})

		if (toggleCountryBtn.textContent === 'Скрыть') {
			toggleCountryBtn.textContent = 'Показать'
			document.querySelectorAll('.block-img-blockade').forEach(block => {
				block.style.display = 'none'
			})
		} else {
			toggleCountryBtn.textContent = 'Скрыть'
			document.querySelectorAll('.block-img-country img').forEach(img => {
				img.classList.remove('toggle-img-active')
			})
			document.querySelectorAll('.flag-wrapper img').forEach(flag => {
				flag.classList.remove('flag-visible')
			})
			document.querySelectorAll('.block-img-blockade').forEach(block => {
				block.style.display = 'block'
			})
		}
	})
})
