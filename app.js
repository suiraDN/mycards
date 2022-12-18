// function togglePicture(div) {
// 	var img = div.getElementsByTagName('img')[0];
// 	if (img.style.display === 'none') {
// 		img.style.display = 'block';
// 	} else {
// 		img.style.display = 'none';
// 	}
// }

function togglePicture(div) {
	let img = div.getElementsByTagName('img')[0];
	if (img.classList.contains('visible')) {
		img.classList.remove('visible');
	} else {
		img.classList.add('visible');
	}
}
