const buttons = document.querySelectorAll('.loycard');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeButton = document.getElementById('close-button');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		// Get the image src from the button's data attribute
		const imageSrc = button.getAttribute('data-image');
		modalImage.setAttribute('src', imageSrc);

		// Show the modal
		modal.style.display = 'block';
	});
});

closeButton.addEventListener('click', () => {
	modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
});
