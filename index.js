document.addEventListener(`DOMContentLoaded`, function () {
	createBoard(16);

	console.log(`Hi`);
});

function createBoard(size) {
	let board = document.querySelector(`.board`);
	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	let numDivs = size * size;

	for (let i = 0; i < numDivs; i++) {
		let box = document.createElement(`div`);
		box.classList = `box`;
		board.insertAdjacentElement(`beforeend`, box);
	}
}
