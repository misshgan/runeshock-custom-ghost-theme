window.addEventListener('load', () => {

	const dropdownTarget = document.querySelector('.mobile-dropdown__target')

	if (dropdownTarget) {
		dropdownTarget.addEventListener('click', () => {
			dropdownTarget.classList.toggle('active');

			if (dropdownTarget.classList.contains('active')) {
				dropdownTarget.textContent = 'Close';
			} else {
				dropdownTarget.textContent = 'Socials'
			}
		})
	}

	const postBody = document.querySelector('.post-page__body');
	
	if (postBody) {
		let postLinks = postBody.getElementsByTagName('a')
		for (let i = 0; i < postLinks.length; i++) {
			postLinks[i].setAttribute('target', '_blank')
		}
	}

})


//# sourceMappingURL=custom-script.js.map