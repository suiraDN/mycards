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
	// Hide the modal
	modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
	// Only hide the modal if the click was not on the modal content
	if (event.target !== modalContent) {
		modal.style.display = 'none';
	}
});
