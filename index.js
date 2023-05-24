createGrid(16);

function createGrid(size) {
	let board = document.querySelector(`.board`);
	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	for (let i = 0; i < 256; i++) {
		let box = document.createElement(`div`);
		box.style.backgroundColor = `blue`;
		board.insertAdjacentElement(`beforeend`, box);
	}
}
