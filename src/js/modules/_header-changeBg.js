if (document?.querySelector('.cover')) {

	const header = document?.querySelector('header');
	const cover = document?.querySelector('.cover');
	const coverPadding = getComputedStyle(cover).getPropertyValue('padding-top'); //получаем стили

	window.addEventListener('scroll', () => {
		if (window.scrollY > parseInt(coverPadding)) {
			header.classList.add('header--white');
		} else {
			header.classList.remove('header--white');
		}
	})

}